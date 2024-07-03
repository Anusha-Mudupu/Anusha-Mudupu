/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from 'src/app/chits/products/products.component';
import { TimelineComponent } from 'src/app/pages/charts/timeline/timeline.component';

import { UserlistComponent } from 'src/app/pages/real-estate/userlist/userlist.component';
import { BranchPerformanceComponent } from '../../branch-performance/branch-performance.component';
import { BranchlistComponent } from '../../branchlist/branchlist.component';
import { BusinessunitComponent } from '../../businessunit/businessunit.component';
import { CampaignComponent } from '../../campaign/campaign.component';
import { DesignationlistComponent } from '../../designationlist/designationlist.component';

import { ProductconfigComponent } from '../../productconfig/productconfig.component';
import { RegionlistComponent } from '../../regionlist/regionlist.component';
import { RegionperformanceComponent } from '../../regionperformance/regionperformance.component';
import { TimeComponent } from 'src/app/chits/time/time.component';
import { VacantlistComponent } from '../../vacantlist/vacantlist.component';
import { ZonelistComponent } from '../../zonelist/zonelist.component';
import { AgentProductsComponent } from '../agent-products.component';
import { ChitsComponent } from './chits.component';
import { RequestCategoryComponent } from './request-category/request-category.component';
import { RolegroupmanagementComponent } from './rolegroupmanagement/rolegroupmanagement.component';
import { ManageComponent } from './manage/manage.component';
import { AgentbenefitsComponent } from './agentbenefits/agentbenefits.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { Userlist1Component } from '../../userlist1/userlist1.component';
import { UpdateLeadComponent } from '../../update-lead/update-lead.component';
import { CreateLeadComponent } from '../../create-lead/create-lead.component';
import { EditUserComponent } from '../../userlist1/edit-user/edit-user.component';
import { UpadateagentComponent } from './agent-list/upadateagent/upadateagent.component';
import { LeadFallowUpComponent } from '../../lead-fallow-up/lead-fallow-up.component';
import { TeamMemeberDetailsComponent } from '../../Leads/team-memeber-details/team-memeber-details.component';
import { UploadComponent } from 'src/app/pages/forms/upload/upload.component';
import { UploadFreshLeadsComponent } from '../../Leads/upload-fresh-leads/upload-fresh-leads.component';
import { CalenderComponent } from '../../Leads/calender/calender.component';
import { CalendarComponent } from 'src/app/pages/apps/calendar/calendar.component';
import { EmployeeAdminComponent } from 'src/app/Administration/administration/employee-admin/employee-admin.component';
import { UpdateEmployeeComponent } from 'src/app/Administration/administration/employee-admin/update-employee/update-employee.component';
import { AddEmployeeComponent } from 'src/app/Administration/administration/employee-admin/add-employee/add-employee.component';
import { AddLeadComponent } from 'src/app/Administration/administration/add-lead/add-lead.component';
import { EditLeadComponent } from 'src/app/Administration/administration/edit-lead/edit-lead.component';
import { FollowUpComponent } from 'src/app/Administration/administration/follow-up/follow-up.component';
import { AssignLeadComponent } from 'src/app/Administration/administration/assign-lead/assign-lead.component';
import { LeadsListComponent } from 'src/app/Administration/leads-list/leads-list.component';
import { AddroleComponent } from './manage/addrole/addrole.component';
import { EditroleComponent } from './manage/editrole/editrole.component';
import { ManagerwiseComponent } from '../../managerwise/managerwise.component';
import { ChannelpartnerComponent } from '../../channelpartner/channelpartner.component';
import { ChannelwithoutmonthwiseComponent } from '../../channelwithoutmonthwise/channelwithoutmonthwise.component';
import { LeadsConsolidateComponent } from '../../leads-consolidate/leads-consolidate.component';
import { UserpermissionComponent } from '../../userlist1/userpermission/userpermission.component';
import { LeadReportComponent } from '../../lead-report/lead-report.component';
import { CreateUserComponent } from '../../userlist1/create-user/create-user.component';
import { ViewUserComponent } from '../../userlist1/view-user/view-user.component';
import { ZoneupdateComponent } from '../../zonelist/zoneupdate/zoneupdate.component';
import { UpdateRegionComponent } from '../../update-region/update-region.component';
import { CreateProductComponent } from '../../create-product/create-product.component';
import { UpdateProductComponent } from '../../update-product/update-product.component';
import { DirectBusinessDetailsComponent } from '../../Reports/direct-business-details/direct-business-details.component';
import { ExcutiveWiseBookingsComponent } from '../../Reports/excutive-wise-bookings/excutive-wise-bookings.component';
import { BookingsMPRComponent } from '../../Reports/bookings-mpr/bookings-mpr.component';
import { FloorWiseRegistrationComponent } from '../../Reports/floor-wise-registration/floor-wise-registration.component';
import { SmsComponent } from '../../Reports/sms/sms.component';
import { RentReceivableComponent } from '../../Reports/rent-receivable/rent-receivable.component';
import { HeatMapComponent } from '../../Reports/heat-map/heat-map.component';
import { BookingbtwdatesunclearedComponent } from '../../Reports/bookingbtwdatesuncleared/bookingbtwdatesuncleared.component';
import { SubscribersComponent } from '../../subscribers/subscribers.component';
import { ContactsComponent } from 'src/app/Administration/contacts/contacts.component';
import { MybusinessComponent } from './mybusiness/mybusiness.component';
import { AdminDashboardComponent } from 'src/app/Administration/admin-dashboard/admin-dashboard.component';
import { ChitsDashboardComponent } from '../../chits-dashboard/chits-dashboard.component';
import { UploadLeadsComponent } from 'src/app/Administration/upload-leads/upload-leads.component';
// import { LeadComponent } from 'src/app/lead/lead.component';
import { LeadTransferComponent } from 'src/app/lead-transfer/lead-transfer.component';
import { NotificationsSettingsComponent } from 'src/app/Administration/notifications-settings/notifications-settings.component';
import { CampaignsComponent } from 'src/app/Administration/campaigns/campaigns.component';
import { UpdateNotificationSettingsComponent } from 'src/app/Administration/administration/update-notification-settings/update-notification-settings.component';
import { CreateNotificationSettingsComponent } from 'src/app/Administration/administration/create-notification-settings/create-notification-settings.component';
import { AddCampaignsComponent } from 'src/app/Administration/add-campaigns/add-campaigns.component';
import { UpdateSmsnotificationsettingsComponent } from 'src/app/Administration/update-smsnotificationsettings/update-smsnotificationsettings.component';
import { UpdateEmailNotificationsettingsComponent } from 'src/app/Administration/update-email-notificationsettings/update-email-notificationsettings.component';
import { AddEmailNotificationsettingsComponent } from 'src/app/Administration/add-email-notificationsettings/add-email-notificationsettings.component';
import { EditCampaignComponent } from '../../edit-campaign/edit-campaign.component';
import { MyCampaignComponent } from '../../my-campaign/my-campaign.component';
import { AddMyCampaignComponent } from '../../add-my-campaign/add-my-campaign.component';
import { EditMyCampaignComponent } from '../../edit-my-campaign/edit-my-campaign.component';
import { BranchTransferComponent } from '../../branchlist/branch-transfer/branch-transfer.component';
import { EditMediaCampaignComponent } from 'src/app/Administration/edit-media-campaign/edit-media-campaign.component';
import { MyledgerComponent } from '../../myledger/myledger.component';
// import { LeadComponent } from '../../lead/lead.component';
import { LeadComponent } from 'src/app/lead/lead.component';
import { FollowupListComponent } from '../../followup-list/followup-list.component';
import { FollowpviewComponent } from '../../followup-list/followpview/followpview.component';
import { IncentivesComponent } from 'src/app/incentives/incentives.component';
import { OpenplotsComponent } from 'src/app/Agent Master/openplots/openplots.component';
import { ApartmentsComponent } from 'src/app/Agent Master/apartments/apartments.component';
import { UnitsComponent } from 'src/app/Agent Master/units/units.component';
import { CommericalSpaceComponent } from 'src/app/Agent Master/commerical-space/commerical-space.component';
import { VillasComponent } from 'src/app/Agent Master/villas/villas.component';
import { StatusComponent } from '../../status/status.component';
import { CreateSmsNotificationSettingsComponent } from 'src/app/Administration/notifications-settings/create-sms-notification-settings/create-sms-notification-settings.component';
import { EditNotificationsettingsComponent } from 'src/app/Administration/notifications-settings/edit-notificationsettings/edit-notificationsettings.component';
import { EmployeeManagersComponent } from 'src/app/Administration/administration/employee-admin/employee-managers/employee-managers.component';
import { EmployeeAdministratorComponent } from 'src/app/Administration/administration/employee-admin/employee-administrator/employee-administrator.component';

const routes: Routes = [{ path: '', component: ChitsComponent },
{
  path: 'AgentProducts', component: AgentProductsComponent
},
{ path: 'vacantlist', component: VacantlistComponent },
{ path: 'userlist', component: UserlistComponent },
{ path: 'branchperformance', component: BranchPerformanceComponent },
{ path: 'regionperformance', component: RegionperformanceComponent },
{ path: 'productconfig', component: ProductconfigComponent },
{ path: 'branchlist', component: BranchlistComponent },
{ path: 'zonelist', component: ZonelistComponent },
{ path: 'zoneupdate/:id', component: ZoneupdateComponent },
{ path: 'branchlist', component: BranchlistComponent },
{ path: 'businessunit', component: BusinessunitComponent },
{ path: 'designationlist', component: DesignationlistComponent },
{ path: 'regionlist', component: RegionlistComponent },
{ path: 'Products', component: ProductsComponent },
{ path: 'campaign', component: CampaignComponent },
{ path: 'lead', component: LeadComponent },
{ path: 'timeline', component: TimelineComponent },
{ path: 'Time', component: TimeComponent },
{ path: 'requestCategory', component: RequestCategoryComponent },
{ path: 'roleGroupManagement', component: RolegroupmanagementComponent },
{ path: 'manage', component: ManageComponent },
{ path: 'addrole/:verticalid', component: AddroleComponent },
{ path: 'editrole/:name', component: EditroleComponent },
{ path: 'AgentBenfits', component: AgentbenefitsComponent },
{ path: 'AgentList', component: AgentListComponent },
{ path: 'userlist1', component: Userlist1Component },
{ path: 'updateLead/:id', component: UpdateLeadComponent },
{ path: 'create-lead', component: CreateLeadComponent },
{ path: 'editUser/:id', component: EditUserComponent },
{ path: 'createUser', component: CreateUserComponent },
{ path: 'editAgent/:id', component: UpadateagentComponent },
{ path: 'viewUser/:id', component: ViewUserComponent },
{
  path: 'lead-fallowup/:id', component: LeadFallowUpComponent
},
{ path: 'followup-view/:id', component: FollowpviewComponent },
{ path: 'teammember', component: TeamMemeberDetailsComponent },
{ path: 'uploadLead', component: UploadFreshLeadsComponent },
{ path: 'calander', component: CalendarComponent },
{ path: 'Employee', component: EmployeeAdminComponent },
{ path: 'updateEmployee/:id', component: UpdateEmployeeComponent },
{ path: 'CreateEmployee', component: AddEmployeeComponent },
{ path: 'add-lead', component: AddLeadComponent },
{ path: 'edit-lead/:id', component: EditLeadComponent },
{ path: 'assign-lead', component: AssignLeadComponent },
{ path: 'follow-up/:id', component: FollowUpComponent },
{ path: 'leads-list', component: LeadsListComponent },
{ path: 'managerWise', component: ManagerwiseComponent },
{ path: 'channelPartner', component: ChannelpartnerComponent },
{ path: 'channelwithoutmonth', component: ChannelwithoutmonthwiseComponent },
{ path: 'leads-consolidate', component: LeadsConsolidateComponent },
{ path: 'userpermission/:id', component: UserpermissionComponent },
{ path: 'lead-report', component: LeadReportComponent },
{ path: 'update-region', component: UpdateRegionComponent },
{ path: 'createproduct', component: CreateProductComponent },
{ path: 'update-product/:id', component: UpdateProductComponent },
{ path: 'directBusiness', component: DirectBusinessDetailsComponent },
{ path: 'excutivewise_bookings', component: ExcutiveWiseBookingsComponent },
{ path: 'bookingsMPR', component: BookingsMPRComponent },
{ path: 'floor-wise', component: FloorWiseRegistrationComponent },
{ path: 'sms', component: SmsComponent },
{ path: 'Rent-Receivable', component: RentReceivableComponent },
{ path: 'heat-map', component: HeatMapComponent },
{ path: 'bookingsbtwdatesuncleared', component: BookingbtwdatesunclearedComponent },
{ path: 'Subscribers', component: SubscribersComponent },
{ path: 'Contacts', component: ContactsComponent },
{ path: 'mybusiness', component: MybusinessComponent },
{ path: 'admin-dashboard', component: AdminDashboardComponent },
{ path: 'chits-dashboard', component: ChitsDashboardComponent },
{ path: 'upload-leads', component: UploadLeadsComponent },
{ path: 'Lead', component: LeadComponent },
{ path: 'lead-transfer', component: LeadTransferComponent },
{ path: 'Notification-Settings', component: NotificationsSettingsComponent },
{ path: 'Campaigns', component: CampaignsComponent },
{ path: 'add-campaign', component: AddCampaignsComponent },
{ path: 'edit-campaign/:id', component: EditCampaignComponent },
{ path: 'my-campaign', component: MyCampaignComponent },
{ path: 'editnotification/:id', component: UpdateNotificationSettingsComponent },
{ path: 'editWhatsappnotification/:id', component:EditNotificationsettingsComponent },
{ path: 'createNotificationSettings', component: CreateNotificationSettingsComponent },
{ path: 'updateSmsnotificationsettings/:id', component: UpdateSmsnotificationsettingsComponent },
{ path: 'updateEmailnotificationsettins/:id', component: UpdateEmailNotificationsettingsComponent },
{ path: 'addEmailnotificationsettings', component: AddEmailNotificationsettingsComponent },
{ path: 'add-my-campaign', component: AddMyCampaignComponent },
{ path: 'edit-my-campaign/:id', component: EditMyCampaignComponent },
{ path: 'branchTransfer', component: BranchTransferComponent },
{ path: 'editMediaFile', component: EditMediaCampaignComponent },
{ path: 'myledger', component: MyledgerComponent },
{ path: 'chitsLead', component: LeadComponent },
{ path: 'followup', component: FollowupListComponent },
{ path: 'incentives', component: IncentivesComponent },
{ path: 'Status', component: StatusComponent },
{path:'smsNotification',component:CreateSmsNotificationSettingsComponent},
{path:'administrator',component:EmployeeAdministratorComponent},
{path:'manager',component:EmployeeManagersComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChitsRoutingModule { }
