import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { AuthService } from '../service/auth-service.service';
import { Order } from '../models/order';
import { Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping = {};
  userSubscription:Subscription;
  userId :string; 
  @Input('cart') cart:ShoppingCart;

  
  constructor(
    private route :Router,
    private orderService:OrderService,
  private authServie: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authServie.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart)
    console.log(order);
   // this.orderService.storeOrder(order);
    let result  = await this.orderService.placeOrder(order);
    this.route.navigate(['/order-success', result.key]);
  }

}
