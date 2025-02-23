import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../product/product'; 
import { Observable } from 'rxjs';

import { ProductsService } from '../products.service';


@Component({
  selector: 'product-list',
  imports: [ CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
    
    products: Product[] = [];
    
    private productService = inject(ProductsService);
    price:number = 4;
    constructor() {
      this.price$.subscribe(this.setPrice);
    }

    ngOnInit(): void {

      this.products = this.productService.getProducts();
    
    }

    price$ = new Observable(observer => {
      setInterval(() => {
        observer.next();
      }, 2000);
    });
    
    setPrice = () => {
      this.price += 1;
    }
    
}
