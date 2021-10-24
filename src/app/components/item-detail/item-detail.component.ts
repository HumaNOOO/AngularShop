import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../item.service";
import {Item} from "../../item-interface";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  itemID!:number;
  item!:Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemID = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.itemService.getItemById(this.itemID);
  }
}
