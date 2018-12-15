import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {first, map, take} from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router,
              private auth: AuthenticationService) { }

  canActivate(): any {
    return this.auth.getUserFromToken().
    pipe(
      first(),
      map(user => {
        if (JSON.stringify(user).includes('role":"Administrator"')) {
          return true;
        } else {
          // not logged in with right role so redirect to login page with the return url
          this.router.navigateByUrl('/no-access');
          return false;
        }
      })
    );
  }
}
