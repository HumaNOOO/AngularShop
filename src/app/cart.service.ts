import { Injectable } from '@angular/core';
import {Cart} from "./cart";
import {Item} from "./item-interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Cart[] = [];

  addToCart(item: Item):void {
    let cartObject = <Cart>{};
    cartObject["item"] = item;
    cartObject["id"] = (this.cart.length === 0) ? 0 : this.cart.length;
    this.cart.push(cartObject);
  }

  getCart():Cart[] {
    for(let i=0; i<this.cart.length; i++) {
      this.cart[i].id = i;
    }

    return this.cart;
  }

  deleteItem(id: number):void {
    this.cart = this.cart.filter((cartItem) => {
      return cartItem.id !== id;
    })
  }

  constructor() { }
}
