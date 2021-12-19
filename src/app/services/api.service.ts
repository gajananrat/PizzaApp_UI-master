import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl="https://localhost:44305/";
  constructor(private http: HttpClient) { }

  getPizzaList(): Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.baseurl+"Pizzas");
  }

  addPizzaToCart(){
    alert('in api call');
    return this.http.post(this.baseurl+"ShoppingCart?pizzaId=1",null);
  }
}
