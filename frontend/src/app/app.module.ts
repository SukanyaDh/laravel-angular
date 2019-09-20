import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { ProductsFormComponent } from './products/products-form/products-form.component';
import {NgxPaginationModule} from 'ngx-pagination';

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
    SidebarComponent,
    ProductsComponent,
    ProductsFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SnotifyModule,
    DataTablesModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
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
