import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent  {
@Input('product') product:Product;
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart:ShoppingCart;
  constructor( private cartService : ShoppingCartService) { }

  addToCart(){
    //console.log('addto cart ', this.product);
    this.cartService.addToCart(this.product);
  }

}
