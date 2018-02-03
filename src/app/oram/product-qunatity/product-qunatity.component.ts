import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'product-qunatity',
  templateUrl: './product-qunatity.component.html',
  styleUrls: ['./product-qunatity.component.css']
})
export class ProductQunatityComponent {
  @Input('product') product:Product;
  @Input('shopping-cart') shoppingCart;
    constructor( private cartService : ShoppingCartService) { }
  
    addToCart(){
      //console.log('addto cart ', this.product);
      this.cartService.addToCart(this.product);
    }
    removeFromCart(){
      this.cartService.removeFromCart(this.product);
    }
   
    
   
  
  }
  