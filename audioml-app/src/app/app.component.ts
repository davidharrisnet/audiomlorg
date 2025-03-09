import { Component } from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import { UserComponent } from './user/user.component';
import { StylesComponent} from './styles/styles.component'





@Component({
  
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, StylesComponent],
  providers: [UserComponent],
  templateUrl: './app.component.html',
  standalone:true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private userComponent:UserComponent) {

  }

  openUserDialog() {
    this.userComponent.openDialog();
  }
  title = 'Audio ML';
}
