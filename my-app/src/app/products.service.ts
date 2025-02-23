import { Product } from './product/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Product[] {

    return [
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
              
  }
}
