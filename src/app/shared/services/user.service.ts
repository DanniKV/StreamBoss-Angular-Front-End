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


  /**
   * Sends a HTTP Get request to get all users.
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * Sends a HTTP Post request to create a user in Json format.
   * @param user
   */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  /**
   * Sends a HTTP Put request in JSON format that updates the User
   * with the given Id with the updated information.
   * @param user
   */
  updateUser(user: User): Observable<User> {
    // Using RestAPI
    return this.http.put<User>(this.apiUrl + '/' + user.id, user);
  }

  /**
   * Sends a HTTP Get request with the given Id
   * @param id
   */
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id);
  }

  /**
   * Sends a HTTP Delete Request to delete the user with the given Id.
   * @param id
   */
  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
