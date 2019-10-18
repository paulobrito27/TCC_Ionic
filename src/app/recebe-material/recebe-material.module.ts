import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecebeMaterialPage } from './recebe-material.page';

const routes: Routes = [
  {
    path: '',
    component: RecebeMaterialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecebeMaterialPage]
})
export class RecebeMaterialPageModule {}
