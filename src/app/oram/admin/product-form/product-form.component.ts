import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  category$
  product = {};
  id;
  constructor(
    private router:Router,
    private _route : ActivatedRoute,
    private _cateSer:CategoryService, 
    private _productService:ProductService) { 
    this.category$ = this._cateSer.getAllCategory();
    this.id = this._route.snapshot.paramMap.get('id');
    if(this.id){
      this._productService.getProduct(this.id).take(1).subscribe(p=> this.product = p)
    }
  }

  ngOnInit() {
  }

  save(product){
    if(this.id){
      this._productService.update(this.id, product);
    }else{
      this._productService.create(product);
    }
    console.log(product);
   
    this.router.navigate(['/admin/products']);
  }


  delete(){
    if(!confirm('Are you sure you want to delete to this prodcut?')) return;

    this._productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

}
