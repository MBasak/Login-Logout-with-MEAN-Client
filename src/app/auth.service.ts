import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges } from '@angular/core';
import { User } from './models/user';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  user:any;
  subject: Subject<boolean> = new Subject<boolean>();

  //BADDDDD!!! Use httpOnly cookie or use the backend but do  NOT STORE anything in localstorage coz this is prone to xss attacks
  storeUser(token: any,
    user: any) {

    //use cookies
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    this.subject.next(true);
  }

  constructor(private httpClient: HttpClient) { }

    registerUser(user: User) : Observable<any> {
      const result = false;
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      console.log(headers);
      console.log('Sending register user request');
      const url = 'http://localhost:4000/users/register';
      console.log(url);
     return this.httpClient.post(url, user,{headers: headers});
      
    }

    getUser(user: any) : Observable<any> {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      console.log('Sending authenticate user request');
      const url = 'http://localhost:4000/users/authenticate';
      console.log(url);
     return this.httpClient.post(url, user, {headers: headers});
    }

    logout() {
      this.authToken = null;
      this.user = null;
      localStorage.clear();
      this.subject.next(false);
    }

    hasTokenExpired() : boolean {
      this.authToken = localStorage.getItem('token');
      const jwtHelperService = new JwtHelperService();
      return jwtHelperService.isTokenExpired(this.authToken);
    }

    isUserLoggedIn() : Observable<boolean> {
      
      return this.subject.asObservable();
    }

    getProfile() : Observable<any> {
  this.authToken = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + this.authToken
        })
      };
     
     
      console.log('Get request for profile');
      const url = 'http://localhost:4000/users/profile';
      console.log(url);
      //console.log(headers);
     return this.httpClient.get(url, httpOptions);
    }
}
