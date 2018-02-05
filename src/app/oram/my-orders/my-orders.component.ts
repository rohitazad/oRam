import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  userData:any;
  userId:string;

  constructor(private orderService : OrderService,
  private authService: AuthService) { }

  async ngOnInit() {
    await this.authService.user$.subscribe(data => {
      this.userId = data.uid;
      console.log('this.userId', this.userId);
    })

    this.orderService.getOrdersByUser(this.userId).subscribe(data => {
      console.log(data);
      this.userData = data;
    })
    
  }

}
