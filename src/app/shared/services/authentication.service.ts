import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
  apiUrl: 'http://streamboss.azurewebsites.net/api/token'
  constructor(private http: HttpClient) {}
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiUrl + '/api/token', { username, password })
      .pipe(map(response => {
        const token = response && response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          console.log('Went bad')
          // return false to indicate failed login
          return false;
        }
      }));
  }

  getToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUsername() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }


}
