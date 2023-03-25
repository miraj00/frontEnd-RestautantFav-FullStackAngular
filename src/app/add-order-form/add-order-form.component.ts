import { Component, EventEmitter, Output } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent {
  
    @Output() addOrder = new EventEmitter<Order>();
    id : number = 0;
    description: string = "";
    restaurant : string = "";
    rating: number= 0;
    orderAgain: boolean = false;

    constructor() {}

    ngOnInit(): void {}


    add = () : void => {

        this.addOrder.emit({
            id: this.id,
            description : this.description,
            restaurant : this.restaurant,
            rating : this.rating,
            orderAgain:this.orderAgain 


        });



}




}
