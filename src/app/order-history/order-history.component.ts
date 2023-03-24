import { Component } from '@angular/core';
import { RestaurantFavesService } from '../restaurant-faves.service';
import { Order } from '../order';

import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})


export class OrderHistoryComponent {

  title = 'frontEnd-FavRestaurant';
  faTrashCan = faTrashCan;

 //  showOrders : Order = ({} as any) as Order;
   showOrders : Order [] = [] ;
//   showOrders : Object[] = [];

  constructor(private api : RestaurantFavesService) {}

  ngOninit(): void{ 
    this.loadOrders();
   
  }

  loadOrders(): void {this.api.getAllOrders().subscribe(
          (data)=>{
            console.log(data);
            this.showOrders = data;}

  );
  }       
  

 getOrder():void { this.api.getOrder(2).subscribe(
    (result)=> console.log(result));

  }
  deleteOrder(id: number) : void {
    this.api.deleteOrder(id).subscribe(
      ()=> this.loadOrders());
    }
  
    // onClick() {
    //   console.log("Button clicked!");
    // }


}
          



