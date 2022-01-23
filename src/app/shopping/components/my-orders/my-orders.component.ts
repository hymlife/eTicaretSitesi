import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';




@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
   user: firebase.User
  orders
  constructor(private orderService:OrderService,private db: AngularFireDatabase) {
    
   }

   ngOnInit() {
    this.orders= this.orderService.getOrders()
  }

}
