/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CountUpModule } from 'ngx-countup';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxEchartsModule } from 'ngx-echarts';
import { Editor, TOOLBAR_FULL } from 'ngx-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AppsRoutingModule } from 'src/app/pages/apps/apps-routing.module';
import { primary } from 'src/app/pages/apps/email/data';
import { Email } from 'src/app/pages/apps/email/email.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationService } from '../notification.service';
import { result } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications-settings',
  standalone: true,
  imports: [CommonModule, ModalModule, NgSelectModule, TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule,

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
  templateUrl: './notifications-settings.component.html',
  styleUrl: './notifications-settings.component.scss'
})
export class NotificationsSettingsComponent {
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
  NotificationSettingsData: any;
  selectedItem: any;
  emailContent: any;
  Gupshups: any;
  GupshupsContent: any;
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
  sortedRoleList: any[] = []; // Array to hold sorted user list
  sortColumn: any = 'id'; // Default sort column
  sortOrder: string = 'asc';
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  gupshupId: any;
  getEmailData: any;
  activeTab: string = 'E-mail';
  emailTabClicked: boolean = false;
  sortedGupshupsList: any;
  sortedNotificationWhtsappList: any;
  sortedNotificationSmsList: any;
  ChitsbusinessCode="chits";
RealEstatebusinessCode="real-estate";
  constructor(private router: Router, private notificationService: NotificationService, private formbuilder: FormBuilder, private toastService: ToastrService,) {


  }

  @ViewChild('removeItemModal', { static: false }) removeItemModal?: ModalDirective;

  ngOnInit(): void {
   
    this.notificationService.getEmailNotificationSetting(this.ChitsbusinessCode).subscribe((data: any) => {
      this.getEmailData = data.data;
      console.log("this.getEmailData",this.getEmailData)
    })
    this. filterDataForTabs();
   
    // this.fetchNotificationData();

    this.editContentForm = this.formbuilder.group({

      id: '',
      name: ['', Validators.compose([Validators.required])],
      // subject: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      baseUrl: ['', Validators.compose([Validators.required])],
      from: ['', Validators.compose([Validators.required])],
      api: ['', Validators.compose([Validators.required])],
      apiKey: ['', Validators.compose([Validators.required])],
      appName: ['', Validators.compose([Validators.required])],
      noticationSettingType: ['', Validators.compose([Validators.required])],
      // templateType: ['', Validators.compose([Validators.required])],
      verticalId: ['', Validators.compose([Validators.required])],
      loginUserId: ['', Validators.compose([Validators.required])],

    });
    console.log('ngoninit called')

   

  }
  onTabSelect(event: any) {
    this.selectedTab = event.heading;
  }
  filterDataForTabs(): void {
    this.notificationService.getSmsNotificationSetting(this.ChitsbusinessCode).subscribe((data: any) => {;
      this.smsData= data.data;
      console.log('smsData', this.smsData);
      })

      this.notificationService.getWhatsappNotificationSetting(this.ChitsbusinessCode).subscribe((data:any)=>{
        this.sortedNotificationWhtsappList = data.data

      })
     
     

    
  }

  collapse(id: any) {
    document.querySelector('#' + id)?.classList.toggle('show')
  }





 
  singleData: any = [];
  

  getEmailIndiviualData(id: any) {
    this.selectedItem = this.emailData.find((item: any) => item.id === id);
    
    this.notificationService.getNotificationDataById(this.selectedItem.id).subscribe((data: any) => {
      this.emailDataById = data;
      this.emailContent = data.description;
      this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['name'].setValue(data.name);
      this.editContentForm.controls['description'].setValue(data.description);
      this.editContentForm.controls['userName'].setValue(data.userName);
      this.editContentForm.controls['noticationSettingType'].setValue(data.noticationSettingType);
      this.editContentForm.controls['password'].setValue(data.password);
      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
    });
    console.log("this.selectedItem", this.selectedItem);
  }
  openAddForm() {
    this.display1 = "block"
  }
  closeAddForm() {
    this.display1 = "none"
  }
  closeEditForm() {
    this.display2 = "none"
  }
  editForm(id: any) {

    this.router.navigate(['/chits/editnotification', id])
  }
  editWhatsappForm(id: any) {

  this.router.navigate(['/chits/editWhatsappnotification', id])
}
  AddNotificationsetting() {
    this.router.navigate(['/chits/createNotificationSettings'])
  }
  AddSMSNotificationsetting(){
    this.router.navigate(['/chits/smsNotification']) 
  }
  addEmilnotification() {
    this.router.navigate(['/chits/addEmailnotificationsettings'])
  }
  onClosed() {
    this.display3 = "none"
  }
  openDelete() {
    this.display3 = "block"
  }

  getWhatsappIndividualData(id: any) {
    
    this.notificationService.getNotificationsettingsById(this.gupshupId).subscribe((data: any) => {
      console.log("this.GupshupsContent", data.description)
      this.GupshupsContent = data;
      this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['name'].setValue(data.name);
    
      this.editContentForm.controls['description'].setValue(data.description);
      this.editContentForm.controls['baseUrl'].setValue(data.baseUrl);
      this.editContentForm.controls['api'].setValue(data.api);
      this.editContentForm.controls['apiKey'].setValue(data.apiKey);
      this.editContentForm.controls['appName'].setValue(data.appName);
      this.editContentForm.controls['from'].setValue(data.from);
      this.editContentForm.controls['noticationSettingType'].setValue(data.noticationSettingType);

      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
    });
    console.log("this.selectedItem", this.selectedItem);
  }


  getSmsIndividualData(id: any) {
    this.selectedItem = this.smsData.find((item: any) => item.id === id);
  
    this.notificationService.getNotificationsettingsById(this.selectedItem.id).subscribe((data: any) => {
      this.smsConent = data.description;
      this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['name'].setValue(data.name);
      
      this.editContentForm.controls['description'].setValue(data.description);
      this.editContentForm.controls['baseUrl'].setValue(data.baseUrl);
      this.editContentForm.controls['api'].setValue(data.api);
      this.editContentForm.controls['apiKey'].setValue(data.apiKey);
      this.editContentForm.controls['appName'].setValue(data.appName);
      this.editContentForm.controls['from'].setValue(data.from);
      this.editContentForm.controls['noticationSettingType'].setValue(data.noticationSettingType);
     
      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
    });
  }



  onSubmit() {
    console.log("this.editContentForm.value", this.editContentForm.value)
    this.notificationService.updateNotificationSettings(this.selectedItem.id, this.editContentForm.value).subscribe((data: any) => {
      console.log("content edited successfully", data,);
      this.showSuccess();

    });
    location.reload();
  }

  deleteForm(id: any) {
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
        this.notificationService.deleteWhatsappNotificationSettings(id).subscribe((data: any) => {
          console.log("delete notification setiings", data)
          if (data === true) {
            // Remove the deleted email from the displayed list
            this.Gupshups = this.Gupshups.filter((sms: any) => sms.id !== id);
            Swal.fire({
              title: 'Deleted!',
              text: 'Email Data has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });

          }
        }, error => {
          this.toastService.error('Something went wrong while deleting the email.');
        });
      }
    });

  }
  deleteSmslist(id: any) {
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
        this.notificationService.deleteSMsNotificationSettings(id).subscribe((data: any) => {
          console.log("delete notification setiings", data)
          if (data === true) {
            // Remove the deleted email from the displayed list
            this.smsData = this.smsData.filter((sms: any) => sms.id !== id);
            Swal.fire({
              title: 'Deleted!',
              text: 'Email Data has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });

          }
        }, error => {
          this.toastService.error('Something went wrong while deleting the email.');
        });
      }
    });
  }


  deleteEmailList(id: any) {
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
        this.notificationService.deleteEmailnotificationsetting(this.ChitsbusinessCode,id).subscribe((data: any) => {
          console.log("delete notification setiings", data)
          if (data === true) {
            // Remove the deleted email from the displayed list
            this.getEmailData = this.getEmailData.filter((sms: any) => sms.id !== id);
            Swal.fire({
              title: 'Deleted!',
              text: 'Email Data has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });

          }
        }, error => {
          this.toastService.error('Something went wrong while deleting the email.');
        });
      }
    });
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
            this.Gupshups = this.Gupshups.filter((wht: any) => wht.id !== id);
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
  updateSms(id: any) {
    this.router.navigate(['/chits/updateSmsnotificationsettings', id])
  }
  updateEmail(id: any) {
    this.router.navigate(['/chits/updateEmailnotificationsettins', id])
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
    this.getWhatsappIndividualData(this.Gupshups[index].id);
  }
  selectUserEmail(index: number) {
    this.selectedIndexEmail = index;

    this.getEmailIndiviualData(this.emailData[index].id);
  }
  selectUserSms(index: number) {
    this.selectedIndexSms = index;

    this.getSmsIndividualData(this.smsData[index].id);

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
    this.sortedNotificationWhtsappList.sort((a:any, b:any) => {
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

}
