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
import { AppsRoutingModule } from 'src/app/pages/apps/apps-routing.module';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CountUpModule } from 'ngx-countup';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxEchartsModule } from 'ngx-echarts';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
    TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule,
    AppsRoutingModule,
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
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {
  campaignsData: any;
  data: any;
  campaignStatus: any;
  campaignTypelookupConstants: any;
  campaignId: any;
  campaignMediaData: any;
  campaignDataById: any;
  camapaignStatus: any;
  status: any;
  filteredCamapaignStatus: any;

  public verticalData: verticalData[] = [];
  public verticalid = "1";

  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  public display = "none";
  searchTermName: any;
  public Editor = ClassicEditor;
  searchTermFromDt: any;
  searchTermToDt: any;
  isFirstOpen = false;
  sortedRoleList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'name'; // Default sort column
  sortOrder: string = 'asc';
  roleScreens: any;
  roleActions: any;
  campaignList: any;


  constructor(private _router: Router, private screenWise: ScreenwiseService, private campaignService: CampaignService,
    private toastService: ToastrService, private leadService: LeadService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private service: ListService, private notificationService: NotificationService, private formbuilder: FormBuilder) {





  }



  ngOnInit() {
    // this.campaignService.getCampaignData().subscribe((data: any) => {
    //   this.campaignsData = data;
    //   // this.sortedRoleList = this.campaignsData.slice();
    // });
    this.campaignService.getCampaignData().subscribe((data: any) => {
      this.campaignsData = data.data;
      console.log('campaigns data', this.campaignsData);
    });


    this.screenWise.getScreens().subscribe(data => {
      this.roleScreens = data.find(screen => screen.screenName === 'Campaigns');
      if (this.roleScreens) {
        // Assign the actions of the "Role" screen to roleActions
        this.roleActions = this.roleScreens.actions;
      }
    });
    console.log("this.screens", this.roleScreens)
    // this.filterLeads();


    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      this.campaignStatus = this.data.filter((item: any) => item.lookupCode == "CampaignStatus");

      this.campaignTypelookupConstants = this.campaignStatus[0].lookupConstants;
      console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);



    });




  }


  getStatusDescription(status: any): string {
    if (this.campaignTypelookupConstants) {
      const statusDescription = this.campaignTypelookupConstants.find(
        (constant: any) => constant.value == status
      );
      return statusDescription ? statusDescription.description : '';
    }
    return '';
  }
  filterLeads() {
    if (this.campaignsData) {
      this.campaignList = this.campaignsData.filter((lead: any) =>
        this.filterByName(lead));
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

  gotoAddcampaign() {
    this._router.navigate(['/chits/add-campaign']);
  }


  goToEditCamapaign(id: any) {
    this._router.navigate(['/chits/edit-campaign', id]);
  }





  deletecampaign(id: any) {
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
        this.campaignService.deleteCamapaignData(id).subscribe((response: any) => {
          console.log("response", response)

          if (response.success === true) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Role has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });
            this.campaignsData = this.campaignsData.filter((campaign: any) => campaign.id !== id);
          }

        }, error => {
          this.toastService.error('Something went wrong while deleting the Camapaign.');
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
