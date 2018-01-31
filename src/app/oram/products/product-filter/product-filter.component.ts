import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  getAllCat;
  @Input('category') category;

  constructor(public _CategoryService:CategoryService,) { 
    this.getAllCat = this._CategoryService.getAllCategory();
  }

  ngOnInit() {
  }
 
}
