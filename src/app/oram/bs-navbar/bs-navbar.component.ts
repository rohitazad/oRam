import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { AppUser } from './../models/app-user';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user:any[];
  appUser: AppUser;


  constructor(public _authService : AuthService) { 
   // _authService.user$.subscribe( data => console.log(data));
   _authService.appUser$.subscribe(appUser => {
    this.appUser = appUser;
    console.log(this.appUser);
   });
  }

  ngOnInit() {
  }

  logOut(){
    console.log(this._authService.user$);
    this._authService.logOut();

  }

}
