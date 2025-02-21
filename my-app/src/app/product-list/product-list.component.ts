import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../product/product'; 
import { Hammer } from '../product/parts/hammer';
import { Fork } from '../product/parts/fork';

@Component({
  selector: 'product-list',
  imports: [ CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})export class ProductListComponent {

  products: Product[] = [
    { 
        id: 1,
        title: 'Keyboard',
        price: 100,      
    },
    {
        id: 2,
        title: 'Microphone',
        price: 35,     
    },
    {
      id: 3,
      title: 'Web camera',
      price: 79,
      
    },
    {
      id: 4,
      title: 'Tablet',
      price: 500,
    }
  ];

  constructor() {
    let hammer:Hammer = new Hammer(5,'Hammer', 300);
    this.products.push(hammer);
    let fork:Fork = new Fork(6,'Fork', 300);
    this.products.push(fork);
  }    
}
