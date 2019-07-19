import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from 'src/app/services/apiresponse.service';
import { SnotifyModule, SnotifyService } from 'ng-snotify';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email:null
  };
  public error = [];
  constructor(private apiresponse:ApiresponseService,private notify:SnotifyService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    this.apiresponse.sendPasswordResetLink(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.notify.error(error.error.error)
    )
  }
  handleResponse(data)
  {
    console.log(data);
    this.form.email=null;
  }
}
