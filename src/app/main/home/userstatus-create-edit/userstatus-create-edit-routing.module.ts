import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserstatusCreateEditComponent} from "./userstatus-create-edit.component";


const routes: Routes = [
  {path: '', component: UserstatusCreateEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserstatusCreateEditRoutingModule {
}
