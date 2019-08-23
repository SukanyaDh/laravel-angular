import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes, RoutesRecognized } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './Password/request-reset/request-reset.component';
import { ResponseResetComponent } from './Password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
const appRoute: Routes=[
  {
    path:"login",
    component:LoginComponent,
    canActivate:[BeforeLoginService]
  },
  {
    path:"signup",
    component:SignupComponent,
    canActivate:[BeforeLoginService]
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[AfterLoginService]
  },
  {
    path:"categories",
    component:CategoriesComponent,
    canActivate:[AfterLoginService]
  },
  {
    path:"categories/add",
    component:CategoryFormComponent,
    canActivate:[AfterLoginService]
  },
  {
    path:"request-password-reset",
    component:RequestResetComponent,
    canActivate:[BeforeLoginService]
  },
  {
    path:"response-password-reset",
    component:ResponseResetComponent,
    canActivate:[BeforeLoginService]
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
