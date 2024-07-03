/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { RolesComponent } from '../roles/roles.component';
import { EmailtemplateComponent } from '../emailtemplate/emailtemplate.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { LeadComponent } from 'src/app/chits/lead/lead.component';
import { SourceComponent } from '../source/source.component';
import { AgentOnboardingComponent } from './agent-onboarding/agent-onboarding.component';
import { AdminSourceComponent } from './admin-source/admin-source.component';

const routes: Routes = [
  { path: '', component: AdministrationComponent },
  {path:'Employee',component:EmployeeAdminComponent},
  {path:'roles',component:RolesComponent},
  {path:'Template',component:EmailtemplateComponent},
  {path:'followup',component:FollowUpComponent},
  {path:'leadforAgent',component:LeadComponent},
  {path:'PickList',component:SourceComponent},
  {path:"agent-onboarding",component:AgentOnboardingComponent},
  {path:'Admin-Source',component:AdminSourceComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
