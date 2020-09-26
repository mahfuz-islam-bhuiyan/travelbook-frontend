import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";
import {LocalStoragePropertyNameEnum} from "../enum/local-storage-property-name.enum";
import {CommonUtils} from "../util/commonUtils";

@Injectable({providedIn: 'root'})
export class AuthHttpInterceptorService implements HttpInterceptor {

  constructor(private commonUtils: CommonUtils, private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem(LocalStoragePropertyNameEnum.travelBookUser)
          && localStorage.getItem(LocalStoragePropertyNameEnum.travelBookUserToken)) {

      req = req.clone({
        // headers: req.headers.set('Authorization', `Bearer 123`)
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem('travelBookUserToken')
        }
      });
    }
    // return next.handle(req);
    return next.handle(req).pipe(tap(
      (responseEvent: HttpEvent<any>) => {
        if (responseEvent instanceof HttpResponse) {
          // do stuff with response if you want
          console.log(responseEvent.url + ', ' + responseEvent.status + ', ' + responseEvent.statusText);
          console.log(responseEvent.body);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            if(err.url.indexOf('/authenticate') === -1) {
              this.userService.logout();

              this.commonUtils.goToHome();
            }
          }
        }
      }));
  }

}
