import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public loggedIn:boolean;
  private tokenData;
  constructor(private auth:AuthService,private router:Router,private token:TokenService) { }

  ngOnInit() {
    this.tokenData = this.token.get();
    
    this.auth.authStatus.subscribe(value=>this.loggedIn=value);
  }
}
