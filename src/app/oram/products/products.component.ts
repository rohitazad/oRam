import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  prodcuts:Product[]= [];
  filterProducts:Product[] = [];
  _category:string;

  constructor(
    route:ActivatedRoute,
    public _products:ProductService) { 

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

  ngOnInit() {
  }

}
