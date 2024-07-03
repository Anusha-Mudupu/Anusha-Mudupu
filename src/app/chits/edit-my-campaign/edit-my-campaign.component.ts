/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-edit-my-campaign',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,
    SimplebarAngularModule,
    TabsModule, FormsModule,
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
  providers: [ListService, DecimalPipe, DatePipe],
  templateUrl: './edit-my-campaign.component.html',
  styleUrl: './edit-my-campaign.component.scss'
})
export class EditMyCampaignComponent {
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
  selectedDate: any;
  selectedEndDate: any;
  allMedia: any;
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
  getByIdCampaign: any;
  updateMycampaignsForm: any;
  startDateInput: boolean = false;
  endDateInput: boolean = false;
  agentCode: any = "111";
  getMediaData: any;
  addMediaForm: any;
  datePipe = new DatePipe('en-US');
  campaignTypelookupConstants: any;
  campaignStatus: any;
  data: any;
  campaignData: any;
  matchedMedia: any;
  public display2 = "none";
  mediaStatus: any;
  MediaTypeenumConstants: any;
  getByMediaId: any;
  runMyCampaignForm: any;
  updateMediaForm: any;
  Id: any;
  campaignId: any;
  constructor(private fb: FormBuilder, private _router: Router, private screenWise: ScreenwiseService, private campaignService: CampaignService,
    private toastService: ToastrService, private leadService: LeadService, private user1Service: UserService, private masterService: MastersService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private activated: ActivatedRoute, private dialog: MatDialog, private service: ListService, private notificationService: NotificationService, private formbuilder: FormBuilder) {
    this.activated.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam ? +idParam : null; // Convert the string to a number
      console.log('id', this.id);
      this.campaignService.getAgentCampaignsData(this.agentCode).subscribe((data: any) => {
        console.log("this.getMediaData", data.data);
        this.campaignData = data.data;
        this.getMediaDatas();
      });
    });
    this.updateMycampaignsForm = this.fb.group({
      id: this.id,
      name: ['', Validators.compose([Validators.required])],
      startDate: ['', Validators.compose([Validators.required])],
      endDate: ['', Validators.compose([Validators.required])],
      status: [''],
      smsMessage: [''],
      whatsappMessage: [''],
      emailMessage: [''],
      code: [''],
      agentCode: '111',
    })
    this.addMediaForm = this.formbuilder.group({
      mediaType: "",
      name: "",
      filePath: "",
      campaignId: this.Id,
      size: "",
      status: ""
    });
    this.updateMediaForm = this.formbuilder.group(
      {
        mediaType: "",
        name: "",
        size: '',
        status: '',
        filePath: "",
        campaignId: 0
      }
    )
    this.runMyCampaignForm = this.formbuilder.group({
      id: [0],
      code: [''],
      name: [''],
      agentCode: [''],
      startDate: [''],
      endDate: [''],
      status: [0],
      smsMessage: [''],
      whatsappMessage: [''],
      emailMessage: [''],
      lastUpdatedBy: [''],
      lastUpdatedOn: [''],
      contacts: this.formbuilder.array([
        this.createContact()
      ]),
      campaignMedia: this.formbuilder.array([
        this.createCampaignMedia()
      ])
    });
  }
  createContact(): FormGroup {
    return this.formbuilder.group({
      id: [0],
      leaddate: [''],
      leadname: [''],
      leadphno: [''],
      leademail: [''],
      leadaddress: [''],
      leadsource: [0],
      leadsubsource: [0],
      leadassing: [0],
      leadquery: [''],
      enterdate: [''],
      entertime: [''],
      assignIn: [0],
      assigndate: [''],
      businessCode: [''],
      companyid: [0],
      leadsourceNavigation: this.formbuilder.group({
        id: [0],
        name: [''],
        businessCode: [''],
        companyid: [0],
        code: [''],
        isDeleted: [true],
        isActive: [true],
        leadEnters: this.formbuilder.array([
          ['']
        ]),
        sourceSubs: this.formbuilder.array([
          this.createSourceSub()
        ])
      }),
      lastUpdatedBy: [''],
      lastUpdatedOn: [''],
      productId: [0],
      productName: [''],
      employeeName: [''],
      branchId: [0],
      branchName: [''],
      status: [0],
      statusName: [''],
      followUps: this.formbuilder.array([
        this.createFollowUp()
      ])
    });
  }
  createSourceSub(): FormGroup {
    return this.formbuilder.group({
      id: [0],
      sid: [0],
      title: [''],
      businessCode: [''],
      isActive: [true],
      sidNavigation: ['']
    });
  }

  createFollowUp(): FormGroup {
    return this.formbuilder.group({
      id: [0],
      leadid: [0],
      eid: [0],
      remark: [''],
      nextFollowupDate: [''],
      nextFollowupTime: [''],
      nextFollowupThrough: [0],
      statusId: [0],
      followupThrough: [0],
      enterdate: [''],
      fid: [0],
      idate: [''],
      businessCode: [''],
      companyid: [0]
    });
  }

  createCampaignMedia(): FormGroup {
    return this.formbuilder.group({
      id: [0],
      mediaType: [''],
      status: [1],
      name: [''],
      filePath: [''],
      campaignId: [0],
      uploadFolder: [''],
      downloadPath: ['']
    });
  }

  ngOnInit() {
    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      this.campaignStatus = this.data.filter((item: any) => item.lookupCode == "AgentCampaignMediaStatus");
      console.log('aji', this.campaignStatus);
      if (this.campaignStatus.length > 0) {
        this.campaignTypelookupConstants = this.campaignStatus[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);
      }
      this.mediaStatus = this.data.filter((item: any) => item.lookupCode == "MediaType");
      console.log('this.mediaStatus', this.mediaStatus);
      if (this.mediaStatus.length > 0) {
        this.MediaTypeenumConstants = this.mediaStatus[0].lookupConstants;
        console.log("this.MediaTypeenumConstants", this.MediaTypeenumConstants);
      }
    })


    this.getByIdCampaign = this.campaignService.getByCampaigns(this.agentCode, this.id).subscribe((data: any) => {
      this.getByIdCampaign = data.data;
      this.updateMycampaignsForm.patchValue({
        id: this.getByIdCampaign.id,
        name: this.getByIdCampaign.name,
        startDate: this.formatDate(this.getByIdCampaign.startDate),
        endDate: this.formatDate(this.getByIdCampaign.endDate),
        status: this.getByIdCampaign.status
      });
      console.log("this.getByIdCampaign", this.getByIdCampaign)
      if (this.getByIdCampaign && this.getByIdCampaign.campaignMedia) {
        this.matchedMedia = this.getByIdCampaign.campaignMedia.filter((media: any) => media.campaignId === this.getByIdCampaign.id);
        console.log("Matched media", this.matchedMedia);

      }
      if (this.matchedMedia.length > 0) {
        this.campaignId = this.matchedMedia[0].campaignId;
        this.Id = this.matchedMedia[0].id;
        console.log("this.campaignId", this.campaignId);
        console.log("this.Id", this.Id);
      } else {
        console.log("No matching media found.");
      }
    })
    this.sortedRoleList = this.campaignsData.slice();
    this.screenWise.getScreens().subscribe(data => {
      this.roleScreens = data.find(screen => screen.screenName === 'AddCampaigns');
      if (this.roleScreens) {
        this.roleActions = this.roleScreens.actions;
      }
    });
    console.log("this.screens", this.roleScreens)

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
    this.filterLeads();
    this.fetchNotificationData();
  }
  SubmitMediaForm() {
    this.campaignService.updateMediaCampaigns(this.agentCode, this.campaignId, this.Id, this.updateMediaForm).subscribe((data: any) => {
      this.showSuccess();
      this.closeEditForm();
    },
      errorMsg => {
        this.showError();
      })
  }
  runMyCampaigns() {
    this.campaignService.runMyCampaign(this.agentCode, this.campaignId, this.runMyCampaignForm).subscribe((data: any) => {
      this.showSuccess();
      this._router.navigate(['/chits/my-campaign']);
    },
      errorMsg => {
        this.showError();
      }
    );
  }
  editForm(campaignId: any, Id: any) {
    this.campaignService.getByIdMediaCampaigns(this.agentCode, campaignId, Id).subscribe((data: any) => {
      this.getByMediaId = data
    })
    this.display2 = "block"
  }
  deleteMyCampaign(campaignId: any, Id: any) {
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
        this.campaignService.deleteMediaCampaigns(this.agentCode, campaignId, Id).subscribe((response: any) => {
          console.log("response", response)

          if (response.success === true) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Campaign has been deleted.',
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
  formatDate(date: string): any {
    return this.datePipe.transform(date, 'dd MMMM yyyy');
  }
  convertDateToISO(date: string): string {
    return new Date(date).toISOString();
  }
  getMediaDatas() {
    this.allMedia = [];
    this.campaignData.forEach((campaign: any) => {
      if (campaign.campaignMedia && campaign.campaignMedia.length > 0) {
        this.allMedia.push(...campaign.campaignMedia);
      }
    });
    console.log("All media data", this.allMedia);
  }
  Submit() {
    this.submitted = true;
    const formValues = this.updateMycampaignsForm.value;
    formValues.startDate = this.convertDateToISO(formValues.startDate);
    formValues.endDate = this.convertDateToISO(formValues.endDate);
    formValues.status = Number(formValues.status);
    console.log('submitted form', formValues);
    this.campaignService.updateMycampaigns(this.agentCode, this.id, formValues).subscribe(
      (res: any) => {
        console.log('submitted form', res);
        this.showSuccess();
        this._router.navigate(['/chits/my-campaign']);
      },
      errorMsg => {
        this.showError();
      }
    );
  }
  closeEditForm() {
    this.display2 = "none"
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
    this.sortedRoleList = this.campaignList.slice();
    this.sortUserList()
  }
  uploadFiles() {
    this.addMediaForm.patchValue({ campaignId: this.id });
    const formValues = this.addMediaForm.value;
    formValues.status = Number(formValues.status);
    formValues.size = Number(formValues.size);
    console.log('mediaForm', formValues);
    this.campaignService.postMyCampaignMediaFile(this.agentCode, this.id, formValues).subscribe((response: any) => {
      console.log(response);
      console.log('mediaForm', formValues);
      this.showMediaSuccess();
    }, error => {
      this.showError()
    })
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
  showMediaSuccess() {
    this.toastService.success('Media Successfully Uploaded')
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
  fetchNotificationData(): void {
    this.notificationService.getNotification().subscribe(
      (data: any) => {
        this.NotificationData = data; // Assign fetched data to NotificationData
        this.filterDataForTabs();
      },
      (error) => {
        console.error('Failed to fetch NotificationData:', error);
      }
    );
  }
  filterDataForTabs(): void {
    if (this.NotificationData) {
      this.whatsappdata = this.NotificationData.filter((item: any) => item.notificationType === 3);
      console.log('whatsappdata', this.whatsappdata);

      this.emailData = this.NotificationData.filter((item: any) => item.notificationType === 1);
      console.log('emailData', this.emailData);

      this.smsData = this.NotificationData.filter((item: any) => item.notificationType === 2);
      console.log('whatsappdata', this.smsData);

    }
  }
  // CC BCC Collape
  collapse(id: any) {
    document.querySelector('#' + id)?.classList.toggle('show')
  }
  onSubmit() {
    this.notificationService.updateNotification(this.selectedItem.id, this.editContentForm.value).subscribe((data: any) => {
      console.log("content edited successfully", data,);
      this.showSuccess();

    });
    location.reload();
  }

  showSuccess() {
    this.toastService.success('Content  Successfully Updated');
  }
  removeEmailData(id: any) {
    this.emailId = id;
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
        this.notificationService.deleteNotification(this.emailId).subscribe((data) => {
          console.log(" delete notification", data);
          if (data === true) {
            // Remove the deleted email from the displayed list
            this.emailData = this.emailData.filter((email: any) => email.id !== id);
            Swal.fire({
              title: 'Deleted!',
              text: 'Email Data has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });
            location.reload();
          }
        }, error => {
          this.toastService.error('Something went wrong while deleting the email.');
        });
      }
    });
  }

  removeWhatsappData(id: any) {
    this.whatsappId = id
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
        this.notificationService.deleteNotification(this.whatsappId).subscribe((data) => {
          console.log(" delete notification", data);
          if (data === true) {
            // Remove the deleted email from the displayed list
            this.whatsappdata = this.whatsappdata.filter((wht: any) => wht.id !== id);
            Swal.fire({
              title: 'Deleted!',
              text: 'Email Data has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });
            location.reload();
          }
        }, error => {
          this.toastService.error('Something went wrong while deleting the email.');
        });
      }
    });
  }
  removeSmsData(id: any) {
    this.smsId = id;
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
        this.notificationService.deleteNotification(this.smsId).subscribe((data) => {
          console.log("delete notification", data);
          if (data === true) {
            // Remove the deleted email from the displayed list
            this.smsData = this.smsData.filter((sms: any) => sms.id !== id);
            Swal.fire({
              title: 'Deleted!',
              text: ' Data has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });
            location.reload();
          }
        }, error => {
          this.toastService.error('Something went wrong while deleting the email.');
        });
      }
    });
  }
  navigateTo() {
    this._router.navigate(['/chits/my-campaign'])
  }

  checkUncheckAll(ev: any) {
    this.matchedMedia = this.matchedMedia.map((x: { states: any }) => ({ ...x, states: ev.target.checked }));

    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.matchedMedia.length; i++) {
      if (this.matchedMedia[i].states == true) {
        result = this.matchedMedia[i].id;
        checkedVal.push(result);
        console.log('all checked', result);
      }
    }

    this.checkedValGet = checkedVal;
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.matchedMedia.length; i++) {
      if (this.matchedMedia[i].states == true) {
        result = this.matchedMedia[i].id;
        checkedVal.push(result);
        console.log('individual check', result);
      }
    }
    this.checkedValGet = checkedVal

    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
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
}
