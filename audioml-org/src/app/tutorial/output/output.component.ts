import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {

  @Output() myEvent = new EventEmitter<string>();

  emitEvent() {   
    this.myEvent.emit("Hello World!");
  }

 
}
