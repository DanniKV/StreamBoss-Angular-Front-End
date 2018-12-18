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
        // Checks if the role on the token is Administrator.
        if (user.role === 'Administrator') {
          // on TRUE it allows access.
          return true;
        } else {
          // On false it redirects to a "No access" page.
          this.router.navigateByUrl('/no-access');
          return false;
        }
      })
    );
  }
}
