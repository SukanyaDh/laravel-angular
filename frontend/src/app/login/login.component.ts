import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from '../services/apiresponse.service';
import { TokenService } from '../services/token.service';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  };
  public error = null;
  constructor(private apicall:ApiresponseService,
              private tokenData:TokenService,
              private router: Router,
              private auth:AuthService) { }

  onSubmit()
  {
    this.apicall.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleErrors(error)
    );
  }

  handleResponse(data)
  {
    console.log(data);
    this.tokenData.setToken(data.token);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('/profile');
    //localStorage.setItem('token',data.access_token);
  }

  handleErrors(error)
  {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}
