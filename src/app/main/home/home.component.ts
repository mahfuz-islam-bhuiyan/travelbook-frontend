import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {UsersStatusService} from '../../shared/services/users-status.service';
import {UsersStatusModel} from '../../shared/domains/users-status.model';
import {UserLoginDataModel} from '../../shared/domains/user-login-data.model';
import {UserModel} from '../../shared/domains/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userStatuses: UsersStatusModel[] = [];
  userFromLocalStorage: UserModel = null;

  constructor(private userService: UserService, private statusService: UsersStatusService, private router: Router) {
    this.userFromLocalStorage = userService.getUserInfoFromSession();
  }

  ngOnInit() {
    this.getAllPublicStatus();
  }

  getAllPublicStatus() {
    this.statusService.getStatuses().subscribe(res => this.userStatuses = res);
  }


}
