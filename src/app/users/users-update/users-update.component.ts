import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {User} from '../../shared/models/user';
import {FormControl, FormGroup} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']
})
export class UsersUpdateComponent implements OnInit {
  user: any;
  id: any;
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl('')

  });
  constructor(private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService) {
  }
  ngOnInit() {
    this.getUser();
  }

  getUser(): any {
    this.id = this.authenticationService.getIdFromToken();
    if (this.id != null) {
      this.userService.getUserById(this.id)
        .subscribe(userFromRest => {
          this.userForm.patchValue( {
            firstName: userFromRest.firstName,
            lastName: userFromRest.lastName,
            email: userFromRest.email,
            phoneNumber: userFromRest.phoneNumber,
            address: userFromRest.address,
            city: userFromRest.city,
            zipCode: userFromRest.zipCode.toString(),
            userName: userFromRest.userName,
            password: userFromRest.password
          });
        });
    } else {
      // not logged in or id is null.
      this.router.navigateByUrl('/no-access');
      return false;
    }
  }

  SaveUser() {
    const user = this.userForm.value;
    user.id = this.id;
    this.userService.updateUser(user)
      .subscribe(userUpdated => {
        this.router.navigateByUrl('/account');
      });
  }
}
