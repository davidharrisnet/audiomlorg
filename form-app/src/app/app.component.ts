import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor() {
    
  }
  title = 'form-app';
  
  name = new FormControl('');
  
  

  ngOnInit() {
    this.name.setValue('Tom');
  }
}
