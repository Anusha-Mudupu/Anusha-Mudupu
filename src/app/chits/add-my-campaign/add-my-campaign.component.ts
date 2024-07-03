/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { UntypedFormGroup, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {  ModalModule } from 'ngx-bootstrap/modal';
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
import { roledata, verticalData } from 'src/app/chits-class';
import { ScreenwiseService } from 'src/app/chits/screenwise.service';
import { CampaignService } from 'src/app/chits/Services/campaign.service';
import { LeadService } from '../Services/lead.service';
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
import { NotificationService } from 'src/app/Administration/notification.service';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
@Component({
  selector: 'app-add-my-campaign',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,
    SimplebarAngularModule,
    TabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPaginationModule,
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
  templateUrl: './add-my-campaign.component.html',
  styleUrl: './add-my-campaign.component.scss'
})
export class AddMyCampaignComponent {
  isCollapsed = false;
  horizontalCollapsed = false;
  arrowCollapsed = false;
  filterCollapsed = false;
  blockCollapsed = false;
  inlineCollapsed = false;
  multiCollapseExample1 = false;
  multiCollapseExample2 = false;
  isFirstOpen = false;
  campaignsData: any;
  public roleData2: roledata[] = []; Userlist1: any;
  employeeList: any;
  StatusData: any;
  selectedmediatype: any;
  data: any;
  campaignStatus: any;
  campaignTypeenumConstants: any;
  previousToDate: any;
  AgentCampaignData: any;
  mediaStatus: any;
  MediaTypeenumConstants: any;
  public searchTerm: string = '';
  public spinner: boolean = true
  public verticalData: verticalData[] = [];
  public rolePermission: any = [];
  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  public display = "none";
  searchTermName: any;
  searchTermFromDt: any;
  searchTermToDt: any;
  sortedRoleList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'roleName'; // Default sort column
  sortOrder: string = 'asc';
  roleScreens: any;
  roleActions: any;
  campaignList: any;
  id: any;
  editor: any = Editor;
  emailData: any;
  emailIds: number[] = [];
  isShowMenu: boolean = true;
  emailDatas: any;
  dataCount: any;
  masterSelected!: boolean;
  cat: any;
  public CcRecipientsCollapse = true;
  public BccRecipientsCollapse = true;
  public Editor = ClassicEditor;
  toolbar: any = TOOLBAR_FULL;
  isMenuOpen!: boolean;
  usrProfile: any = 'assets/images/users/32/avatar-1.jpg';
  allmastername: any
  NotificationData: any;
  selectedItem: any;
  emailContent: any;
  whatsappdata: any;
  whatsappConent: any;
  emailDataById: any;
  editContentForm: any;
  smsData: any;
  smsConent: any;
  smsId: any;
  selectedIndexEmail: any;
  selectedIndexSms: any;
  selectedIndexWhatsApp: any;
  emailId: any;
  whatsappId: any;
  selectedTab: string = 'Email';
  filteredData: any;
  selectedIndex: number = 0;
  chitsLeadData: any;
  checkedValGet: any[] = [];
  breadCrumbItems!: Array<{}>;
  productForm!: UntypedFormGroup;
  submitted = false;
  products: any;
  endItem: any
  allproducts: any;
  filteredProducts: any;
  leadTransferForm: any;
  leadsData: any;
  verticalid: any;
  AddMycampaignsForm: any;
  datePipe = new DatePipe('en-US');
  fromDate!: any;
  toDate!: any;
  selectedDate: any;
  agentCode: any = "111";
  constructor(private activated: ActivatedRoute, private fb: FormBuilder, private _router: Router, private screenWise: ScreenwiseService, private campaignService: CampaignService,
    private toastService: ToastrService, private leadService: LeadService, private user1Service: UserService, private masterService: MastersService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private service: ListService, private notificationService: NotificationService, private formbuilder: FormBuilder) {
    this.activated.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : null; // Convert the string to a number
      console.log('id', this.id);
    });
    this.AddMycampaignsForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      startDate: ['', Validators.compose([Validators.required])],
      endDate: ['', Validators.compose([Validators.required])],
      lastUpdatedBy: [''],
      lastUpdatedOn: [''],
      smsMessage: [''],
      whatsappMessage: [''],
      emailMessage: [''],
      code: [''],
      agentCode: '111',

    })
    this.leadService.getVerticalDropdown().subscribe((data: any) => {
      this.verticalData = data;
      console.log("vertical", this.verticalData)
    });
    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      this.campaignStatus = this.data.filter((item: any) => item.lookupCode == "AgentCampaignMediaStatus");
      console.log('this.campaignStatus', this.campaignStatus);
      if (this.campaignStatus.length > 0) {
        this.campaignTypeenumConstants = this.campaignStatus[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypeenumConstants);
      }
      this.mediaStatus = this.data.filter((item: any) => item.lookupCode == "MediaType");
      console.log('this.mediaStatus', this.mediaStatus);
      if (this.mediaStatus.length > 0) {
        this.MediaTypeenumConstants = this.mediaStatus[0].lookupConstants;
        console.log("this.MediaTypeenumConstants", this.MediaTypeenumConstants);
      }
    })
  }
  ngOnInit() {
    this.selectedDate = new Date();
    this.campaignService.getAgentCampaignsData(this.agentCode).subscribe((data: any) => {
      this.AgentCampaignData = data.data
      if (Array.isArray(this.AgentCampaignData) && this.AgentCampaignData.length > 0) {
        // Find the campaign with the latest endDate
        const latestCampaign = this.AgentCampaignData.reduce((latest: any, campaign: any) => {
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
    });
    this.campaignsData = this.campaignService.getStaticCampaignData()
    console.log('campaignData', this.campaignsData);
    this.sortedRoleList = this.campaignsData.slice();
    this.screenWise.getScreens().subscribe(data => {
      this.roleScreens = data.find(screen => screen.screenName === 'AddCampaigns');
      if (this.roleScreens) {
        // Assign the actions of the "Role" screen to roleActions
        this.roleActions = this.roleScreens.actions;
      }
    });
    console.log("this.screens", this.roleScreens);
    this.sortedRoleList = this.campaignsData.slice();
    console.log("this.sortedUserList", this.sortedRoleList)
    this.user1Service.getUserList().subscribe((data: any) => {
      console.log(data);
      this.Userlist1 = data;
      console.log(this.Userlist1.data);
      console.log(this.Userlist1.data);
      this.employeeList = this.Userlist1.data.filter((user: any) => {
        return user.roles.includes('Employee');
      });
      console.log('employeelist', this.employeeList);
    });
    this.masterService.getstatus().subscribe((data: any) => {
      this.StatusData = data;
    });

    this.leadService.getVerticalDropdown().subscribe((data: any) => {
      this.verticalData = [{ id: 0, name: 'All' }, ...data];
      console.log("vertical", this.verticalData)
    });

    this.filterLeads()
    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      this.campaignStatus = this.data.filter((item: any) => item.enumCode == "AgentCampaignStatus");
      console.log('raji', this.campaignStatus);
      if (this.campaignStatus.length > 0) {
        this.campaignTypeenumConstants = this.campaignStatus[0].enumConstants;
        console.log("LeadStatus enumConstants", this.campaignTypeenumConstants);
      }

    });


  }
  formatDate(isoString: any): any {
    const date = new Date(isoString);
    return this.datePipe.transform(date, 'dd MMM yyyy');
  }
  // Method to parse the date to the required format for the backend
  parseDate(displayString: any): any {
    const parts = displayString.split(' ');
    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);
    const monthIndex = this.getMonthIndex(monthName);
    if (monthIndex !== null) {
      const date = new Date(year, monthIndex, day);
      return date.toISOString();
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
    const toDateValue = this.AddMycampaignsForm.get('endDate').value;
    const toDateObj = new Date(this.parseDate(toDateValue));
    toDateObj.setMonth(toDateObj.getMonth() - 6);
    this.fromDate = this.formatDate(toDateObj.toISOString());
    this.AddMycampaignsForm.patchValue({
      startDate: this.fromDate
    });
  }
  onSubmit() {
    const formValue = this.AddMycampaignsForm.value;
    console.log("Create user Data", this.AddMycampaignsForm.value)
    this.submitted = true;
    console.log("data")
    this.campaignService.createMycampaigns(this.agentCode, this.AddMycampaignsForm.value).subscribe((data: any) => {
      console.log("this.AgentCampaignData", data);
      this._router.navigate(['/chits/my-campaign'])
      this.showSuccess()
    }, error => {
      this.showError()
    });
  }

  showError() {
    this.toastService.error('Something is Wrong')
  }
  filterLeads() {
    if (this.campaignsData) {
      this.campaignList = this.campaignsData.filter((lead: any) =>
        this.filterByName(lead) &&
        this.filterByFromDt(lead) &&
        this.filterByTodt(lead)
      );
    }
    this.sortedRoleList = this.campaignList.slice(); this.sortUserList()
  }

  getMediaType(event: any) {
    this.selectedmediatype = event.target.value
    console.log('selected media', this.selectedmediatype);
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
  smallModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  gotoAddcampaign() {
    this._router.navigate(['/chits/add-campaign']);
  }
  collapse(id: any) {
    document.querySelector('#' + id)?.classList.toggle('show')
  }
  showSuccess() {
    this.toastService.success('Content  Successfully Updated');
  }
  navigateTo() {
    this._router.navigate(['/chits/my-campaign'])
  }
  onCategoryChange(event: any) {
    const selectedCategoryId = event.target.value;
    this.filteredProducts = this.chitsLeadData.filter((item: any) => {
      return item.assignTo === selectedCategoryId;
    });
    console.log('Filtered products:', this.filteredProducts);
  }

  gotMycampaignScreen() {
    return this._router.navigate(['/chits/my-campaign'])
  }

  onVerticalChange(event: any) {
    this.verticalid = event.target.value;
    console.log('verticalId', this.verticalid)
    this.leadService.getrealestateleaddata(this.verticalid).subscribe((data: any) => {
      this.leadsData = data;
    })

  }
  trackByFn(index: number, item: any): number {
    return item.id; // Use the lead ID as the unique identifier
  }
} 
