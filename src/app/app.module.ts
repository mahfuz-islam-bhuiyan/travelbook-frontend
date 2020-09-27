import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHttpInterceptorService} from './shared/interceptors/auth-http-interceptor.service';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    BsDropdownModule, TooltipModule, ModalModule,
    {provide: 'BASE_API_URL', useValue: environment.baseApiURL},
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
