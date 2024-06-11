import { environment } from '../../../environments/environment';

const BASE_URL = 'http://localhost:5000';
// const BASE_URL = environment.production ? '' : 'http://localhost:5000';
// const production = process.env.NODE_ENV === 'production';
// const BASE_URL = production ? '' : 'http://localhost:5000/';

export const EVENTS_URL = BASE_URL + '/api/events';
export const EVENTS_TAGS_URL = EVENTS_URL + '/tags';
//export const EVENTS_TAGS_URL = BASE_URL + '/api/events/tags';

export const EVENTS_BY_SEARCH_URL = EVENTS_URL + '/search/';
export const EVENTS_BY_TAG_URL = EVENTS_URL + '/tag/';
export const EVENTS_BY_ID_URL = EVENTS_URL + '/';

//----Login
export const USER_LOGIN_URL = BASE_URL + '/api/users/login';

//----Register
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

//-----Order
export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL =
  ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';

//-----Restaurant
export const RESTAURANT_URL = BASE_URL + '/api/restaurant';
//-----Add-Event-Item

export const WEATHER_URL = RESTAURANT_URL + '/weather';
//AR TREBUI ADMIN?
export const ADD_EVENT_ITEM_URL = RESTAURANT_URL + '/addEventItem';
//-----Messages
export const ADD_MESSAGE_URL = RESTAURANT_URL + '/addMessage';
export const GET_MESSAGES_URL = RESTAURANT_URL + '/getMessages';

//-----Review
export const ADD_REVIEW_URL = RESTAURANT_URL + '/addReview';
export const GET_REVIEWS_URL = RESTAURANT_URL + '/getReviews';

//-----Newsletter
export const ADD_EMAIL_NEWSLETTER_URL = RESTAURANT_URL + '/addEmailNewsletter';
export const GET_EMAIL_NEWSLETTER_URL = RESTAURANT_URL + '/getEmailNewsletter';

//--------SUPS
export const ADD_RENT_SUPS_URL = RESTAURANT_URL + '/addRentSup';
export const GET_RENT_SUPS_URL = RESTAURANT_URL + '/getRentSup';
export const GET_SUPS_AVAILABLE_URL = RESTAURANT_URL + '/getSupsAvailable';
