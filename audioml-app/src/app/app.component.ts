import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { ObservablesComponent } from './observables/observables.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PromisesComponent, ObservablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'audioml-app';
}
