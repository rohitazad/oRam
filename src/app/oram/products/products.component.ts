import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  prodcuts:Product[]= [];
  filterProducts:Product[] = [];
  _category:string;
  cart$:Observable<ShoppingCart>;


  constructor(
    private route:ActivatedRoute,
    private _products:ProductService,
    private shoppingCarts:ShoppingCartService) { }

  async ngOnInit() {
    this.cart$= await this.shoppingCarts.getCart();
    this.populateProducts();
  }

  private populateProducts(){
    this._products.getAll()
    .switchMap( products => {
      this.prodcuts = products;
      return this.route.queryParamMap;
    })
    .subscribe(params => {
      this._category = params.get('category')
      this.applyFilter();
    });
  }
  private applyFilter(){
    this.filterProducts = (this._category) ? 
          this.prodcuts.filter(p => p.category === this._category) :
          this.prodcuts;
  }
}
