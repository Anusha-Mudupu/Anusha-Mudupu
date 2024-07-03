/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';

import { NgbdListSortableHeader, SortColumn, SortDirection } from 'src/app/pages/table/listjs/listjs-sortable.directive';
import { ListService } from 'src/app/pages/table/listjs/listjs.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule, PageChangedEvent } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TableRoutingModule } from 'src/app/pages/table/table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import Swal from 'sweetalert2';

import { LeadService } from 'src/app/lead.service';
import { roledata, verticalData } from 'src/app/chits-class';
import { ScreenwiseService } from 'src/app/chits/screenwise.service';
import { CampaignService } from 'src/app/chits/Services/campaign.service';

// tabsComponent

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CountUpModule } from 'ngx-countup';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxEchartsModule } from 'ngx-echarts';
import { Editor, TOOLBAR_FULL } from 'ngx-editor';

import { AppsRoutingModule } from 'src/app/pages/apps/apps-routing.module';
import { primary } from 'src/app/pages/apps/email/data';
import { Email } from 'src/app/pages/apps/email/email.model';

import { NotificationService } from 'src/app/Administration/notification.service';
import { result } from 'lodash';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
@Component({
  selector: 'app-my-campaign',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
    TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule,
    NgSelectModule,
    AppsRoutingModule,
    FullCalendarModule,
    FormsModule,
    BsDatepickerModule,
    TimepickerModule,
    SimplebarAngularModule,
    BsDropdownModule,
    AccordionModule,
    TooltipModule,
    CountUpModule,
    ProgressbarModule,
    NgApexchartsModule,
    PickerModule,

    SharedModule,
    LeafletModule,
    PaginationModule,
    NgxEchartsModule,
    CKEditorModule,
    DropzoneModule,
    FlatpickrModule,
  ],
  providers: [ListService, DecimalPipe],
  templateUrl: './my-campaign.component.html',
  styleUrl: './my-campaign.component.scss'
})
export class MyCampaignComponent {
  campaignsData: any;
  public roleData2: roledata[] = []; data: any;
  campaignStatus: any;
  campaignTypeenumConstants: any;
  getMediaData: any;
  mediaCampaignId: any;
  statusData: any;
  ;
  public searchTerm: string = '';
  public spinner: boolean = true
  public verticalData: verticalData[] = [];
  public verticalid = "1";
  public rolePermission: any = [];
  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  public display = "none";
  searchTermName: any;
  searchTermFromDt: any;
  searchTermToDt: any;
  isFirstOpen = false;
  public Editor = ClassicEditor;
  sortedRoleList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'name'; // Default sort column
  sortOrder: string = 'asc';
  roleScreens: any;
  roleActions: any;
  campaignList: any;
  agentCode:any="111";
  addMediaForm: any;
  campaignId: any;
  campaignTypelookupConstants: any;
  statusDescription: any;

  constructor(private _router: Router, private screenWise: ScreenwiseService, private campaignService: CampaignService,
    private toastService: ToastrService, private leadService: LeadService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private service: ListService, private notificationService: NotificationService, private formbuilder: FormBuilder) {
    this.addMediaForm = this.formbuilder.group({
      mediaType: "",
      name: "",
      filePath: "",
      campaignId: ""
    });
  }



  ngOnInit() {
    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;


      this.campaignStatus = this.data.filter((item: any) => item.lookupCode == "CampaignMediaStatus");
      console.log('campaignStatus', this.campaignStatus);
      if (this.campaignStatus.length > 0) {
        this.campaignTypelookupConstants = this.campaignStatus[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);
      }

    });
    this.getAgentCampaigns();

    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      this.campaignStatus = this.data.filter((item: any) => item.lookupCode == "AgentCampaignMediaStatus");
      console.log('aji', this.campaignStatus);
      if (this.campaignStatus.length > 0) {
        this.campaignTypelookupConstants = this.campaignStatus[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);


      }
    })


    // this.leadService.getPicklist().subscribe((data: any) => {
    //   console.log("picklist", data);
    //   this.data = data;


    //   this.campaignStatus = this.data.filter((item: any) => item.enumCode == "AgentCampaignMediaStatus");
    //   console.log('campaignStatus', this.campaignStatus);
    //   if (this.campaignStatus.length > 0) {
    //     this.campaignTypeenumConstants = this.campaignStatus[0].enumConstants;
    //     console.log("media enumConstants", this.campaignTypeenumConstants);
    //   }

    // });


    this.screenWise.getScreens().subscribe(data => {
      this.roleScreens = data.find(screen => screen.screenName === 'Campaigns');
      if (this.roleScreens) {
        // Assign the actions of the "Role" screen to roleActions
        this.roleActions = this.roleScreens.actions;
      }
    });
    console.log("this.screens", this.roleScreens)

    this.sortedRoleList = this.campaignsData.slice();
    console.log("this.sortedUserList", this.sortedRoleList);


    // this.getRolesData()
    this.filterLeads()
  }

  getcampaginId(campaignId: any) {
    this.campaignId = campaignId;
    console.log("this.campaignId", this.campaignId);

    this.getMediaData = this.campaignService.getMyCampaignMediaFile(this.agentCode, this.campaignId).subscribe((data: any) => {
      console.log("this.getMediaData", data.data);
      this.mediaCampaignId == data.data.campaignId;
      console.log("this.mediaCampaignId", this.mediaCampaignId)

      this.getMediaData = data.data;

    })
    this.addMediaForm.patchValue({ campaignId: this.campaignId });
  }
  uploadFiles() {
    console.log('mediaForm', this.addMediaForm.value);
    this.addMediaForm.patchValue({ campaignId: this.campaignId });
    this.campaignService.postMyCampaignMediaFile(this.agentCode, this.campaignId, this.addMediaForm.value).subscribe((response: any) => {
      console.log(response);
      console.log('mediaForm', this.addMediaForm.value);
      this.showMediaSuccess();
    }, error => {
      this.showError()
    })
  }
  showMediaSuccess() {
    this.toastService.success('Media Successfully Uploaded')
  }
  showError() {
    this.toastService.error('Something went Wrong');
  }
  getAgentCampaigns() {
    this.campaignService.getAgentCampaignsData(this.agentCode).subscribe(
      (data: any) => {
        this.campaignsData = data.data;
        console.log('AgentcampaignData', this.campaignsData);

        if (Array.isArray(this.campaignsData) && this.campaignsData.length > 0) {
          this.setMediaData(this.campaignsData[0].id);
        }
        this.sortedRoleList = this.campaignsData.slice();

        this.leadService.getPicklist().subscribe(
          (picklistData: any) => {
            console.log("picklist", picklistData);
            this.data = picklistData;

            // Assuming this.data contains the picklist data
            this.campaignStatus = this.data.find((item: any) => item.lookupCode === "AgentCampaignMediaStatus");
            console.log('campaignStatus', this.campaignStatus);

            if (this.campaignStatus) {
              this.campaignTypelookupConstants = this.campaignStatus.lookupConstants;
              console.log("Campaign Status Lookup Constants", this.campaignTypelookupConstants);
            } else {
              console.error("Campaign status not found in picklist data");
            }
          },
          (error) => {
            console.error("Error fetching picklist data", error);
          }
        );
      },
      (error) => {
        console.error("Error fetching agent campaigns data", error);
      }
    );
  }

  getStatusDescription(status: any): string {
    console.log("status",status)
    if (this.campaignTypelookupConstants) {
      const statusDescription = this.campaignTypelookupConstants.find(
        (constant: any) => constant.value == status
       
      );
      return statusDescription ? statusDescription.description : '';
    }
    return '';
    
  }


  setMediaData(campaignId: number) {
    this.campaignId = campaignId;
    console.log("Selected Campaign ID:", this.campaignId);

    const selectedCampaign = this.campaignsData.find((campaign: any) => campaign.id === campaignId);
    if (selectedCampaign) {
      this.getMediaData = selectedCampaign.campaignMedia;
      console.log("Fetched Media Data:", this.getMediaData);
    }

    this.addMediaForm.patchValue({ campaignId: this.campaignId });
  }
  clearAllSearchFields() {
    this.searchTermName = '';
    this.searchTermFromDt = '';
    this.searchTermToDt = '';

    this.filterLeads();
  }
  filterLeads() {
    if (this.campaignsData) {
      this.campaignList = this.campaignsData.filter((lead: any) =>
        this.filterByName(lead) &&
        this.filterByFromDt(lead) &&
        this.filterByTodt(lead)
        );

    }
    this.sortedRoleList = this.campaignList.slice();

    this.sortUserList()
  }

  filterByName(lead: any): boolean {
    if (!this.searchTermName) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.name && lead.name.toLowerCase().includes(this.searchTermName.toLowerCase());
  }

  filterByFromDt(lead: any): boolean {
    if (!this.searchTermFromDt) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.fromDt && lead.fromDt.toLowerCase().includes(this.searchTermFromDt.toLowerCase());
  }
  filterByTodt(lead: any): boolean {
    if (!this.searchTermToDt) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.todt && lead.todt.toLowerCase().includes(this.searchTermToDt.toLowerCase());
  }




  sortState = { columnIndex: -1, ascending: true };
  sortTable(column: any) {
    if (this.sortColumn === column) {
      // If same column is clicked again, toggle sort order
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // If different column is clicked, set new sort column and reset sort order to ascending
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.sortUserList();
  }

  sortUserList() {
    this.sortedRoleList.sort((a, b) => {
      let aValue = a[this.sortColumn];
      let bValue = b[this.sortColumn];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        // Case-insensitive sorting for string values
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      if (this.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }





  tablePageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    debugger
    const startItem = (page - 1) * 20;
    const endItem = page * 20;
    this.campaignList = this.campaignsData.slice(startItem, endItem);
    this.sortedRoleList = this.campaignList.slice();

    this.sortUserList()
  }
  /**
 * Sort table data
 * @param param0 sort the column
 *
 */

  smallModal() {

    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  gotoAddMycampaign() {
    this._router.navigate(['/chits/add-my-campaign']);
  }


  goToEditCamapaign(id: any) {
    this._router.navigate(['/chits/edit-my-campaign', id]);
  }
  deleteMycampaign(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        this.campaignService.deleteMycampaigns(this.agentCode, id).subscribe((response: any) => {
          console.log("response", response)

          if (response.success === true) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Data has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });

          }

        }, error => {
          this.toastService.error('Something went wrong while deleting the role.');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: 'rgb(3, 142, 220)',
          showCancelButton: true,
        });
      }
    });
  }


}
