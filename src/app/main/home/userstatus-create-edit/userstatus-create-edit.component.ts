import {Component, OnInit} from '@angular/core';
import {UsersStatusModel} from '../../../shared/domains/users-status.model';
import {LocationService} from '../../../shared/services/location.service';
import {UsersStatusService} from '../../../shared/services/users-status.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  private userStatusId: any;
  private isEditForm: boolean;


  constructor(
    private statusService: UsersStatusService,
    private locationService: LocationService,
    private userService: UserService,
    private route: ActivatedRoute,
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
    if (this.route.snapshot.params.userStatusId) {
      this.userStatusId = this.route.snapshot.params.userStatusId;
      this.isEditForm = true;
      this.getStatus(this.userStatusId);
    }
  }

  getLocations = () => this.locationService.getLocations().subscribe(res => this.locations = res);

  getStatus(userStatusId) {
    this.statusService.getStatus(userStatusId).subscribe(res => {
      this.status = res == null ? new UsersStatusModel() : res;
    });
  }

  onStatusPostUpdate() {
    if (this.status.user.userId == null) {
      this.status.user.userId = this.userFromLocalStorage.userId;
    }
    this.statusService.createUpdateStatus(this.status).subscribe(res => {
      if (res) {
        if (TravelBookApiResponseModel.isStatusSuccess(res.status)) {
          alert(res.msg);
          this.commonUtils.goToUserProfile();
        } else {
          alert(res.msg);
        }
      }
    });
  }
}
