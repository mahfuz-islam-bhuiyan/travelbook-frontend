import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CommonUtils {

  constructor(private router: Router) {
  }

  goToHome = () => this.router.navigate(['/']);
  goToSignIn = () => this.router.navigate(['/user/authenticate']);
  goToUserProfile = () => this.router.navigate(['/user/profile']);
  goToStatusEdit = (userStatusId) => this.router.navigate(['/usersstatus/edit/', userStatusId]);


}
