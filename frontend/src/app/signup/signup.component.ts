import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http:HttpClient) { }
  onSubmit()
  {
    this.http.post('http://localhost:8000/api/signup',this.form).subscribe(
      data=>console.log(data),
      error=>this.handleErrors(error)
    );
  }

  handleErrors(error)
  {
    this.error = error.error.errors;
  }
  ngOnInit() {
  }

}
