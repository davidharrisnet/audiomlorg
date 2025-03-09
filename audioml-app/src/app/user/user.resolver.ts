// my.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<any> {

  constructor(public dialog: MatDialog,private router: Router,private route: ActivatedRoute) {}

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any> {
    const dialogRef = this.dialog.open(UserDialogComponent, {
          width: '250px'
        });
    
        dialogRef.afterClosed().subscribe(result => {
            this.router.navigate(['../'], { relativeTo: this.route });
        });
        
    return of(true);
  }
}