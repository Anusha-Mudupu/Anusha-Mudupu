/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    EmployeeAdminComponent
  ]
})
export class AdministrationModule { }
