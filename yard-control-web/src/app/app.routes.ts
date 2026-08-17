import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in';
import { BoardComponent } from './board/board';
import { GateComponent } from './gate/gate';
import { DockComponent } from './dock/dock';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    {path: 'signin', component: SignInComponent},
    {path : 'board', component:BoardComponent , canActivate: [authGuard]},
    {path: 'gate', component:GateComponent, canActivate: [authGuard] },
    {path: 'dock', component: DockComponent, canActivate: [authGuard]}
];

