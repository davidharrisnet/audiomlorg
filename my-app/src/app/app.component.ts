import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            ProductListComponent, 
            KeyLoggerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'AppComponent';


  settings = {
    title: "ThisIsAwesome"
  };

  constructor() {
    //this.changeTitle(this.setTitle);
    this.onComplete().then(this.setTitle);
  }

  // One way to do async ... 
  public setTitle = () => {
    this.title = this.settings.title;
  }
  
  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }
  
  // .. end of One Way  
  private onComplete() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

}
