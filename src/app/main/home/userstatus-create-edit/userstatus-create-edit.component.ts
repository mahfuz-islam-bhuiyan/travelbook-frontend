import {Component, OnInit} from '@angular/core';
import {UsersStatusModel} from '../../../shared/domains/users-status.model';
import {LocationService} from '../../../shared/services/location.service';
import {UsersStatusService} from '../../../shared/services/users-status.service';
import {Router} from '@angular/router';
import {LocationModel} from '../../../shared/domains/location.model';
import {TravelBookApiResponseModel} from '../../../shared/domains/travel-book-api-response.model';
import {CommonUtils} from '../../../shared/util/commonUtils';
import {UserService} from '../../../shared/services/user.service';
import {UserModel} from '../../../shared/domains/user.model';

@Component({
  selector: 'app-userstatus-create-edit',
  templateUrl: './userstatus-create-edit.component.html',
  styleUrls: ['./userstatus-create-edit.component.css']
})
export class UserstatusCreateEditComponent implements OnInit {

  status: UsersStatusModel = new UsersStatusModel();
  locations: LocationModel[] = [];
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
      this.getLocations();
    }
  }

  getLocations = () => this.locationService.getLocations().subscribe(res => this.locations = res);

  onStatusPost() {
    this.status.user.userId = this.userFromLocalStorage.userId;
    this.statusService.createStatus(this.status).subscribe(res => {
      if (res) {
        if (TravelBookApiResponseModel.isStatusSuccess(res.status)) {
          alert(res.msg);
          this.commonUtils.goToHome();
        } else {
          alert(res.msg);
        }
      }
    });
  }
}
