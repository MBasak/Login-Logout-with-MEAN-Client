import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ValidateService } from './validate.service';
import { FlashMessageComponent } from './flash-message/flash-message.component';
import { AuthService } from './auth.service';
import { FleetingMessageComponent } from './fleeting-message/fleeting-message.component';
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FlashMessageComponent,
    FleetingMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ValidateService,
    AuthService,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
