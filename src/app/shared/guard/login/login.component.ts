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
    // reset login status
    this.authenticationService.clearToken();
  }

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
