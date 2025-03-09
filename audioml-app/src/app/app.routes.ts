import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserResolver} from './user/user.resolver';

export const routes: Routes = [
    { path: 'user', component: UserComponent, title: 'User', resolve: { data: UserResolver}}
]; 

