import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {first, map, switchMap} from 'rxjs/operators';
import {User} from '../../shared/models/user';
import {pipe, Subscription} from 'rxjs';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class UsersDetailsComponent implements OnInit {
  id: any;
  user: User;
  constructor(private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.getUser();
  }

  /**
   * Gets the Id from the token, then as long as the Id isn't null
   * inputs the information from the user into the HTML.
   * If null, redirects to no-access.
   */
  getUser(): any {
    this.id = this.authenticationService.getIdFromToken();
    if (this.id != null) {
      this.userService.getUserById(this.id)
        .subscribe(userFromRest => {
          this.user = userFromRest;
        });
    } else {
      // not logged in or id is null.
      this.router.navigateByUrl('/no-access');
    }
  }

  /**
   * First it gives a checkbox asking if the user is sure about deleting their account.
   * Sends the Id from the user to the user service
   * It then clears the token and redirects to the home page.
   */
  deleteUser() {
    if (confirm('Are you sure about deleting your account?')) {
      this.userService.deleteUser(this.id)
        .subscribe(message => {
          this.authenticationService.clearToken();
          this.router.navigateByUrl('/');
        });
    }
  }
}

