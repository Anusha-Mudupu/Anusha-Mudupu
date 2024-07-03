/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MastersService } from '../../Services/masters.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Zone } from 'src/app/chits-class';

@Component({
  selector: 'app-zoneupdate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './zoneupdate.component.html',
  styleUrl: './zoneupdate.component.scss'
})
export class ZoneupdateComponent implements OnInit {
  public id: any;
  public ZoneById: any = Zone;
  public zoneEditForm: FormGroup;
  public submitted: boolean = false;
  ChitsbusinessCode="chits";

  constructor(private masterService: MastersService,
    private fb: FormBuilder, private dialogRef: MatDialogRef<ZoneupdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public toastService: ToastrService, private activated: ActivatedRoute, private router: Router) {
    this.id = data.id;
    console.log('iddddddd', this.id);
    this.zoneEditForm = this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
      loginUserId: ''
    })
    // this.activated.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   console.log('Zone id', this.id);

    // });
  }
  ngOnInit(): void {
    this.masterService.getZoneById(this.id).subscribe((data) => {
      console.log("get Zone By Id", data);
      this.ZoneById = data
    })
  }
  onCloseHandled() {
    this.router.navigate(['chits/zonelist']);
  }
  closeDialog(): void {

    this.dialogRef.close();
  }
  user() {
    this.router.navigate(['chits/zonelist']);
  }
  onSubmit() {

    this.submitted = true;
    if (this.zoneEditForm.invalid || this.isFormEmpty(this.zoneEditForm.value)) {
      this.showError();
      return;
    }
    console.log("data")

    this.masterService.editZoneListData(this.id, this.zoneEditForm.value).subscribe((res: any) => {
      console.log('submitted form', this.zoneEditForm.value);

      this.showSuccess()
      //  this.router.navigate(['chits/zonelist']);
      this.dialogRef.close();

    },
      errorMsg => {

        this.showError()
      }
    );

    // }

  }
  showSuccess() {
    this.toastService.success('Updated Zone Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
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
