import { Injectable } from '@angular/core';
import {Item} from "./item-interface";
import {ItemList} from "./mock-items";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems():Item[] {
    return ItemList;
  }

  getItemById(id: number):Item {
    let item = ItemList.filter((elem) => {
      return elem.id == id;
    })

    return item[0];
  }
}
