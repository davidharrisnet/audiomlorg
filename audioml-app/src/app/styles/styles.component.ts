import { Component } from '@angular/core';
import { MoreStylesComponent }from './more-styles/more-styles.component';
@Component({
  selector: 'app-styles',
  standalone: true,
  imports: [MoreStylesComponent],
  templateUrl: './styles.component.html',
  styleUrl: './styles.component.css'
})
export class StylesComponent {

}
