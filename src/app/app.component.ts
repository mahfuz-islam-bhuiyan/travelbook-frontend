import {Component, OnInit} from '@angular/core';
import {UserModel} from './shared/domains/user.model';
import {UserService} from './shared/services/user.service';
import {UsersStatusService} from './shared/services/users-status.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'travelbook-frontend';
  userFromLocalStorage: UserModel = null;

  constructor(private userService: UserService, private router: Router) {
    this.userFromLocalStorage = userService.getUserInfoFromSession();
  }

  ngOnInit() {
  }
  goToUserAuth = () => this.router.navigate(['/user/authenticate']);

  goToUserCreate = () => this.router.navigate(['/user/create']);

  goToUserProfile = () => this.router.navigate(['/user/profile']);

  goToUserStatusCreate = () => this.router.navigate(['/usersstatus/create']);

  doLogOut() {
    this.userService.logout();
    location.reload();
  }
}
