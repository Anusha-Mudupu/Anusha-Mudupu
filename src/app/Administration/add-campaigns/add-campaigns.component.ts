/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
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
import { NotificationService } from '../notification.service';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';


@Component({
  selector: 'app-add-campaigns',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
    TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule



    , NgSelectModule,

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
  templateUrl: './add-campaigns.component.html',
  styleUrl: './add-campaigns.component.scss'
})
export class AddCampaignsComponent {
  isCollapsed = false;
 campaignsData: any;
 StatusData: any;
 public verticalData: verticalData[] = [];
  public verticalid = "1";
 public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  public display = "none";
  roleScreens: any;
  roleActions: any;
  campaignList: any;
  campaignId: any;
  campaignsForm: any;
  selectedDate: any;
  fromDate!: any;
  toDate!: any;
  previousToDate: any;
  datePipe = new DatePipe('en-US');
  data: any;
  campaignStatus: any;
  campaignTypelookupConstants: any;

  constructor(private _router: Router, private screenWise: ScreenwiseService, private campaignService: CampaignService,
    private toastService: ToastrService, private leadService: LeadService, private user1Service: UserService, private masterService: MastersService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private approute: ActivatedRoute, private service: ListService, private notificationService: NotificationService, private formbuilder: FormBuilder) {
    this.campaignId = this.approute.snapshot.params['id'];
    this.campaignsForm = this.formbuilder.group({
      code:[''],
      name: [''],
      startDate: [''],
      endDate: [''],
      smsMessage: [''],
      whatsappMessage: [''],
      emailMessage: [''],
    });
  }


  ngOnInit() {
    this.selectedDate = new Date();
    this.campaignService.getCampaignData().subscribe((data: any) => {
      if (Array.isArray(data.data) && data.data.length > 0) {
        // Find the campaign with the latest endDate
        const latestCampaign = data.data.reduce((latest: any, campaign: any) => {
          const campaignEndDate = new Date(campaign.endDate);
          return (campaignEndDate > new Date(latest.endDate)) ? campaign : latest;
        });
        this.previousToDate = latestCampaign.endDate;
        console.log('Previous toDate:', this.previousToDate);
      } else {
        console.log('No campaigns found or data is not in the expected format.');
      }

      if (this.previousToDate) {
        // Add 1 day to previousToDate
        const fromDateObj = new Date(this.previousToDate);
        fromDateObj.setDate(fromDateObj.getDate() + 1);
        this.fromDate = this.formatDate(fromDateObj.toISOString());

        // Calculate toDate 6 months after fromDate
        const toDateObj = new Date(this.fromDate);
        toDateObj.setMonth(toDateObj.getMonth() + 6);
        this.toDate = this.formatDate(toDateObj.toISOString());
      } else {
        const fromDateObj = new Date();
        this.fromDate = this.formatDate(fromDateObj.toISOString());

        // Calculate toDate 6 months after fromDate
        const toDateObj = new Date(this.fromDate);
        toDateObj.setMonth(toDateObj.getMonth() + 6);
        this.toDate = this.formatDate(toDateObj.toISOString());
      }

      // Format dates for display
      this.campaignsForm.patchValue({
        startDate: this.fromDate,
        endDate: this.toDate
      });
    });


    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;


      this.campaignStatus = this.data.filter((item: any) => item.lookupCode == "CampaignStatus");
      console.log('raji', this.campaignStatus);
      if (this.campaignStatus.length > 0) {
        this.campaignTypelookupConstants = this.campaignStatus[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);
      }

    });



  }
  formatDate(isoString: any): any {
    const date = new Date(isoString);
    return this.datePipe.transform(date, 'dd MMM yyyy');
  }

  parseDate(displayString: any): any {
    const parts = displayString.split(' ');
    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);

    const monthIndex = this.getMonthIndex(monthName);

    if (monthIndex !== null) {
      const date = new Date(year, monthIndex, day);
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    }
    return null; // Handle invalid month name gracefully
  }

  getMonthIndex(monthName: string): number | null {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const index = months.indexOf(monthName);
    return index !== -1 ? index : null;
  }

  onToDateChange(): void {
    // Update fromDate when toDate changes
    const toDateValue = this.campaignsForm.get('endDate').value;
    const toDateObj = new Date(this.parseDate(toDateValue));
    toDateObj.setMonth(toDateObj.getMonth() - 6);
    this.fromDate = this.formatDate(toDateObj.toISOString());
    this.campaignsForm.patchValue({
      startDate: this.fromDate
    });
  }

  onSubmits(): void {
    const formValue = this.campaignsForm.value;

    const backendPayload = {
      ...formValue,
      startDate: this.parseDate(formValue.startDate),
      endDate: this.parseDate(formValue.endDate)
    };

    console.log('Form Submitted', backendPayload);

    this.campaignService.createCampignData(backendPayload).subscribe((data: any) => {
      console.log(data);
      this.showSuccess();
      this._router.navigate(['/chits/Campaigns'])
    },error=>{
      this.showError();
    });


  }

 
smallModal() {

    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }










  // CC BCC Collape
  collapse(id: any) {
    document.querySelector('#' + id)?.classList.toggle('show')
  }

 
  showSuccess() {
    this.toastService.success('Campaign  Successfully Created');
  }
  showError() {
    this.toastService.error('Something Went Wrong');
  }


 
  navigateTo() {
    this._router.navigate(['/chits/Campaigns'])
  }
 
}
