/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from 'ngx-editor';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';
import { LeadService } from 'src/app/lead.service';
@Component({
  selector: 'app-update-email-notificationsettings',
  standalone: true,
  imports: [CommonModule , FormsModule, ReactiveFormsModule],
  templateUrl: './update-email-notificationsettings.component.html',
  styleUrl: './update-email-notificationsettings.component.scss'
})
export class UpdateEmailNotificationsettingsComponent {
  editContentForm:any;
  GupshupsContent: any;
  id: any;
  updateUserForm: any;
  ChitsbusinessCode="chits";
  data: any;
  verticalData1: any;
  lookupConstants: any;
  constructor(private leadService:LeadService,private router: Router,private formbuilder: FormBuilder,public toastService: ToastrService,private notificationService: NotificationService, private activated: ActivatedRoute, ){
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('editnotification id', this.id);

    });
    
    this.editContentForm = this.formbuilder.group({

     
      id: this.id,
      displayName: [''],
      fromEmailId: [''],
      host: [''],
      port: [''],
      userName: [''],
      password: [''],
      authenticate: true,
      enableSSL: true,
      // verticalId: 1,
      businessCode: '',
      isActive:[true],
      lastUpdatedBy: [''],
      lastUpdatedOn:[''],
    });
  }
  ngOnInit(): void {
    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

      // Filter data based on lookupCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.lookupCode === "BusinessVertical");

     

      // Access lookupConstants array from verticalData
      if (this.verticalData1.length > 0) {
        this.lookupConstants = this.verticalData1[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);
        // Now you can use lookupConstants array as needed
      }
    })
   this. getWhatsappIndividualData();
  }
  getWhatsappIndividualData() {
  
    this.notificationService.getByIdEmailNotificationSettings(this.ChitsbusinessCode,this.id).subscribe((data: any) => {
      console.log("this.GupshupsContent", data.data)
      this.GupshupsContent = data.data;
      this.editContentForm.controls['businessCode'].setValue(data.businessCode);
     this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['fromEmailId'].setValue(data.fromEmailId);
      this.editContentForm.controls['host'].setValue(data.host);
      this.editContentForm.controls['port'].setValue(data.port);
      this.editContentForm.controls['userName'].setValue(data.userName);
      this.editContentForm.controls['password'].setValue(data.password);
      this.editContentForm.controls['displayName'].setValue(data.displayName);
      this.editContentForm.controls['authenticate'].setValue(data.authenticate);
      this.editContentForm.controls['enableSSL'].setValue(data.enableSSL);
      this.editContentForm.controls['isActive'].setValue(data.isActive);
     
      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
      this.editContentForm.controls['lastUpdatedBy'].setValue(data.lastUpdatedBy);
      this.editContentForm.controls['lastUpdatedOn'].setValue(data.lastUpdatedOn);
    });
    // console.log("this.selectedItem", this.selectedItem);
  }
  onSubmit() {
    const formValue = this.editContentForm.value;
    // formValue.id = formValue.id ? Number(formValue.id) : null;
    formValue.port = formValue.port ? Number(formValue.port) : null;
    console.log("this.editContentForm.value",this.editContentForm.value)
    this.notificationService.updateEmailNotificationsettings(this.ChitsbusinessCode,this.id, this.editContentForm.value).subscribe((data: any) => {
      console.log("content edited successfully", data,);
      this.router.navigate(['/chits/Notification-Settings'])
      this.showSuccess();
      
    });
 
    
  }
  goBack(){
    this.router.navigate(['/chits/Notification-Settings']) 
  }
  showSuccess() {
    this.toastService.success(' Successfully Updated');
  }
}
