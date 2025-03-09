import { Component } from '@angular/core';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  providers: [MatDialog],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   username:string = "";
  
   constructor(public dialog: MatDialog, private router: Router,private route: ActivatedRoute) {
  
   
   }

   openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: {name: 'yourName', animal: 'animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
