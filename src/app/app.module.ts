import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/account/user-login/user-login.component';
import { UserRegistrationComponent } from './components/account/user-registration/user-registration.component';
import { AuthenticationComponent } from './components/layout/authentication/authentication.component';
import { HomeComponent } from './components/layout/home/home.component';
import { MainComponent } from './components/entities/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AuthenticationComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
