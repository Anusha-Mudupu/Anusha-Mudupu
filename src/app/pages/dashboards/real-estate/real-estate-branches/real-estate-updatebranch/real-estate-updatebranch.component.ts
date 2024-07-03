/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Branch, Region, Zone } from 'src/app/chits-class';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/chits/Services/masters.service';
@Component({
  selector: 'app-real-estate-updatebranch',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './real-estate-updatebranch.component.html',
  styleUrl: './real-estate-updatebranch.component.scss'
})
export class RealEstateUpdatebranchComponent {
  public id:any;
  public branchDataById!:Branch;
  public updateBranchForm:FormGroup;
  public zoneListData: Zone[]=[];
  public regionListData: Region[]=[];
  RealEstatebusinessCode="real-estate";
   constructor(private FormBuilder: FormBuilder, private router: Router,  private msterService: MastersService,public toastService: ToastrService,
     private dialogRef: MatDialogRef< RealEstateUpdatebranchComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private activated: ActivatedRoute,) {
     this.id = data.id;
     console.log('iddddddd', this.id);
   
 
     
    this.updateBranchForm = this.FormBuilder.group({
      id:'',
     name: ['', Validators.compose([Validators.required])],
     code: ['', Validators.compose([Validators.required])],
     status: ['', Validators.compose([Validators.required])],
     zone: ['', Validators.compose([Validators.required])],
     region: ['', Validators.compose([Validators.required])],
     loginUserId: ''
   });
   this.updateBranchForm.get('zone')?.valueChanges.subscribe((value: any) => {
     if (value && typeof value === 'string') {
       const numberValue = parseInt(value, 10);
       if (!isNaN(numberValue)) {
         this.updateBranchForm.get('zone')?.patchValue(numberValue, { emitEvent: false });
       }
     }
   });
   this.updateBranchForm.get('region')?.valueChanges.subscribe((value: any) => {
     if (value && typeof value === 'string') {
       const numberValue = parseInt(value, 10);
       if (!isNaN(numberValue)) {
         this.updateBranchForm.get('region')?.patchValue(numberValue, { emitEvent: false });
       }
     }
   });
 }
   ngOnInit(){
     this.msterService.getRealestateBranchById(this.id).subscribe((data:any)=>{
       this.branchDataById=data.data;
       this.updateBranchForm.controls['zone'].setValue(data.zone);
       this.updateBranchForm.controls['region'].setValue(data.region);
       console.log('branchDataById', this.branchDataById);
    });
    this.msterService.getrealZoneListData().subscribe((data:any)=>{
     this.zoneListData = data.data;
   });
   this.msterService.getRealestateRegionListData().subscribe((data:any)=>{
     this.regionListData=data.data;
   })
   }
   saveUpdateBranchData() {
 
     this.msterService.updateRealestaeBranchById(this.id, this.updateBranchForm.value).subscribe(data => {
       console.log(data);
       this.dialogRef.close();
       this.showSuccess();
       setTimeout(() => {
      
       },2000)
     }, error => {
        this.showError();
     });
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
}
