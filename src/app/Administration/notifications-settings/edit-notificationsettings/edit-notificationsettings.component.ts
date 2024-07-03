/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Validators } from 'ngx-editor';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NotificationService } from '../../notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-notificationsettings',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-notificationsettings.component.html',
  styleUrl: './edit-notificationsettings.component.scss'
})
export class EditNotificationsettingsComponent implements OnInit{
  editContentForm:any;
  GupshupsContent: any;
  id: any;
  updateUserForm: any;
  constructor(private router: Router,private formbuilder: FormBuilder,public toastService: ToastrService,private notificationService: NotificationService, private activated: ActivatedRoute, ){
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('editnotification id', this.id);

    });
    
    this.editContentForm = this.formbuilder.group({

      id: '',
      name: [''],
      // subject: ['', Validators.compose([Validators.required])],
      description: [''],
      baseUrl: [''],
      from: [''],
      api: [''],
      apiKey: [''],
      appName: [''],
      noticationSettingType: [''],
      // templateType: ['', Validators.compose([Validators.required])],
      verticalId: [''],
      loginUserId: [''],

    });
  }
  ngOnInit(): void {
   this. getWhatsappIndividualData();
  }
  getWhatsappIndividualData() {
    // this.selectedItem = this.Gupshups.find((item: any) => item.id === id);
    // this.GupshupsContent=this.selectedItem.content
    this.notificationService.getNotificationsettingsById(this.id).subscribe((data: any) => {
      console.log("this.GupshupsContent", data.data)
      this.GupshupsContent = data.data;
      this.editContentForm.controls['id'].setValue(data.id);
      this.editContentForm.controls['name'].setValue(data.name);
      // this.editContentForm.controls['subject'].setValue(data.subject);
      this.editContentForm.controls['description'].setValue(data.description);
      this.editContentForm.controls['baseUrl'].setValue(data.baseUrl);
      this.editContentForm.controls['api'].setValue(data.api);
      this.editContentForm.controls['apiKey'].setValue(data.apiKey);
      this.editContentForm.controls['appName'].setValue(data.appName);
      this.editContentForm.controls['from'].setValue(data.from);
      this.editContentForm.controls['noticationSettingType'].setValue(data.noticationSettingType);
      // this.editContentForm.controls['templateType'].setValue(data.templateType);
      this.editContentForm.controls['verticalId'].setValue(data.verticalId);
      this.editContentForm.controls['loginUserId'].setValue(data.loginUserId);
    });
    // console.log("this.selectedItem", this.selectedItem);
  }
  onSubmit() {
    console.log("this.editContentForm.value",this.editContentForm.value)
    this.notificationService.updatewhatsappNotificationSettings(this.id, this.editContentForm.value).subscribe((data: any) => {
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
