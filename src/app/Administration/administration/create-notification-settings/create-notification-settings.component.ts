/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Validators } from 'ngx-editor';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NotificationService } from '../../notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-notification-settings',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './create-notification-settings.component.html',
  styleUrl: './create-notification-settings.component.scss'
})
export class CreateNotificationSettingsComponent {
  createNotificationForm:any;
  GupshupsContent: any;
  id: any;
  updateUserForm: any;
  constructor(private router: Router,private formbuilder: FormBuilder,public toastService: ToastrService,private notificationService: NotificationService, private activated: ActivatedRoute, ){
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('editnotification id', this.id);

    });
    
    this.createNotificationForm = this.formbuilder.group({

      id: [],
    
      name: [''],
      method:[''],
      userName:[''],
      // subject: ['', Validators.compose([Validators.required])],
      description: [''],
      baseUrl: [''],
      from: [''],
      api: [''],
      apiKey: [''],
      appName: [''],
      noticationSettingType:[] ,
      // templateType: ['', Validators.compose([Validators.required])],
      verticalId: [],
      loginUserId: [],
      password:[],
      active: [false]
    });
  }
  ngOnInit(): void {
   
  }

  onSubmit() {
 
    const formValue = this.createNotificationForm.value;
    formValue.id = formValue.id ? Number(formValue.id) : null;
    formValue.verticalId = formValue.verticalId ? Number(formValue.verticalId) : null;
    formValue.noticationSettingType = formValue.noticationSettingType ? Number(formValue.noticationSettingType) : null;
    formValue.active = !!formValue.active;
    console.log("this.createNotificationForm.value", formValue);
    console.log("this.createNotificationForm.value",this.createNotificationForm.value)
    this.notificationService.createWhatsappNotificationsSettings(this.createNotificationForm.value).subscribe((data: any) => {
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
