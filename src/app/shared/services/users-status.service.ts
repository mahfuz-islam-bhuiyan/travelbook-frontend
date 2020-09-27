import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersStatusModel} from '../domains/users-status.model';
import {TravelBookApiResponseModel} from '../domains/travel-book-api-response.model';

@Injectable({providedIn: 'root'})
export class UsersStatusService {
  private baseUrl = 'status';

  constructor(private httpClient: HttpClient, @Inject('BASE_API_URL') private baseApiUrl: string) {
  }

  getStatuses = () => this.httpClient.get<UsersStatusModel[]>(this.baseApiUrl + this.baseUrl + '/');
  getStatus = (userStatusId) => this.httpClient.get<UsersStatusModel>(this.baseApiUrl + this.baseUrl + '/' + userStatusId);

  getUserStatuses = (param) => this.httpClient.post<UsersStatusModel[]>(this.baseApiUrl + this.baseUrl + '/getUserStatuses', param);

  createUpdateStatus = (status: UsersStatusModel) => this.httpClient.post<TravelBookApiResponseModel>(this.baseApiUrl + this.baseUrl + '/', status);

}
