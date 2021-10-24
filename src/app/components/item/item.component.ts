import { Component, OnInit, Input } from '@angular/core';
import {Item} from "../../item-interface";
import {CartService} from "../../cart.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!:Item;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
