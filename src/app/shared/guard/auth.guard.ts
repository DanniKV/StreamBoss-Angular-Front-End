import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import {first, map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  canActivate(): any {
    return this.authService.isAuthenticated().pipe(
      first(),
      map(authenticated => {
        if (authenticated) {
          return true;
        } else {
          // not logged in so redirect to login page with the return url
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }
}
