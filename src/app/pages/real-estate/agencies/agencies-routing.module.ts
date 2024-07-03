/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentProductsComponent } from 'src/app/chits/agent-products/agent-products.component';

// Component
import { ListComponent } from './list/list.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path:'AgentProduct',
    component:AgentProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
