import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VistaComponent} from './login/vista/vista.component';

const routes: Routes = [{path: 'login', component: VistaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
