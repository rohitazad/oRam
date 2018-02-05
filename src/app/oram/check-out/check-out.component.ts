import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../service/order.service';
import { AuthService } from '../service/auth-service.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart: ShoppingCart;
  cartSubscription:Subscription;
  userSubscription:Subscription;
  userId :string;


  constructor(
    private route :Router,
    private shoppingCartService:ShoppingCartService, 
    private orderService:OrderService,
  private authServie: AuthService) { }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart)
    console.log(order);
   // this.orderService.storeOrder(order);
    let result  = await this.orderService.placeOrder(order);
    this.route.navigate(['/order-success', result.key]);
  }    

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => {
      this.cart = cart;
      //console.log('cart--', cart);
    });
    this.userSubscription = this.authServie.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
