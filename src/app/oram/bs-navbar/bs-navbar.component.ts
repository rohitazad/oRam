import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth-service.service';
import { AppUser } from './../models/app-user';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user:any[];
  appUser: AppUser;
  shoppingCartItemCount:number;

  constructor(public _authService : AuthService,
  private shoppingCartService:ShoppingCartService) { 
   // _authService.user$.subscribe( data => console.log(data));
   _authService.appUser$.subscribe(appUser => {
    this.appUser = appUser;
    //console.log(this.appUser);
    

   });
  }

  async ngOnInit() {
    
    let cart$ = await this.shoppingCartService.getCart();
    cart$.subscribe(cart => {

      this.shoppingCartItemCount = 0;
      for(let productId in cart.items){
        this.shoppingCartItemCount += cart.items[productId].quantity;
        console.log(productId, cart.items[productId].quantity)
      }
    })
  }

  logOut(){
    console.log(this._authService.user$);
    this._authService.logOut();

  }

}
