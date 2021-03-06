import { Component, OnInit } from '@angular/core';
import {Cart} from "../../cart";
import {CartService} from "../../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart:Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  deleteItem(id: number):void {
    this.cartService.deleteItem(id);
    this.cart = this.cartService.getCart();
  }
}
