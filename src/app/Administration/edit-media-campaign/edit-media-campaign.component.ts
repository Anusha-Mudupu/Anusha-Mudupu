/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';
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


import { NotificationService } from 'src/app/Administration/notification.service';

import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
@Component({
  selector: 'app-edit-media-campaign',
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
    FlatpickrModule,],
  templateUrl: './edit-media-campaign.component.html',
  styleUrl: './edit-media-campaign.component.scss'
})
export class EditMediaCampaignComponent {
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
   filteredProducts: any;
   checkedValGet: any[] = [];
  mediaTypes = [
    {
      "id": 1,
      "name": "Image"
    },
    {
      "id": 1,
      "name": "Pdf"
    },
    {
      "id": 1,
      "name": "Audio"
    },
    {
      "id": 1,
      "name": "Video"
    },
    {
      "id": 1,
      "name": "Document"
    },
  ];


  constructor(private _router: Router, private screenWise: ScreenwiseService, private campaignService: CampaignService,
    private toastService: ToastrService, private leadService: LeadService, private user1Service: UserService, private masterService: MastersService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog,  private notificationService: NotificationService, private formbuilder: FormBuilder) { }
  ngOnInit() {
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

    this.filterLeads()

    
    this.fetchNotificationData();


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

  getMediaType(event:any){
    this. selectedmediatype=event.target.value
    console.log('selected media',this.selectedmediatype);
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

  gotoAddcampaign() {
    this._router.navigate(['/chits/add-campaign']);
  }







  // tabsComponent
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

  singleData: any = [];
  getEmailIndiviualData(id: any) {
    this.selectedItem = this.emailData.find((item: any) => item.id === id);
    // this.emailContent=this.selectedItem.content
    this.notificationService.getNotificationDataById(this.selectedItem.id).subscribe((data: any) => {
      this.emailDataById = data;
      this.emailContent = data.content;
      this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['name'].setValue(data.name);
      this.editContentForm.controls['subject'].setValue(data.subject);
      this.editContentForm.controls['content'].setValue(data.content);
      this.editContentForm.controls['notificationType'].setValue(data.notificationType);
      this.editContentForm.controls['templateType'].setValue(data.templateType);
      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
    });
    console.log("this.selectedItem", this.selectedItem);
  }

  getWhatsappIndividualData(id: any) {
    this.selectedItem = this.whatsappdata.find((item: any) => item.id === id);
    // this.whatsappConent=this.selectedItem.content
    this.notificationService.getNotificationDataById(this.selectedItem.id).subscribe((data: any) => {
      this.whatsappConent = data.content;
      this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['name'].setValue(data.name);
      this.editContentForm.controls['subject'].setValue(data.subject);
      this.editContentForm.controls['content'].setValue(data.content);
      this.editContentForm.controls['notificationType'].setValue(data.notificationType);
      this.editContentForm.controls['templateType'].setValue(data.templateType);
      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
    });
    console.log("this.selectedItem", this.selectedItem);
  }


  getSmsIndividualData(id: any) {
    this.selectedItem = this.smsData.find((item: any) => item.id === id);
    // this.whatsappConent=this.selectedItem.content
    this.notificationService.getNotificationDataById(this.selectedItem.id).subscribe((data: any) => {
      this.smsConent = data.content;
      this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['name'].setValue(data.name);
      this.editContentForm.controls['subject'].setValue(data.subject);
      this.editContentForm.controls['content'].setValue(data.content);
      this.editContentForm.controls['notificationType'].setValue(data.notificationType);
      this.editContentForm.controls['templateType'].setValue(data.templateType);
      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
    });
  }



  onSubmit() {
    this.notificationService.updateNotification(this.selectedItem.id, this.editContentForm.value).subscribe((data: any) => {
      console.log("content edited successfully", data,);
      this.showSuccess();

    });
    location.reload();
  }
  // removeSkill(id:any){
  //   this.id=id
  //   this.notificationService.deleteNotification(this.id).subscribe((data)=>{
  //     console.log(" delete notification",data);
  //     this.showSuccess1();

  //   })
  // }
  // showSuccess1(){
  //   this.toastService.success('NOtification Successfully Deleted');
  // }
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
    // this.notificationService.deleteNotification(this.whatsappId).subscribe((data)=>{
    //   console.log(" delete notification",data);
    //   this.showSuccess1();


    // })
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
    // this.notificationService.deleteNotification(this.smsId).subscribe((data)=>{
    //   console.log(" delete notification",data);
    //   this.showSuccess1();

    // })
  }
  selectUserWhatsApp(index: number) {
    this.selectedIndexWhatsApp = index;
    // Add your logic to handle click event here, such as fetching individual data
    this.getWhatsappIndividualData(this.whatsappdata[index].id);
  }
  selectUserEmail(index: number) {
    this.selectedIndexEmail = index;

    this.getEmailIndiviualData(this.emailData[index].id);
  }
  selectUserSms(index: number) {
    this.selectedIndexSms = index;

    this.getSmsIndividualData(this.smsData[index].id);

  }
  navigateTo() {
    this._router.navigate(['/chits/Campaigns'])
  }
  checkUncheckAll(ev: any) {
    this.filteredProducts = this.filteredProducts.map((x: { states: any }) => ({ ...x, states: ev.target.checked }));

    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.filteredProducts.length; i++) {
      if (this.filteredProducts[i].states == true) {
        result = this.filteredProducts[i].id;
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
    for (var i = 0; i < this.filteredProducts.length; i++) {
      if (this.filteredProducts[i].states == true) {
        result = this.filteredProducts[i].id;
        checkedVal.push(result);
        console.log('individual check', result);
      }
    }
    this.checkedValGet = checkedVal
    
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }
}
