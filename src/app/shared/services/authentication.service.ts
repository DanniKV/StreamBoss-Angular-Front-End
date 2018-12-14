import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {User} from '../models/users';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthenticationService {

  public isLoggedIn = new BehaviorSubject<boolean>(!!this.getToken());

  constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiUrl + '/api/token', { username, password })
      .pipe(map(response => {
        const token = response && response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          this.setToken(token);
          return true;
        } else {
          console.log('Went bad');
          // return false to indicate failed login
          return false;
        }
      }));
  }

/*
  public login(user: User): Observable<string> {
    return this.http.post<string>(environment.apiUrl + '/login', user, {responseType: 'text' as 'json'})
      .pipe(
        switchMap(token => Observable.create(obs => {
            this.setToken(token);
            obs.next(token);
          })
        )
      );
  } */
  public setToken(token: string) {
    localStorage.setItem('currentUser', token);
    this.isLoggedIn.next(!!token);
  }

  public clearToken() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn.next(undefined);
  }

  public getToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  public isAuthenticated(): Observable<boolean> {
    // get the token aand notify listeners!
    return Observable.create(obs => {
      obs.next(this.getToken());
    });
  }

  public getUserFromToken(): Observable<User> {
    return Observable.create(obs => {
      const token = this.getToken();
      let decoded: User;
      if (token) {
        const jwt = new JwtHelperService();
        decoded = jwt.decodeToken(token);
        console.log(jwt.decodeToken(token));
      }
      obs.next(decoded);
    });

  }


}
