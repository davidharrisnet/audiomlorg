import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-values',
  imports: [],
  templateUrl: './values.component.html',
  styleUrl: './values.component.css'
})
export class ValuesComponent {

  
  input_value="default"; 
  signal_value_string = { value: "Signal Value" };

  constructor() {}

  signal_value = signal(this.signal_value_string);

  setInput() {
    console.log("ClickMe");
    this.input_value = "ClickMe";
  }

  setSignalValue() {
    this.signal_value.set({ value: "A new signal value"}); // alerts the update to the signal value
  }
}
