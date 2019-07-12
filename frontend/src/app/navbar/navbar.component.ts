import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn:boolean;
  private tokenData;
  constructor(private auth:AuthService,private router:Router,private token:TokenService) { }

  ngOnInit() {
    this.tokenData = this.token.get();
    
    this.auth.authStatus.subscribe(value=>this.loggedIn=value);
  }

  logout(event: Event)
  {
    event.preventDefault();
    this.token.removeToken();
    this.auth.changeStatus(false);
    this.router.navigateByUrl('/login');
  }

}
