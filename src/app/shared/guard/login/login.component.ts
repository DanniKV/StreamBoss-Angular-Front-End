import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

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
  errormessage = 'AaAAAaAAAAAAAAAAA';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
   // this.authenticationService.clearToken();
  }
/*
  submitLogin() {
    this.authenticationService.login
    (this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(
        () => {
          this.router.navigate(['/']);
          console.log('WORKS!');
        },
        error => {
          this.errormessage = error;
          console.log('It didnt work!');
        });
  } */
}
