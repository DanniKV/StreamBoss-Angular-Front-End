import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {forkJoin, Observable, of, Subscribable, Subscription} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']

})
export class NavbarComponent implements OnInit {

  subscription: Subscription;
  loggedIn: boolean;
  loggedInn: string;
  username: string;
  role: string;
  constructor(private authenticationService: AuthenticationService,
  private router: Router) { }

  ngOnInit() {
    this.subscription = this.authenticationService.isLoggedIn
      .pipe(
        // Map to
        switchMap(isLoggenIn => {
          this.loggedIn = isLoggenIn;
          return this.authenticationService.getUserFromToken();
        })
      ).subscribe(user => {
        this.username = user ? user.userName : '';
          this.role = user ? user.role : '';
      });
  }
  public account() {
    if (this.loggedIn === true && this.role === 'Administrator') {
        this.router.navigate(['/admin-products']);
      } else if (this.loggedIn === true) {
      this.router.navigate(['/account']);
    } else {
       this.router.navigate(['/login']);
    }
  }
  public logOut() {
    this.router.navigate(['/']);
    this.authenticationService.clearToken();
  }
}
