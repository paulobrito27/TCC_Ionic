import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeparaMaterialPage } from './separa-material.page';

const routes: Routes = [
  {
    path: '',
    component: SeparaMaterialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeparaMaterialPage]
})
export class SeparaMaterialPageModule {}
