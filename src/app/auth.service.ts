import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthLoginInfo } from './auth/login-info';
import { SignUpInfo } from './auth/SignUpInfo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loginUrl = 'http://localhost:8081/authenticate';
  private signupUrl = 'http://localhost:8081/register/client';
  
  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): any {
    return this.http.post(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): any {
    console.log(info);
    return this.http.post(this.signupUrl, info, httpOptions);
  }

  updatedPassword(username : string) : any {
  return this.http.get(`http://localhost:8081/isitupdated/${username}`)}

  }
