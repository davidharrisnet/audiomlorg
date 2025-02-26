import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Output() incrementCountEvent = new EventEmitter<number>();

  count = 0;

  emitEvent() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

 
}
