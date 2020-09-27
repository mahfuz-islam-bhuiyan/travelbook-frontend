import {Component, OnInit} from '@angular/core';
import {UsersStatusService} from '../../../shared/services/users-status.service';
import {LocationService} from '../../../shared/services/location.service';
import {UserService} from '../../../shared/services/user.service';
import {CommonUtils} from '../../../shared/util/commonUtils';
import {UsersStatusModel} from '../../../shared/domains/users-status.model';
import {LocationModel} from '../../../shared/domains/location.model';
import {UserModel} from '../../../shared/domains/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userStatuses: UsersStatusModel[] = [];
  userFromLocalStorage: UserModel = null;

  constructor(
    private statusService: UsersStatusService,
    private locationService: LocationService,
    private userService: UserService,
    private commonUtils: CommonUtils
  ) {
  }

  ngOnInit() {
    this.userFromLocalStorage = this.userService.getUserInfoFromSession();
    if (this.userFromLocalStorage == null || this.userFromLocalStorage.userId <= 0) {
      this.commonUtils.goToSignIn();
    } else {
      this.getAllUserStatus(this.userFromLocalStorage.userId);
    }
  }

  getAllUserStatus(userId) {
    const param = {userId};
    this.statusService.getUserStatuses(param).subscribe(res => this.userStatuses = res);
  }
}
