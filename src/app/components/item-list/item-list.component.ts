import { Component, OnInit, Input } from '@angular/core';
import {Item} from "../../item-interface";
import {ItemService} from "../../item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() itemList: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemList = this.itemService.getItems();
  }

}
