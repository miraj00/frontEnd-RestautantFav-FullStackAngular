import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})


export class OrderService {

  url :string = "http://localhost:8080";
 
  constructor( private http:HttpClient) { }

  getAllOrders(): Observable<Order> {
      console.log(this.http.get<Order>(this.url));
       return this.http.get<Order>(this.url);
  }


}
