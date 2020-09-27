import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserstatusCreateEditRoutingModule} from './userstatus-create-edit-routing.module';
import {UserstatusCreateEditComponent} from './userstatus-create-edit.component';


@NgModule({
  declarations: [
    UserstatusCreateEditComponent
  ],
  imports: [
    CommonModule,
    UserstatusCreateEditRoutingModule,
    FormsModule
  ]
})
export class UserstatusCreateEditModule {
}
