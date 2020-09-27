import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommonUtils {

  constructor(private router: Router) {
  }

  goToHome = () => this.router.navigate(['/']).then(value => location.reload());
  goToSignIn = () => this.router.navigate(['/user/authenticate']);
  goToUserProfile = () => this.router.navigate(['/user/profile']);
  goToStatusEdit = (userStatusId) => this.router.navigate(['/usersstatus/edit/', userStatusId]);

  isNullOrBlank(input, fieldName) {
    if (input == null || input === '') {
      alert(fieldName + ' can not be blank');
      return true;
    }
    return false;
  }

  isNotValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      alert('Invalid email format');
      return true;
    }
    return false;
  }

}
