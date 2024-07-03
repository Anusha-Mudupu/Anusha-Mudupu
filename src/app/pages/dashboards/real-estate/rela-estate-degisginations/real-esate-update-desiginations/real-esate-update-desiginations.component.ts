/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Designation } from 'src/app/chits-class';
import { MastersService } from 'src/app/chits/Services/masters.service';


@Component({
  selector: 'app-real-esate-update-desiginations',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './real-esate-update-desiginations.component.html',
  styleUrl: './real-esate-update-desiginations.component.scss'
})
export class RealEsateUpdateDesiginationsComponent implements OnInit {
  public id: any;
  public updateDesignationForm: FormGroup;
  public DesignationDataById: any;

  public designationData: Designation[] = [];
  public selectedreports: any;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private msterService: MastersService, public toastService: ToastrService,
    private dialogRef: MatDialogRef<RealEsateUpdateDesiginationsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private activated: ActivatedRoute,) {
    this.id = data.id;
    console.log('iddddddd', this.id);



    this.updateDesignationForm = this.fb.group({
      id: '',
      name: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
      reportsTo: ['', Validators.compose([Validators.required])],
      reportingName: ['', Validators.compose([Validators.required])]
    })
  }
  ngOnInit() {
    this.msterService.getRealEstateDesignationById(this.id).subscribe((data: any) => {
      this.DesignationDataById = data.data;
      this.selectedreports = this.DesignationDataById.reportingName;
      this.updateDesignationForm.controls['reportsTo'].setValue(this.DesignationDataById.reportsTo)
      console.log('this.selectedreports', this.selectedreports);
      console.log('DesignationDataById', this.DesignationDataById);

    });
    this.msterService.getRealEstateDesignationListData().subscribe((data: any) => {
      this.designationData = data.data;
    })
  }
  closeDialog(): void {

    this.dialogRef.close();
  }
  showSuccess() {
    this.toastService.success('Updated Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong');
  }

  saveUpdateDesignationData() {
    this.submitted = true;
    // if (this.updateDesignationForm.invalid || this.isFormEmpty(this.updateDesignationForm.value)) {
    //   this. showError();
    //   return;
    // }
    this.msterService.editRealestaeDesignationData(this.id, this.updateDesignationForm.value).subscribe(data => {
      console.log("saveUpdateDesignationData", data);
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
