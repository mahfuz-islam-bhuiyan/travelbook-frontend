import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from "../domains/user.model";
import {TravelBookApiResponseModel} from "../domains/travel-book-api-response.model";
import {LocalStoragePropertyNameEnum} from "../enum/local-storage-property-name.enum";

@Injectable({providedIn: 'root'})
export class UserService {
  private baseUrl = 'user/';

  constructor(private httpClient: HttpClient, @Inject('BASE_API_URL') private baseApiUrl: string) {
  }

  /*
    User related endpoints
   */

  getUsers = () => this.httpClient.get<UserModel[]>(this.baseApiUrl + this.baseUrl)

  createUser(user: UserModel) {
    return this.httpClient.post<TravelBookApiResponseModel>(this.baseApiUrl + this.baseUrl, user);
  }

  logout() {
    localStorage.removeItem(LocalStoragePropertyNameEnum.travelBookUser);
    localStorage.removeItem(LocalStoragePropertyNameEnum.travelBookUserToken);
  }
}
