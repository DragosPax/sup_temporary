import { Component, NgModule } from '@angular/core';
import { Event } from '../../../shared/models/Event';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { SupService } from '../../../services/sup.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StarRatingModule,
    FormsModule,
    NotFoundComponent,
    RouterModule,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  providers: [StarRatingConfigService],
})
export class EventsComponent {
  events: Event[] = [];
  constructor(
    public userService: UserService,
    private eventService: EventService,
    private supService: SupService,
    private toastrService: ToastrService,
    activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    let eventsObservable: Observable<Event[]>;
    activatedRoute.params.subscribe((params) => {
      eventsObservable = eventService.getAll();

      eventsObservable.subscribe((serverEvents) => {
        this.events = serverEvents;
      });
    });
  }

  ngOnInit() {}
}
