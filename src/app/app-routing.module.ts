import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  // {path: '', loadChildren: './account/account.module#AccountModule'},
  {path: '', loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)},

  {
    path: 'user/create',
    loadChildren: () => import('./main/user/user-create/user-create.module').then(m => m.UserCreateModule)
  },
  {
    path: 'user/authenticate',
    loadChildren: () => import('./main/user/user-authenticate/user-authenticate.module').then(m => m.UserAuthenticateModule)
  },
  {
    path: 'user/profile',
    loadChildren: () => import('./main/user/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  // {
  //   path: 'usersstatus/create',
  //   loadChildren: () => import('./main/user/user-.module').then(m => m.HomeModule)
  // },
  // {
  //   path: 'usersstatus/edit',
  //   loadChildren: () => import('./main/user/user-.module').then(m => m.HomeModule)
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
