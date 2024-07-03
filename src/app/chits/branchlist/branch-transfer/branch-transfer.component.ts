/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';

import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { CommonModule } from '@angular/common';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LeadService } from '../../Services/lead.service';
import { Router } from '@angular/router';
import { MastersService } from '../../Services/masters.service';
@Component({
  selector: 'app-branch-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './branch-transfer.component.html',
  styleUrl: './branch-transfer.component.scss'
})


export class BranchTransferComponent {
  Userlist1: any;
  employeeList: any;
  chitsLeadData: any;
  checkedValGet: any[] = [];

  breadCrumbItems!: Array<{}>;
  productForm!: UntypedFormGroup;
  submitted = false;
  products: any;
  masterSelected!: boolean;
  endItem: any
  // Table data
  allproducts: any;
  filteredProducts: any;
  leadTransferForm: any;
  branchListData: any;
  zoneListData: any;
  regionListData: any;
  ChitsbusinessCode="chits";
  constructor(private masterService: MastersService,private _router: Router,private userService: UserService, private leadService: LeadService, private formBuilder: UntypedFormBuilder, public store: Store,) {
   
  }
  ngOnInit() {
    this.masterService.getBranchListData().subscribe((data: any) => {
      this.branchListData = data;
   
    });
    this.masterService.getZoneListData().subscribe((data: any) => {
      this.zoneListData = data;
    });
    this.masterService.getRegionListData().subscribe((data: any) => {
      this.regionListData = data;
    })
    this.userService.getUserList().subscribe((data: any) => {
      console.log(data);
      this.Userlist1 = data;

      console.log(this.Userlist1.data);

      console.log(this.Userlist1.data);

      this.employeeList = this.Userlist1.data.filter((user: any) => {
        return user.roles.includes('Employee');

      });
      console.log('employeelist', this.employeeList);


    });
    this.leadService.getAllLeadsData().subscribe((data: any) => {
      this.chitsLeadData = data;
    });
    this.leadTransferForm = this.formBuilder.group({
      fromId: [''],
      toId: [''],
      leadId: 0,
      leadIds: [
        0
      ],
      transferDate: "2024-05-15T11:27:42.708Z"
    })
  }

  onCategoryChange(event: any) {

    const selectedCategoryId = event.target.value;

    this.filteredProducts = this.chitsLeadData.filter((item: any) => {
      return item.assignTo === selectedCategoryId;
    });
  
    console.log('Filtered products:', this.filteredProducts);
 }
  checkUncheckAll(ev: any) {
    this.filteredProducts = this.filteredProducts.map((x: { states: any }) => ({ ...x, states: ev.target.checked }));

    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.filteredProducts.length; i++) {
      if (this.filteredProducts[i].states == true) {
        result = this.filteredProducts[i].id;
        checkedVal.push(result);
        console.log('all checked', result);
      }
    }

    this.checkedValGet = checkedVal;
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.filteredProducts.length; i++) {
      if (this.filteredProducts[i].states == true) {
        result = this.filteredProducts[i].id;
        checkedVal.push(result);
        console.log('individual check', result);
      }
    }
    this.checkedValGet = checkedVal
    
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }


  // // Delete Product
  // removeItem(id: any) {
  //   this.deleteId = id
  //   this.deleteRecordModal?.show()
  // }



  saveLeadTransfer(){
    this.leadService.leadTransfer(this.leadTransferForm.value).subscribe((result:any)=>{
      console.log('result',result)
    })
  }
  close(){
    this._router.navigate(['/chits/branchlist'])
  }
  goToBranch(){
    this._router.navigate(['/chits/branchlist'])
  }
}
