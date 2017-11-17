import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SortNumberComponent } from './sort//sort-number/sort-number.component';



const routes: Routes =[
    { path: 'sort',      component: SortNumberComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    { path: '',               redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
