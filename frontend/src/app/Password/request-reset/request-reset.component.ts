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
    this.notify.info('Wait...',{timeout:5000});
    this.apiresponse.sendPasswordResetLink(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.notify.error(error.error.error)
    )
  }
  handleResponse(data)
  {
    this.notify.success(data.success,{timeout:0});
    this.form.email=null;
  }
}
