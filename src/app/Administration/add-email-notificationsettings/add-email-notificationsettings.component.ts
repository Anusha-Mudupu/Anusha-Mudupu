/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from 'ngx-editor';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service';
import { LeadService } from 'src/app/lead.service';
@Component({
  selector: 'app-add-email-notificationsettings',
  standalone: true,
  imports: [CommonModule ,FormsModule, ReactiveFormsModule],
  templateUrl: './add-email-notificationsettings.component.html',
  styleUrl: './add-email-notificationsettings.component.scss'
})
export class AddEmailNotificationsettingsComponent implements OnInit{
  createNotificationForm:any;
  GupshupsContent: any;
  id: any;
  updateUserForm: any;
  ChitsbusinessCode="chits";
  data: any;
  verticalData1: any;
  lookupConstants: any;
  constructor(private leadService: LeadService,private router: Router,private formbuilder: FormBuilder,public toastService: ToastrService,private notificationService: NotificationService, private activated: ActivatedRoute, ){
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('editnotification id', this.id);

    });
    
    this.createNotificationForm = this.formbuilder.group({

      id: '',
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
  }

  onSubmit() {
 
    const formValue = this.createNotificationForm.value;
    formValue.id = formValue.id ? Number(formValue.id) : null;
    formValue.port = formValue.port ? Number(formValue.port) : null;
    // formValue.verticalId = formValue.verticalId ? Number(formValue.verticalId) : null;

    // formValue.authenticate = !!formValue.authenticate;
    // formValue.enableSSL = !!formValue.enableSSL;
    // formValue.isActive = !!formValue.isActive;
    // console.log("this.createNotificationForm.value", formValue);
    console.log("this.createNotificationForm.value",this.createNotificationForm.value)
    this.notificationService.createEmailnotificationsettings(this.ChitsbusinessCode,this.createNotificationForm.value).subscribe((data: any) => {
      console.log("this.GupshupsContent", data)
      this.GupshupsContent = data;
      this.router.navigate(['/chits/Notification-Settings'])
      this.showSuccess();
      
    });
 
    
  }
  goBack(){
    this.router.navigate(['/chits/Notification-Settings']) 
  }
  showSuccess() {
    this.toastService.success(' Successfully created');
  }
}
