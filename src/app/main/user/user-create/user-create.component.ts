import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {CommonUtils} from "../../../shared/util/commonUtils";
import {UserModel} from "../../../shared/domains/user.model";
import {TravelBookApiResponseModel} from "../../../shared/domains/travel-book-api-response.model";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: UserModel = new UserModel();
  isSubmittingInProcess: any;

  constructor(
    private userService: UserService,
    private commonUtils: CommonUtils) {
  }

  ngOnInit() {
  }

  onUserCreate() {
    this.userService.createUser(this.user).subscribe(res => {
      if (res != null) {
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
