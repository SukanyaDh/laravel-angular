import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from 'src/app/services/apiresponse.service';
import { SnotifyService } from 'ng-snotify';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  public form = {
    email:null,
    password:null,
    password_confirmation:null,
    resetToken:null
  };
  public error = [];
  constructor(private apiresponse:ApiresponseService,private notify:SnotifyService,private route:ActivatedRoute,private router:Router) {
    route.queryParams.subscribe(
      params=>this.form.resetToken = params['token']
    )
   }

  ngOnInit() {
  }

  onSubmit()
  {
    this.apiresponse.resetPassword(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleErrors(error)
    )
  }
  handleResponse(data)
  {
    this.router.navigateByUrl('/login');
  }

  handleErrors(error)
  {
    this.error = error.error.errors;
  }
}
