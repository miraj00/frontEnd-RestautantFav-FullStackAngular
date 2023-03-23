import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'frontEnd-FavRestaurant';

  orders : Order = ({} as any) as Order;
  // orders : Order [] = [] ;

  constructor(private api : OrderService) {}

  ngOninit(): void{  
    this.api.getAllOrders().subscribe(
          (result)=> {
            this.orders = result;
            });
          }       





}
