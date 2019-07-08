import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes, RoutesRecognized } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SIGHUP } from 'constants';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './Password/request-reset/request-reset.component';
import { ResponseResetComponent } from './Password/response-reset/response-reset.component';
const appRoute: Routes=[
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"request-password-reset",
    component:RequestResetComponent
  },
  {
    path:"response-password-reset",
    component:ResponseResetComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
