import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from '../services/apiresponse.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    email:null,
    password:null,
    name:null,
    password_confirmation:null
  };
  public error = [];
  constructor(private apicall:ApiresponseService,private tokenData:TokenService,
    private router: Router,private auth:AuthService) { }
  onSubmit()
  {
    this.apicall.signup(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleErrors(error)
    );
  }
  handleResponse(data)
  {
    this.tokenData.setToken(data.access_token);
    this.auth.changeStatus(true);
    this.router.navigateByUrl('/profile');
    //localStorage.setItem('token',data.access_token);
  }

  handleErrors(error)
  {
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
