/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MastersService } from '../../Services/masters.service';
import { ToastrService } from 'ngx-toastr';
import { Designation } from 'src/app/chits-class';


@Component({
  selector: 'app-updatedesignation',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule],
  templateUrl: './updatedesignation.component.html',
  styleUrl: './updatedesignation.component.scss'
})
export class UpdatedesignationComponent {
  public id: any;
  public updateDesignationForm: FormGroup;
  public DesignationDataById: any;
  public designationData: Designation[] = [];
  public selectedreports: any;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private msterService: MastersService, public toastService: ToastrService,
    private dialogRef: MatDialogRef<UpdatedesignationComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private activated: ActivatedRoute,) {
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
    this.msterService.getDesignationById(this.id).subscribe((data: any) => {
      this.DesignationDataById = data.data;
      this.selectedreports = this.DesignationDataById.reportingName;
      this.updateDesignationForm.controls['reportsTo'].setValue(this.DesignationDataById.reportsTo)
      console.log('this.selectedreports', this.selectedreports);
      console.log('DesignationDataById', this.DesignationDataById);

    });
    this.msterService.getDesignationListData().subscribe((data: any) => {
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
    this.toastService.error('Something is Wrong')
  }

  saveUpdateDesignationData() {
    this.submitted = true;
    this.msterService.editDesignationData(this.id, this.updateDesignationForm.value).subscribe(data => {
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
