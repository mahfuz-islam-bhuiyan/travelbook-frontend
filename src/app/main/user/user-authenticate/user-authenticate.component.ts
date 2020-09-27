import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {CommonUtils} from '../../../shared/util/commonUtils';
import {UserModel} from '../../../shared/domains/user.model';

@Component({
  selector: 'app-user-authenticate',
  templateUrl: './user-authenticate.component.html',
  styleUrls: ['./user-authenticate.component.css']
})
export class UserAuthenticateComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private userService: UserService, private router: Router, private commonUtils: CommonUtils) {
  }

  ngOnInit() {
  }

  onAuthenticate() {
    if (!this.areInputsValidated()) {
      return;
    }
    this.userService.authenticateUser(this.user.email, this.user.password).subscribe(
      data => {
        // this.signinFail = false;
        this.commonUtils.goToHome();
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // this.signinFail = true;

          alert('Invalid email or password');
        }
      }
    );
  }

  areInputsValidated() {
    if (this.commonUtils.isNullOrBlank(this.user.email, 'Email')) {
      return false;
    } else if (this.commonUtils.isNotValidEmail(this.user.email)) {
      return false;
    } else if (this.commonUtils.isNullOrBlank(this.user.password, 'Password')) {
      return false;
    }
    return true;
  }

}
