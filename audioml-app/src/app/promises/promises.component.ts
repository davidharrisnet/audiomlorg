import { Component } from '@angular/core';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent {
  count:number = 0;

  constructor() {
    this.onComplete()  // Promisee only executes once.
    .then(this.countPlusOne)  // The other then's executie immediately
    .then(this.countPlusOne)
    .then(this.countPlusOne)   
    .then(this.countPlusOne)   
    .then(this.countPlusOne)
   
   


  }
  private countPlusOne = () => {
    this.count += 1;
  }
  
  private onComplete() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 4000);
    })
  }
}
