import { Component, Input } from '@angular/core'; // @Input

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input(({required:true})) item!: string; // @Input



}
