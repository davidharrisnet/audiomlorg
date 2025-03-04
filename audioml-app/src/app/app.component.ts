import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';
import { ProductsComponent } from "./products/products.component";


@Component({
  
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent],
  templateUrl: './app.component.html',
  standalone:true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'audioml-app';
}
