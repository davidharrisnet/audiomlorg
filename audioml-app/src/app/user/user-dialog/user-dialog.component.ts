import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [ MatSlideToggleModule],
  providers: [],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css'
})
export class UserDialogComponent {
  
}
