import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../shared/domains/user.model";
import {UsersStatusModel} from "../../../shared/domains/users-status.model";
import {LocationService} from "../../../shared/services/location.service";
import {UsersStatusService} from "../../../shared/services/users-status.service";
import {Router} from "@angular/router";
import {LocationModel} from "../../../shared/domains/location.model";

@Component({
  selector: 'app-userstatus-create-edit',
  templateUrl: './userstatus-create-edit.component.html',
  styleUrls: ['./userstatus-create-edit.component.css']
})
export class UserstatusCreateEditComponent implements OnInit {

  status: UsersStatusModel = new UsersStatusModel();
  locations: LocationModel[] = [];

  constructor(
    private statusService: UsersStatusService,
    private locationService: LocationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getLocations();
  }

  getLocations = () => this.locationService.getLocations().subscribe(res => this.locations = res);

  onStatusPost() {

  }
}
