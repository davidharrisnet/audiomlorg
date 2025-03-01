import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-observables',
  imports: [HttpClientModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css',
  providers: []
})

@Injectable({
  providedIn: 'root'
})
export class ObservablesComponent {
 
  message = "";
  helloUrl = "http://localhost:5000"
  

  constructor(private http: HttpClient) {
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


  arrayMethods() {
    let numbers$ = of(1,2,3);
    numbers$.subscribe( {
      next: value => console.log('Observable emitted the next value: ' + value),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }
 

}
