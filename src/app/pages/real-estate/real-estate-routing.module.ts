/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { GridComponent } from './grid/grid.component';
import { ListComponent } from './list/list.component';
import { MapComponent } from './map/map.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';
import { AddPropertiesComponent } from './add-properties/add-properties.component';
import { EarningsComponent } from './earnings/earnings.component';
import { AgentProductsComponent } from 'src/app/chits/agent-products/agent-products.component';
import { VacantListComponent } from './vacant-list/vacant-list.component';
import { RealEstatAgentProductsComponent } from './real-estat-agent-products/real-estat-agent-products.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProductionTypeComponent } from './production-type/production-type.component';
import { LeadscreenComponent } from './leadscreen/leadscreen.component';
import { AddleadComponent } from './leadscreen/addlead/addlead.component';
import { LeadfollowupComponent } from './leadscreen/leadfollowup/leadfollowup.component';
import { EditleadComponent } from './leadscreen/editlead/editlead.component';
import { FollowupgridComponent } from './leadscreen/followupgrid/followupgrid.component';
import { AssignleadComponent } from './leadscreen/assignlead/assignlead.component';
import { RealEstateProductsComponent } from './real-estate-products/real-estate-products.component';
import { RealestateaddproductComponent } from './real-estate-products/realestateaddproduct/realestateaddproduct.component';
import { RealestateeditproductComponent } from './real-estate-products/realestateeditproduct/realestateeditproduct.component';
import { DARRegistrationComponent } from './Reports/dar-registration/dar-registration.component';
import { RegistrationbtwDatesComponent } from './Reports/registrationbtw-dates/registrationbtw-dates.component';
import { RealEstateSubscribersComponent } from './real-estate-subscribers/real-estate-subscribers.component';
import { CompanySetupComponent } from './company-setup/company-setup.component';
import { FloorDetailsComponent } from './floor-details/floor-details.component';
import { TabBranchComponent } from '../dashboards/real-estate/tab-branch/tab-branch.component';
import { RealEstateMyledgerComponent } from '../dashboards/real-estate/real-estate-myledger/real-estate-myledger.component';
import { ProductCommercialSpaceComponent } from './real-estate-products/product-commercial-space/product-commercial-space.component';
import { OpenplotsComponent } from 'src/app/Agent Master/openplots/openplots.component';
import { ApartmentsComponent } from 'src/app/Agent Master/apartments/apartments.component';
import { UnitsComponent } from 'src/app/Agent Master/units/units.component';
import { CommericalSpaceComponent } from 'src/app/Agent Master/commerical-space/commerical-space.component';
import { VillasComponent } from 'src/app/Agent Master/villas/villas.component';
import { RealEstateBranchesComponent } from '../dashboards/real-estate/real-estate-branches/real-estate-branches.component';
import { RelaEstateDegisginationsComponent } from '../dashboards/real-estate/rela-estate-degisginations/rela-estate-degisginations.component';
import { RelaEsateRegionsComponent } from '../dashboards/real-estate/rela-esate-regions/rela-esate-regions.component';
import { RealEstateUpdatebranchComponent } from '../dashboards/real-estate/real-estate-branches/real-estate-updatebranch/real-estate-updatebranch.component';
import { RealEsateUpdateRegionComponent } from '../dashboards/real-estate/rela-esate-regions/real-esate-update-region/real-esate-update-region.component';
import { RealEsateUpdateDesiginationsComponent } from '../dashboards/real-estate/rela-estate-degisginations/real-esate-update-desiginations/real-esate-update-desiginations.component';
import { RealEsateBranchTransferComponent } from '../dashboards/real-estate/real-estate-branches/real-esate-branch-transfer/real-esate-branch-transfer.component';
import { RealEstateStatusComponent } from '../dashboards/real-estate/real-estate-status/real-estate-status.component';
import { RealEstateNotificationTemplatesComponent } from '../dashboards/real-estate/real-estate-notification-templates/real-estate-notification-templates.component';
import { ComercialSpaceLeadsComponent } from '../realestateSubProducts/Commercial_Space/comercial-space-leads/comercial-space-leads.component';
import { CommercialSpaceCreateLeadComponent } from '../realestateSubProducts/Commercial_Space/commercial-space-create-lead/commercial-space-create-lead.component';
import { CommercialSpaceEditLeadComponent } from '../realestateSubProducts/Commercial_Space/commercial-space-edit-lead/commercial-space-edit-lead.component';
import { ComercialTowersLeadsComponent } from '../realestateSubProducts/Commercial_Towers/comercial-towers-leads/comercial-towers-leads.component';
import { CommercialTowersCreateLeadComponent } from '../realestateSubProducts/Commercial_Towers/commercial-towers-create-lead/commercial-towers-create-lead.component';
import { CommercialTowersEditLeadComponent } from '../realestateSubProducts/Commercial_Towers/commercial-towers-edit-lead/commercial-towers-edit-lead.component';
import { UnitsLeadsComponent } from '../realestateSubProducts/Units/units-leads/units-leads.component';
import { UnitsCreateLeadComponent } from '../realestateSubProducts/Units/units-create-lead/units-create-lead.component';
import { UnitsEditLeadComponent } from '../realestateSubProducts/Units/units-edit-lead/units-edit-lead.component';
import { VillasLeadsComponent } from '../realestateSubProducts/Villas/villas-leads/villas-leads.component';
import { VillasCreateLeadComponent } from '../realestateSubProducts/Villas/villas-create-lead/villas-create-lead.component';
import { VillasEditLeadComponent } from '../realestateSubProducts/Villas/villas-edit-lead/villas-edit-lead.component';
import { ApartmentsLeadsComponent } from '../realestateSubProducts/Apartments/apartments-leads/apartments-leads.component';
import { ApartmentsCreateLeadComponent } from '../realestateSubProducts/Apartments/apartments-create-lead/apartments-create-lead.component';
import { ApartmentsEditLeadComponent } from '../realestateSubProducts/Apartments/apartments-edit-lead/apartments-edit-lead.component';
import { OpenPlotsLeadsComponent } from '../realestateSubProducts/Open_plots/open-plots-leads/open-plots-leads.component';
import { OpenPlotsCreateLeadComponent } from '../realestateSubProducts/Open_plots/open-plots-create-lead/open-plots-create-lead.component';
import { OpenPlotsEditLeadComponent } from '../realestateSubProducts/Open_plots/open-plots-edit-lead/open-plots-edit-lead.component';

const routes: Routes = [
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'property-overview',
    component: PropertyOverviewComponent
  },
  {
    path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
  },
  {
    path: 'agencies', loadChildren: () => import('./agencies/agencies.module').then(m => m.AgenciesModule)
  },
  {
    path: 'add-properties',
    component:AddPropertiesComponent
  },
  {
    path: 'earnings',
    component:EarningsComponent
  },
  {
    path:'AgentProducts',component:RealEstatAgentProductsComponent
  },
  
  {
    path:'vacantlist',component:VacantListComponent
  },
  {
    path:'userlist',component:UserlistComponent
  },
  {path:'productionType',component:ProductionTypeComponent},
  {path:'leadrealestate',component:LeadscreenComponent},
  {path:'leadfollowUp/:id',component:LeadfollowupComponent},
  {path:'followuptable/:id',component:FollowupgridComponent},
  {path:'EditLead/:id',component:EditleadComponent},
  {path:'Addlead',component:AddleadComponent},
  {path:'AddProduct',component:RealestateaddproductComponent},
  {path:'AssignLead',component:AssignleadComponent},
  {path:'products',component:RealEstateProductsComponent},
  {path:'Editproduct/:id',component:RealestateeditproductComponent},
  {path:'DAR',component:DARRegistrationComponent},
  {path:'registrationbtwdates',component:RegistrationbtwDatesComponent},
  {path:'real-estate-Subscribers',component:RealEstateSubscribersComponent} ,
  {path:'companySetUp',component:CompanySetupComponent},
  {
    path:"floor-Details",component:FloorDetailsComponent
  },
  {path:"tab-branch",component:TabBranchComponent},
  {path:'myledger',component:RealEstateMyledgerComponent} ,
  {path:'commercialTowers',component:ProductCommercialSpaceComponent},
  {path:'openPlots',component:OpenplotsComponent},
{path:'apartments',component:ApartmentsComponent},
{path:'units',component:UnitsComponent},

{path:'commericalSpace',component:CommericalSpaceComponent},
{path:'villas',component:VillasComponent} ,
{path:"Branches",component:RealEstateBranchesComponent} ,
{path:"Deginations",component:RelaEstateDegisginationsComponent}  ,
{path:"Region",component:RelaEsateRegionsComponent},
{path:"real-esate-UpdateBranch",component:RealEstateUpdatebranchComponent}, 
{path:"real-esate-UpdateRegion",component:RealEsateUpdateRegionComponent} ,
{path:"real-esate-updateDesigination",component:RealEsateUpdateDesiginationsComponent},
{path:"real-esate-BranchTransfer",component:RealEsateBranchTransferComponent} ,
{path:"status",component:RealEstateStatusComponent}  ,
{path:'Notification-Templates',component:RealEstateNotificationTemplatesComponent},
{path:'commercial-space-leads',component:ComercialSpaceLeadsComponent},
{path:'commercial-space-creat-lead',component:CommercialSpaceCreateLeadComponent},
{path:'commercial-space-edit-lead/:id',component:CommercialSpaceEditLeadComponent},
{path:'commercial-towers-lead',component:ComercialTowersLeadsComponent},
{path:'commercial-towers-create-lead',component:CommercialTowersCreateLeadComponent},
{path:'commercial-towers-edit-lead/:id',component:CommercialTowersEditLeadComponent},
{path:'units-leads',component:UnitsLeadsComponent} ,
{path:'units-create-leads',component:UnitsCreateLeadComponent},
{path:'units-edit-leads/:id',component:UnitsEditLeadComponent},
{path:'villas-leads',component:VillasLeadsComponent} ,
{path:'villas-create-leads',component:VillasCreateLeadComponent},
{path:'villas-edit-leads/:id',component:VillasEditLeadComponent},

{path:'open-plots-leads',component:OpenPlotsLeadsComponent},
{path:'open-plots-create-leads',component:OpenPlotsCreateLeadComponent},
{path:'open-plots-edit-leads/:id',component:OpenPlotsEditLeadComponent},
{path:'apartments-leads',component:ApartmentsLeadsComponent},
{path:'apartments-create-leads',component:ApartmentsCreateLeadComponent},
{path:'apartments-edit-leads/:id',component:ApartmentsEditLeadComponent}                      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstateRoutingModule { }
