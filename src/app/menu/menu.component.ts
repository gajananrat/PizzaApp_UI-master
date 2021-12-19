import { Component, OnInit } from '@angular/core';
import { FoodItems } from '../models/FoodItems';
import { Pizza } from '../models/pizza';
import { ApiService } from '../services/api.service';
import { ShoppingCartServiceService } from "../services/shopping-cart-service.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _shoppingcartservice: ShoppingCartServiceService,
    private apiService :ApiService) { }


    pizzasList: Pizza[]=[];
  // pizzasList:any =[
  //   {
  //     name: 'Margherita',
  //     description: 'A hugely popular margherita, with a deliciously tangy single cheese topping'
  //   },
  //   {
  //     name: 'Mexican_Green_Wave',
  //     description:'A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.'
  //   },
  //   {
  //     name: 'Peppy_Paneer',
  //     description: 'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!'
  //   },
  //   {
  //     name: 'Farmhouse',
  //     description:'A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes'
  //   }]

  ngOnInit(): void {
    this.apiService.getPizzaList().subscribe(response=>{
      this.pizzasList=response;
    })
  }

  AddToCart(foodItem: FoodItems){
    this._shoppingcartservice.AddToCart(foodItem);
  }
}
