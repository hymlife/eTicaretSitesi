import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

    orders
  
  

  ngOnInit() {
    this.orders= this.orderService.getOrders();
  }

  orders$;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 
    
  }
}
