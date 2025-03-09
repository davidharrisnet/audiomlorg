import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service'



 
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  selectedProduct: Product | undefined;
  public products: Product[] = [];
  theList = [1,2,3,4];
  constructor(private productService: ProductsService) {}
  
  
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
