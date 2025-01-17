import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SupService } from '../../../services/sup.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../shared/models/User';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-rent-sup',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './rent-sup.component.html',
  styleUrl: './rent-sup.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class RentSupComponent {
  rentSupsForm!: FormGroup;
  currentUser!: User;
  minDate: Date;
  constructor(
    private formBuilder: FormBuilder,
    private supService: SupService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }

  ngOnInit() {
    this.rentSupsForm = this.formBuilder.group({
      numberSups: ['1', [Validators.required]],
      selectedDate: [this.minDate, [Validators.required]],
    });
  }
  get fc() {
    return this.rentSupsForm.controls;
  }

  numberSupsAvailable!: number;

  select(event: any) {
    const selectedDate = event;
    this.rentSupsForm.controls['selectedDate'].setValue(selectedDate);
  }

  submit() {
    let { name, email, phone } = this.userService.currentUser;

    const formValue = this.rentSupsForm.value;
    formValue.selectedDate = this.formatDate(formValue.selectedDate);
    // const dateValue = formValue.selectedDate;

    this.supService
      .addRentSups({
        numberSups: this.fc.numberSups.value,
        selectedDate: this.fc.selectedDate.value,
        // selectedDate: dateValue,
        userName: name,
        userEmail: email,
        userPhone: phone,
      })
      .subscribe({
        next: () => {
          this.toastrService.success('SUP RENTED!');
        },
        error: (error) => {
          this.toastrService.error(error.error);
        },
      });
  }

  formatDate(date: Date): string {
    // Format the date to YYYY-MM-DD to avoid time zone issues
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  checkSupsAvailable(date: any) {
    this.supService.getSupsAvailable(date).subscribe((serverNrSup) => {
      this.numberSupsAvailable = serverNrSup;
    });
  }
}
