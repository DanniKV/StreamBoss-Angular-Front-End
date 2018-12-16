import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://Streamboss.azurewebsites.net/api/user';

  constructor(private http: HttpClient) {
  }


  // CRUD Operations!
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  updateUser(user: User): Observable<User> {
    // Using RestAPI
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
