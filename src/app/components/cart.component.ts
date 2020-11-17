import { Component, OnInit, OnChanges } from '@angular/core';
import { Input } from "@angular/core";

import { products } from "../products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {

  @Input() newItem: string;

  shoppingCart = [];

  constructor() { }

  ngOnInit(): void {
    products.forEach( (item, index) => {
      this.shoppingCart.push({
        name: item.name,
        description: item.description,
        image: item.image,
        count: 0
      });
    });
  }

  ngOnChanges(changes): void {
    // console.info("The changes in ngOnChanges are ", changes);

    const itemToAdd = changes.newItem['currentValue'];
    console.info(`Obtained the new item: ${itemToAdd}`);

    this.shoppingCart.forEach( (item, index) => {
      if(item.name === itemToAdd) {
        item.count += 1;
      }
    });
  }

  onRemove($event): void {
    console.info(`${$event} remove button pressed!`);

    this.shoppingCart.forEach( (item, index) => {
      console.info(`We are now inspecting ${item.name}`);
      if(item.name === $event) {
        item.count = 0;
      }
    });
  }

}
