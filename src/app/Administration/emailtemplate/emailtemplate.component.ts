/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
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

import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationService } from '../notification.service';

import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emailtemplate',
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

  templateUrl: './emailtemplate.component.html',
  styleUrl: './emailtemplate.component.scss'
})
export class EmailtemplateComponent {
  id: any;
  editor: any = Editor;
  emailData: any;
  emailIds: number[] = [];
  isShowMenu: boolean = true;
  emailDatas: any;
  dataCount: any;
  masterSelected!: boolean;

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
  constructor(private notificationService: NotificationService, private formbuilder: FormBuilder, private toastService: ToastrService,) {


  }

  @ViewChild('removeItemModal', { static: false }) removeItemModal?: ModalDirective;

  ngOnInit(): void {

    // this.notificationService.getNotification().subscribe((data: any) => {
    //   this.NotificationData = data;
    //   console.log('notificationData', this.NotificationData);
    // });
    this.fetchNotificationData();

    this.editContentForm = this.formbuilder.group({

      id: '',
      name: ['', Validators.compose([Validators.required])],
      subject: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
      notificationType: ['', Validators.compose([Validators.required])],
      templateType: ['', Validators.compose([Validators.required])],
      verticalId: ['', Validators.compose([Validators.required])],
      loginUserId: ['', Validators.compose([Validators.required])],

    });
    console.log('ngoninit called')

 

  }
  fetchNotificationData(): void {
    this.notificationService.getNotification().subscribe(
      (data: any) => {
        this.NotificationData = data.data; // Assign fetched data to NotificationData
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
      this.emailDataById = data.data;
      this.emailContent = this.emailDataById.content;
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
      this.whatsappConent = data.data.content;
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
      this.smsConent = data.data.content;
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

    },error=>{
      this.showError();
    });
    // location.reload();
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
  showError(){
    this.toastService.error('Something Went Wrong'); 
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
}


