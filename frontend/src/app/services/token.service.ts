import { Injectable } from '@angular/core';
@Injectable()
export class TokenService {
  
  constructor() { }
  private iss = {
    login: 'http://localhost:8080/api/login',
    signup: 'http://localhost:8080/api/signup',
    
  };
  setToken(token)
  {
    localStorage.setItem('token',token);
  }

  get()
  {
    return localStorage.getItem('token');
  }

  removeToken()
  {
    return localStorage.removeItem('token');
  }

  isValid()
  {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token)
  {
    const payload =  token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload)
  {
    return JSON.parse(atob(payload));
  }
  loggedIn()
  {
    const token  = localStorage.getItem('token');
    if(token)
    {
      return true;
    }
    else
    {
      return false;
    }
    //return this.isValid();
  }
}
