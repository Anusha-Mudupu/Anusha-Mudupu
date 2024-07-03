/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
// import { format, parseISO } from 'date-fns';
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
  selector: 'app-edit-campaign',
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
  templateUrl: './edit-campaign.component.html',
  styleUrl: './edit-campaign.component.scss'
})
export class EditCampaignComponent {
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
  campaignMediaData: any;
  addMediaForm: any;
  data: any;
  campaignStatus: any;
  campaignTypelookupConstants: any;
  mediaTypelookupConstants: any;
  mediaTypes: any;
  campaignMediaTypelookupConstants: any;
  campaignMediaStatus: any;
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
  sortedRoleList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'roleName'; // Default sort column
  sortOrder: string = 'asc';
  roleScreens: any;
  roleActions: any;
  campaignList: any;

  // tabsComponent Data
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
  editMediaForm:any;

  updateCampaignDataForm: any;
  endDate: any;
  constructor(private _router: Router, private screenWise: ScreenwiseService, private campaignService: CampaignService, private activated: ActivatedRoute,
    private toastService: ToastrService, private leadService: LeadService, private user1Service: UserService, private masterService: MastersService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private service: ListService, private notificationService: NotificationService, private formbuilder: FormBuilder) {
    this.activated.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
      console.log('id', this.id);

    });
    this.updateCampaignDataForm = this.formbuilder.group({
      lastUpdatedBy: "",
      lastUpdatedOn: '',
      id: this.id,
      code: '',
      name: '',
      startDate: '',
      endDate: '',
      status: '',
      isActive: true,
      isDeleted: false,
      smsMessage: "",
      whatsappMessage: "",
      emailMessage: ''
    });

    this.addMediaForm = this.formbuilder.group({
      mediaType: "",
      name: "",
      filePath: "",
      size: 0,
      status:'',
      campaignId: this.id
    });

    this.editMediaForm=this.formbuilder.group({
      mediaType: "",
      name: "",
      filePath: "",
      size: 0,
      status:'',
      campaignId: this.id
    })
    
  }
  ngOnInit() {
    this.campaignService.getCampaignDataById(this.id).subscribe((data: any) => {
      this.campaignsData = data.data;
      this.campaignMediaData = data.data.campaignMedia;
      console.log('campaignData', this.campaignsData);

      this.updateCampaignDataForm.controls['name'].setValue(data.data.name);
      this.updateCampaignDataForm.controls['startDate'].setValue(data.data.startDate);
      this.updateCampaignDataForm.controls['endDate'].setValue(data.data.endDate);
      this.updateCampaignDataForm.controls['status'].setValue(data.data.status);
      this.updateCampaignDataForm.controls['smsMessage'].setValue(data.data.smsMessage);
      this.updateCampaignDataForm.controls['whatsappMessage'].setValue(data.data.whatsappMessage);
      this.updateCampaignDataForm.controls['emailMessage'].setValue(data.data.emailMessage);

     
      this.editMediaForm.controls['mediaType'].setValue(this.campaignMediaData.mediaType)
      this.editMediaForm.controls['name'].setValue(this.campaignMediaData.name)
      this.editMediaForm.controls['filePath'].setValue(this.campaignMediaData.filePath)
      this.editMediaForm.controls['status'].setValue(this.campaignMediaData.status)


    });

    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      this.campaignStatus = this.data.filter((item: any) => item.lookupCode == "CampaignStatus");
      console.log('campaignStatus', this.campaignStatus);
      if (this.campaignStatus.length > 0) {
        this.campaignTypelookupConstants = this.campaignStatus[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);
      }
      this.mediaTypes = this.data.filter((item: any) => item.lookupCode == "MediaType");
      console.log('mediaTypes', this.mediaTypes);
      if (this.mediaTypes.length > 0) {
        this.mediaTypelookupConstants = this.mediaTypes[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);
      }


      this.campaignMediaStatus = this.data.filter((item: any) => item.lookupCode == "CampaignMediaStatus");
      console.log('campaignStatus', this.campaignMediaStatus);
      if (this.campaignMediaStatus.length > 0) {
        this.campaignMediaTypelookupConstants = this.campaignMediaStatus[0].lookupConstants;
        console.log("LeadStatus lookupConstants", this.campaignTypelookupConstants);
      }

    });

    this.sortedRoleList = this.campaignsData.slice();
    this.screenWise.getScreens().subscribe(data => {
      this.roleScreens = data.find(screen => screen.screenName === 'AddCampaigns');
      if (this.roleScreens) {
        // Assign the actions of the "Role" screen to roleActions
        this.roleActions = this.roleScreens.actions;
      }
    });
    console.log("this.screens", this.roleScreens)

    this.sortedRoleList = this.campaignsData.slice();
    console.log("this.sortedUserList", this.sortedRoleList)

    // this.getRolesData()









  }
  onStartDateChange(event: any) {
    this.selectedDate = event.target.value;
    console.log("selectedDate", this.selectedDate)
    // Assuming selectedDate is in YYYY-MM-DD format, convert it to YY MM DD

    this.updateCampaignDataForm.patchValue({ startDate: this.selectedDate });
  }




  onEndDateChange(event: any) {

    this.selectedEndDate = event.target.value;
    // const selectedDateUTC = new Date(selectedDate);
    this.updateCampaignDataForm.patchValue({ endDate: this.selectedEndDate });
  }



















  smallModal(id:any) {
       
    this.display = "block";
    this.campaignService.getCampaignDataById(id).subscribe((data: any) => {
      this.campaignsData = data.data;
      this.campaignMediaData = data.data.campaignMedia;
      console.log('campaignData', this.campaignsData);

     
     
      this.editMediaForm.controls['mediaType'].setValue(this.campaignMediaData.mediaType)
      this.editMediaForm.controls['name'].setValue(this.campaignMediaData.name)
      this.editMediaForm.controls['filePath'].setValue(this.campaignMediaData.filePath)
      this.editMediaForm.controls['status'].setValue(this.campaignMediaData.status)


    });

  }
  onCloseHandled() {
    this.display = "none";
  }

  gotoAddcampaign() {
    this._router.navigate(['/chits/add-campaign']);
  }











  // CC BCC Collape
  collapse(id: any) {
    document.querySelector('#' + id)?.classList.toggle('show')
  }




  goToEditMediaCamapaign() {
    this._router.navigate(['/chits/editMediaFile']);
  }






  onSubmit() {
    if (this.selectedDate) {
      this.updateCampaignDataForm.patchValue({ startDate: this.selectedDate });
    }
    if (this.selectedEndDate) {

      this.updateCampaignDataForm.patchValue({ endDate: this.selectedEndDate });
    }
    this.campaignService.updateCampaignData(this.id, this.updateCampaignDataForm.value).subscribe((data: any) => {
      console.log("content edited successfully", data,);
      this.showSuccess();
      this._router.navigate(['/chits/Campaigns']);

    }, error => {
      this.showError();
    }
    );
    console.log('updatecapignform', this.updateCampaignDataForm.value)
  }

  showSuccess() {
    this.toastService.success('Content Successfully Updated');
  }
  showError() {
    this.toastService.error('Something Went Wrong');
  }

  navigateTo() {
    this._router.navigate(['/chits/Campaigns'])
  }



  uploadFiles() {
    this.addMediaForm.patchValue({ campaignId: this.id });
    this.campaignService.createCampaignMedia(this.id, this.addMediaForm.value).subscribe((response: any) => {
      console.log(response);
      console.log('mediaForm', this.addMediaForm.value);
      this.showMediaSuccess();
      this.ngOnInit();
    }, error => {
      this.showMediaError()
    })
  }
  showMediaSuccess() {
    this.toastService.success('Media Successfully Uploaded')
  }
  showMediaError() {
    this.toastService.error('Something went Wrong');
  }



  // deletecampaignMedia(id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: 'rgb(3, 142, 220)',
  //     cancelButtonColor: 'rgb(243, 78, 78)',
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //   }).then(result => {
  //     if (result.value) {
  //       this.campaignService.deleteCampaignMedia(id).subscribe((response: any) => {
  //         console.log("response", response)

  //         if (response.success === true) {
  //           Swal.fire({
  //             title: 'Deleted!',
  //             text: 'Role has been deleted.',
  //             icon: 'success',
  //             confirmButtonColor: 'rgb(3, 142, 220)',
  //           });
  //           this.campaignsData = this.campaignsData.filter(campaign => campaign.id !== id);
  //         }

  //       }, error => {
  //         this.toastService.error('Something went wrong while deleting the role.');
  //       });
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire({
  //         title: 'Cancelled',
  //         text: 'Your imaginary file is safe :)',
  //         icon: 'error',
  //         confirmButtonColor: 'rgb(3, 142, 220)',
  //         showCancelButton: true,
  //       });
  //     }
  //   });
  // }
}
