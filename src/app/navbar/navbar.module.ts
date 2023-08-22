import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageAPIComponent } from '../image-api/image-api.component';
import { AtmComponent } from '../atm/atm.component';

const routes: Routes = [
  { path: '', component:NavbarComponent},
  { path: 'api', component:ImageAPIComponent},
  { path: 'atm', component:AtmComponent}
];

@NgModule({
  declarations: [
    NavbarComponent,
    ImageAPIComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class NavbarModule { }
