import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { AppUser } from './../models/app-user';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user:any[];
  appUser: AppUser;
  cart$:Observable<ShoppingCart>;

  constructor(public _authService : AuthService,
  private shoppingCartService:ShoppingCartService) { 
   
  }

  async ngOnInit() {
    this._authService.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logOut(){
    console.log(this._authService.user$);
    this._authService.logOut();

  }

}
