import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';


@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {

  url :string = `http://localhost:8080`;
 
  constructor( private http:HttpClient) { }

  getAllOrders():Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}`);
  }

  deleteOrder(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.url}/orders/${id}`);
  }

  addOrder(newOrder: Order) : Observable<Order> {
    return this.http.post<Order>(`${this.url}/orders`, newOrder);
  }


}
