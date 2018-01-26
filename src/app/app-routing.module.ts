import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './message/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';

const routes: Routes = [
  {path: '', redirectTo: '/messages', pathMatch: 'full'},
  {path: 'messages', component: MessagesComponent},
  {path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
