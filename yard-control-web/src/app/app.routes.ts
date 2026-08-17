import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in.component';



export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    {path: 'signin', component: SignInComponent} 
];
//,{path : 'board'} , {path: 'gate'}, {path: 'dock'}
