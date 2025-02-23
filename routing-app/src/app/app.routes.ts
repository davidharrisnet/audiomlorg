import { Routes,  } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';

export const routes: Routes =  [
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: 'third-component', component: ThirdComponent }
  ];