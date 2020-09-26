import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {UserCreateRoutingModule} from "./user-create-routing.module";
import {UserCreateComponent} from "./user-create.component";

@NgModule({
  declarations: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    UserCreateRoutingModule,
    FormsModule
  ]
})
export class UserCreateModule {
}
