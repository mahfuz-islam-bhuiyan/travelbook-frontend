import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";
import {UsersStatusService} from "../../shared/services/users-status.service";
import {UsersStatusModel} from "../../shared/domains/users-status.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userStatuses: UsersStatusModel[];


  constructor(private userService: UserService, private statusService: UsersStatusService, private router: Router) {
  }

  ngOnInit() {
  }

  goToUserAuth = () => this.router.navigate(['/user/authenticate']);

  goToUserCreate = () => this.router.navigate(['/user/create']);

  goToUserProfile = () => this.router.navigate(['/user/profile']);

  goToUserStatusCreate = () => this.router.navigate(['/usersstatus/create']);

  doLogOut() {

  }
}
