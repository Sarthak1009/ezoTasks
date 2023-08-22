import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'ezoTasks', pathMatch: 'full'},
  {path: 'ezoTasks', loadChildren: ()=> import('./navbar/navbar.module').then(m => m.NavbarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
