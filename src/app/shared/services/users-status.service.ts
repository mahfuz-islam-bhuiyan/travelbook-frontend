import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TravelBookApiResponseModel} from "../domains/travel-book-api-response.model";

@Injectable({providedIn: 'root'})
export class UsersStatusService {
  private baseUrl = 'usersstatus/';

  constructor(private httpClient: HttpClient, @Inject('BASE_API_URL') private baseApiUrl: string) {
  }


}
