import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
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

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  SaveUser() {
    const user = this.userForm.value;
    this.userService.addUser(user)
      .subscribe(customer => {
        this.router.navigateByUrl('/login');
      });
  }
}
