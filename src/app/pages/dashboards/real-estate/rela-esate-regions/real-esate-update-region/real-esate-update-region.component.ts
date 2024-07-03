/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Region } from 'src/app/chits-class';
import { Zone } from 'src/app/chits-class';
import { MastersService } from 'src/app/chits/Services/masters.service';
@Component({
  selector: 'app-real-esate-update-region',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './real-esate-update-region.component.html',
  styleUrl: './real-esate-update-region.component.scss'
})
export class RealEsateUpdateRegionComponent {
  id!: number;
  updateRegionForm: FormGroup;
  regionDataById!: Region;
  zoneListData: Zone[] = [];
  submitted: boolean = false;
  RealEstatebusinessCode = "real-estate";
  constructor(private FormBuilder: FormBuilder, private router: Router, private msterService: MastersService, public toastService: ToastrService,
    private dialogRef: MatDialogRef<RealEsateUpdateRegionComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private activated: ActivatedRoute,) {
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
    this.msterService.getRealestateRegionDataById(this.id).subscribe((data: any) => {
      this.regionDataById = data.data;
      console.log('regionDataById', this.regionDataById);
      this.updateRegionForm.controls['zone'].setValue(data.zone)
    });
    this.msterService.getrealZoneListData().subscribe((data: any) => {
      this.zoneListData = data.data;
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
    this.msterService.updaterealestateRegionData(this.id, this.updateRegionForm.value).subscribe(data => {
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
