import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from "../domains/user.model";
import {TravelBookApiResponseModel} from "../domains/travel-book-api-response.model";
import {LocalStoragePropertyNameEnum} from "../enum/local-storage-property-name.enum";
import {UserLoginDataModel} from "../domains/user-login-data.model";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class UserService {
  private baseUrl = 'user/';

  constructor(private httpClient: HttpClient, @Inject('BASE_API_URL') private baseApiUrl: string) {
  }

  getUsers = () => this.httpClient.get<UserModel[]>(this.baseApiUrl + this.baseUrl)

  createUser(user: UserModel) {
    return this.httpClient.post<TravelBookApiResponseModel>(this.baseApiUrl + this.baseUrl, user).pipe(
      map(
        (signUpResponse: TravelBookApiResponseModel) => {
          if (signUpResponse && signUpResponse.result) {
            this.processAuthResponse(signUpResponse.result);
          }
          return signUpResponse;
        }
      ));
  }

  authenticateUser(username, password) {
    return this.httpClient.post<any>( this.baseApiUrl + this.baseUrl + 'authenticate', {username, password}).pipe(
      map((userLoginData: UserLoginDataModel) => this.processAuthResponse(userLoginData))
    );
  }

  private processAuthResponse(userLoginData: UserLoginDataModel) {
    if (userLoginData == null) {
      return userLoginData;
    }
    // set logged-in user info in local storage
    this.setUserInLocalStorage(JSON.stringify(userLoginData.user));
    this.setTokenInLocalStorage(userLoginData.token);

    return userLoginData;
  }

  setUserInLocalStorage = (userString: string) => localStorage.setItem(LocalStoragePropertyNameEnum.travelBookUser, userString);
  setTokenInLocalStorage = (token: string) => localStorage.setItem(LocalStoragePropertyNameEnum.travelBookUserToken, token);

  isUserLoggedIn() {
    const tokenInSession = localStorage.getItem(LocalStoragePropertyNameEnum.travelBookUserToken);
    return tokenInSession == null ? false : true;
  }

  getUserInfoFromSession() {
    const userInfoFromSession = localStorage.getItem(LocalStoragePropertyNameEnum.travelBookUser);
    return userInfoFromSession != null ? JSON.parse(userInfoFromSession) : null;
  }


  logout() {
    localStorage.removeItem(LocalStoragePropertyNameEnum.travelBookUser);
    localStorage.removeItem(LocalStoragePropertyNameEnum.travelBookUserToken);
  }
}
