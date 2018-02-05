import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  userData:any;
  constructor(private orderService : OrderService,) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      console.log(data);
      this.userData = data;
    })
  }

}
