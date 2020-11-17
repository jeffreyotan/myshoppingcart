import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from "@angular/core";

import { products } from "../products";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  @Output() notify = new EventEmitter<string>();

  inventory = products;

  constructor() { }

  ngOnInit(): void {
  }

}
