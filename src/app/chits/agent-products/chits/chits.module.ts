/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChitsRoutingModule } from './chits-routing.module';
import { AgentProductsComponent } from '../agent-products.component';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChitsRoutingModule,
    AgentProductsComponent,
    FormsModule,
    FlatpickrModule.forRoot()
  ]
})
export class ChitsModule { }
