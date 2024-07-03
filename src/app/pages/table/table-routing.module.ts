/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { GridjsComponent } from './gridjs/gridjs.component';
import { ListjsComponent } from './listjs/listjs.component';
import { ProductConfigComponent } from './productConfig/productConfig.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'gridjs',
    component: GridjsComponent
  },
  {
    path: 'listjs',
    component: ListjsComponent
  },
  {
    path: 'productConfig',
    component: ProductConfigComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
