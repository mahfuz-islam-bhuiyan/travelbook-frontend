import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserAuthenticateComponent} from "./user-authenticate.component";


const routes: Routes = [
  {path: '', component: UserAuthenticateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthenticateRoutingModule {
}
