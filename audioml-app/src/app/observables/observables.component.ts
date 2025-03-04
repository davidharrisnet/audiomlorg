import { Component } from '@angular/core';
import { map, of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from '../products/product'
import  { ProductDTO } from '../products/products.service'
import { ProductsService } from '../products/products.service'


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  standalone:true,
  styleUrl: './observables.component.css',
  providers: [ProductsService]
})

@Injectable({
  providedIn: 'root'
})
export class ObservablesComponent {
 
  message = "";
  helloUrl = "http://localhost:5000"


  constructor(private http: HttpClient, 
              private productService: ProductsService) {
    //this.arrayMethods();

    // Call subscribe() to start listening for geolocation updates.
    
  } // end constructor

  getHello() {
    console.log("start");
    this.http.get(this.helloUrl).subscribe((response) => {
      this.message = response.toString();  
      console.log("end");
    });
  }

  getProducts() {
    console.log("getProducts");
    return this.productService.getProducts();
  }
  


  arrayMethods() {
    let numbers$ = of(1,2,3);
    numbers$.subscribe( {
      next: value => console.log('Observable emitted the next value: ' + value),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }
 

}
