import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent  {
@Input('product') product:Product;
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart;
  constructor( private cartService : ShoppingCartService) { }

  addToCart(){
    //console.log('addto cart ', this.product);
    this.cartService.addToCart(this.product);
  }
  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
 
  getQuantity(){ 
    //console.log('this.shoppingCart', this.shoppingCart);
    if(!this.shoppingCart) return 0;
   // console.log('this.shoppingCart---', this.shoppingCart.items[this.product.$key]);
    
    let item = this.shoppingCart.items[this.product.$key];
    
    return item ? item.quantity : 0;
  }
 

}
