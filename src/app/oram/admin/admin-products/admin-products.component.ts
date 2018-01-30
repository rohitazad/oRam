import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
products$;
  constructor(public _productService:ProductService) { 
    this.products$ =  this._productService.getAll();
  }

  ngOnInit() {
  }

}
