import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {forkJoin, Observable, of, Subscribable, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']

})
export class NavbarComponent implements OnInit {

  subscription: Subscription;
  loggedIn: boolean;
  username: string;
  role: string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.subscription = this.authenticationService.isLoggedIn
      .pipe(
        // Map to
        switchMap(isLoggenIn => {
          this.loggedIn = isLoggenIn;
          return this.authenticationService.getUserFromToken();
        })
      ).subscribe(user => {
        this.username = user ? user.name : '';
          this.role = user ? user.role : '';
      });

  }
}
