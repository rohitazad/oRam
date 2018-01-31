import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
products:Product[];
filterProducts:any[];
subscription: Subscription;

  constructor(public _productService:ProductService) { 
    this.subscription = this._productService.getAll()
    .subscribe(product => this.filterProducts =  this.products = product);
  }

  ngOnInit() {
  }

  filter(query:string){
    console.log(query);
    this.filterProducts = (query) ? 
        this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) 
          : this.products;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
