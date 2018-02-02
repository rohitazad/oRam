import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  
  prodcuts:Product[]= [];
  filterProducts:Product[] = [];
  _category:string;
  cart:any;
  subscription:Subscription

  constructor(
    route:ActivatedRoute,
    public _products:ProductService,
    private shoppingCarts:ShoppingCartService) { 


      
    this._products.getAll()
    .switchMap( products => {
      this.prodcuts = products;
      return route.queryParamMap;
    })
      // than search functinaliy work
      .subscribe(params => {
        this._category = params.get('category')
        
        this.filterProducts = (this._category) ? 
          this.prodcuts.filter(p => p.category === this._category) :
          this.prodcuts;
      });

  
    

    

    
  }

  async ngOnInit() {

    this.subscription = (await this.shoppingCarts.getCart())
      .subscribe(cart => {
        this.cart = cart;
      //  console.log('this.cart----', this.cart);
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
