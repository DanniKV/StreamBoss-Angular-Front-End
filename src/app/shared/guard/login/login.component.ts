import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../css/StreamBossCSS.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  errormessage = '';
  role: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // removes the token on initializing.
    this.authenticationService.clearToken();
  }

  /**
   * Sends the data from the Username and Password field
   * to the service for login.
   *
   * It then checks if the user is an Administrator, and if so
   * sends them to the admin-products page.
   *
   * If not it sends them to the front page.
   *
   * Otherwise it will give an error if nothing matches.
   */
  submitLogin() {
    this.authenticationService.login
    (this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(
        () => {
          this.role = this.authenticationService.getRoleFromToken();
          if (this.role === 'Administrator') {
            this.router.navigate(['/admin-products']);
          } else {
            this.router.navigate(['/']);
            console.log('Your login succeeded.');
          }},
        error => {
          this.errormessage = error;
          console.log('Your login failed.!');
        });
  }
}
