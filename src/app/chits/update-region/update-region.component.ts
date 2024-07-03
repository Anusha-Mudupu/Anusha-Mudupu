/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MastersService } from '../Services/masters.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Region } from 'src/app/chits-class';
import { Zone } from 'src/app/chits-class';

@Component({
  selector: 'app-update-region',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  
  templateUrl: './update-region.component.html',
  styleUrl: './update-region.component.scss'
})
export class UpdateRegionComponent {
  id!: number;
  updateRegionForm: FormGroup;
  regionDataById!: Region;
  zoneListData: Zone[]=[];
  submitted: boolean = false;
  ChitsbusinessCode="chits";

  constructor(private FormBuilder: FormBuilder, private router: Router, private msterService: MastersService, public toastService: ToastrService,
    private dialogRef: MatDialogRef<UpdateRegionComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private activated: ActivatedRoute,) {
    this.id = data.id;
    console.log('iddddddd', this.id);



    this.updateRegionForm = this.FormBuilder.group({
      id: '',
      name: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],

      zone: ['', Validators.compose([Validators.required])],

      loginUserId: ''
    })
  }
  ngOnInit() {
    this.msterService.getRegionDataById(this.id).subscribe((data: any) => {
      this.regionDataById = data;
      console.log('regionDataById', this.regionDataById);
      this.updateRegionForm.controls['zone'].setValue(data.zone)
    });
    this.msterService.getZoneListData().subscribe((data: any) => {
      this.zoneListData = data;
      console.log("this.zoneListData", this.zoneListData);
    })
  }
  closeDialog(): void {

    this.dialogRef.close();
  }
  showSuccess() {
    this.toastService.success('Updated Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }

  saveUpdateRegionData() {
    this.submitted = true;
    if (this.updateRegionForm.invalid || this.isFormEmpty(this.updateRegionForm.value)) {
      this.showError();
      return;
    }
    this.msterService.updateRegionData(this.id, this.updateRegionForm.value).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
      this.showSuccess();
      setTimeout(() => {

      }, 2000)
    }, error => {
      this.showError();
    });
  }
  isFormEmpty(formValue: any): boolean {
    
    for (const controlName in formValue) {
      if (formValue.hasOwnProperty(controlName) && formValue[controlName]) {
        return false; 
      }
    }
    return true; 
  }
}


