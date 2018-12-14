import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../shared/css/StreamBossCSS.css']

})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  test() {
    console.log("BABRABRBAR");
  }
}
