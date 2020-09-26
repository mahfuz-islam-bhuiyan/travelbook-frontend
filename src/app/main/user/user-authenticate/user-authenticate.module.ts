import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAuthenticateComponent} from './user-authenticate.component';
import {UserAuthenticateRoutingModule} from "./user-authenticate-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [UserAuthenticateComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserAuthenticateRoutingModule
  ]
})
export class UserAuthenticateModule { }
