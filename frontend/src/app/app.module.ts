import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestResetComponent } from './Password/request-reset/request-reset.component';
import { ResponseResetComponent } from './Password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiresponseService } from './services/apiresponse.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from "./services/after-login.service";
import { BeforeLoginService } from './services/before-login.service';
import {  SnotifyService, ToastDefaults, SnotifyModule } from 'ng-snotify';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { DataTablesModule } from 'angular-datatables';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    CategoriesComponent,
    CategoryFormComponent,
    LoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    DataTablesModule,
    MatProgressSpinnerModule
  ],
  providers: [ApiresponseService,TokenService,AuthService,AfterLoginService,BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
