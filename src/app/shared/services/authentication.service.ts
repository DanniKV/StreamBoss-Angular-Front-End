import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, Subscription} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {User} from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import {containsElement} from '@angular/animations/browser/src/render/shared';


@Injectable()
export class AuthenticationService {

  public isLoggedIn = new BehaviorSubject<boolean>(!!this.getToken());

  constructor(private http: HttpClient) {}

  /**
   * Sends the username and password to the TokenController.
   * It then sets the token in localStorage if the login is correct.
   * If not it responds with the console log of failed login.
   * @param username
   * @param password
   */
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiUrl + '/api/token', { username, password })
      .pipe(map(response => {
        const token = response && response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          this.setToken(token);
          return true;
        } else {
          console.log('Failed login');
          // return false to indicate failed login
          return false;
        }
      }));
  }

  /**
   * Sets the gotten token in the localstorage memory
   * @param token
   */
  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn.next(!!token);
  }

  /**
   * Clears the token from the localstorage memory
   */
  public clearToken() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(undefined);
  }

  /**
   * Gets the token from the local storage memory.
   */
  public getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Checks if there is a token in the memory and notifies listeners.
   */
  public isAuthenticated(): Observable<boolean> {
    return Observable.create(obs => {
      obs.next(this.getToken());
    });
  }

  /**
   * Gets the user from the token by decoding it.
   */
  public getUserFromToken(): Observable<User> {
    return Observable.create(obs => {
      const token = this.getToken();
      let decoded: User;
      if (token) {
        const jwt = new JwtHelperService();
        decoded = jwt.decodeToken(token);
      }
      obs.next(decoded);
    });
  }

  /**
   * Gets the Id from the Token by decoding it.
   */
  public getIdFromToken(): Observable<any> {
    const token = this.getToken();
    let decoded: User;
    let decodedId: any;
    if (token) {
      const jwt = new JwtHelperService();
      decoded = jwt.decodeToken(token);
      decodedId = decoded.id;
    }
    return decodedId;
  }

  /**
   * Gets the role form the token by decoding it.
   */
  public getRoleFromToken(): Observable<any> {
    const token = this.getToken();
    let decoded: User;
    let decodedRole: any;
    if (token) {
      const jwt = new JwtHelperService();
      decoded = jwt.decodeToken(token);
      decodedRole = decoded.role;
    }
    return decodedRole;
  }
}
