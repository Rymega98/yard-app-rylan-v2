import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in';
import { BoardComponent } from './board/board';
import { GateComponent } from './gate/gate';
import { DockComponent } from './dock/dock';


export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    {path: 'signin', component: SignInComponent},
    {path : 'board', component:BoardComponent },
    {path: 'gate', component:GateComponent },
    {path: 'dock', component: DockComponent}
];

