/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// import { UserService } from 'src/app/user.service';

import { Branch, Region } from 'src/app/chits-class';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UpdateBranchComponent } from 'src/app/chits/update-branch/update-branch.component';
import { RealEstateUpdatebranchComponent } from './real-estate-updatebranch/real-estate-updatebranch.component';

@Component({
  selector: 'app-real-estate-branches',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, MatSnackBarModule,NgxPaginationModule, PaginationModule],
  templateUrl: './real-estate-branches.component.html',
  styleUrl: './real-estate-branches.component.scss'
})
export class RealEstateBranchesComponent implements OnInit {
  [x: string]: any;
  public branchListData: Branch[] = [];
  public  BranchForm:any;
  public submitted: boolean = false;
  public message: string='';
  public selectedItem: any;
  public selectedId: any;
  public zoneListData:any;
  public  regionListData: Region[] = [];
  branchData:Branch[] = [];
  sortedBranchList: any[] = []; // Array to hold sorted user list
   sortColumn: string = 'name'; // Default sort column
   sortOrder: string = 'asc';  // Default sort order
   searchTermName:any;
   searchTermcode:any;
   searchTermRegion:any;
   RealEstatebusinessCode="real-estate";
   constructor(private _router: Router,private masterService: MastersService, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar, private dialog: MatDialog, public toastService: ToastrService,) {
 
     this.BranchForm = this.FormBuilder.group({
 
       name: ['', Validators.compose([Validators.required])],
       code: ['', Validators.compose([Validators.required])],
       status: ['', Validators.compose([Validators.required])],
       zone: ['', Validators.compose([Validators.required])],
       region: ['', Validators.compose([Validators.required])],
       loginUserId: ''
     });
 
     
     this.BranchForm.get('zone')?.valueChanges.subscribe((value: any) => {
       if (value && typeof value === 'string') {
         const numberValue = parseInt(value, 10);
         if (!isNaN(numberValue)) {
           this.BranchForm.get('zone')?.patchValue(numberValue, { emitEvent: false });
         }
       }
     });
     this.BranchForm.get('region')?.valueChanges.subscribe((value: any) => {
       if (value && typeof value === 'string') {
         const numberValue = parseInt(value, 10);
         if (!isNaN(numberValue)) {
           this.BranchForm.get('region')?.patchValue(numberValue, { emitEvent: false });
         }
       }
     });
 
 
   }
   display = "none";
 
   display1 = "none";
   display2 = "none";
   searchText: any = "";
   // BranchList:any=[
   //   {
   //   "Zone":'Hyderabad',
   //   "Region":'Hyderabad',
   //   "Name":'9THBLOCKJAYANAGAR',
   //   "Code":'9thblockjayanagar',
   //   "Status":'Active'
   // },
   // {
   //   "Zone":'Karnataka',
   //   "Region":'Karnataka',
   //   "Name":'8THBLOCKJAYANAGAR',
   //   "Code":'8thblockjayanagar',
   //   "Status":'Active'
   // }
   // ]
   ngOnInit(): void {
     this.masterService.getrealEstateBranchListData().subscribe((data: any) => {
       this.branchListData = data.data;
       this.sortedBranchList = this.branchListData.slice(); 
       console.log("this.sortedUserList",this.sortedBranchList)
       this.updatePageData(1);
     });
     this.masterService.getrealZoneListData().subscribe((data: any) => {
       this.zoneListData = data.data;
     });
     this.masterService.getRealestateRegionListData().subscribe((data: any) => {
       this.regionListData = data.data;
     })
   }
   clearAllSearchFields() {
    this.searchTermName = '';
    this.searchTermcode = '';
    this.searchTermRegion = '';
    this.filterLeads();  
  }
   filterLeads() {
     if (this.branchListData) {
       this.branchData = this.branchListData.filter((lead: any) =>
         this.filterByName(lead)&&
         this.filterByRegion(lead)&&
         this.filterByCode(lead)
 
 
 
 
       );
 
     }
     this.sortedBranchList = this.branchListData.slice();
 
     this.sortUserList()
   }
 
   filterByName(lead: any): boolean {
     if (!this.searchTermName) {
       return true; // No name search term, pass all leads
     }
     return lead && lead.name && lead.name.toLowerCase().includes(this.searchTermName.toLowerCase());
   }
   filterByCode(lead: any): boolean {
     if (!this.searchTermcode) {
       return true; // No name search term, pass all leads
     }
     return lead && lead.regionName && lead.regionName.toLowerCase().includes(this.searchTermcode.toLowerCase());
   }
   filterByRegion(lead: any): boolean {
     if (!this.searchTermRegion) {
       return true; // No name search term, pass all leads
     }
     return lead && lead.zoneName && lead.zoneName.toLowerCase().includes(this.searchTermRegion.toLowerCase());
   }
   openModal() {
     this.display = "block";
   }
   onCloseHandled() {
     this.display = "none";
   }
   EditModal() {
     this.display1 = "block";
   }
   onCloseHandled1() {
     this.display1 = "none";
   }
   onClosed() {
     this.display2 = "none";
   }
   openDelete() {
     this.display2 = "block";
   }
 
   openDialog(id: any) {
 
     const dialogRef = this.dialog.open(RealEstateUpdatebranchComponent , { height: 'auto', width: '600px', data: { id: id } })
       .afterClosed().subscribe((result: any) => { this.ngOnInit() });
   }
 
 
 
 
 
   onSubmit() {
     this.submitted = true;
     if (this.BranchForm.invalid || this.isFormEmpty(this.BranchForm.value)) {
       this.showError();
       return;
     }
     this.masterService.createRealestateBranch(this.BranchForm.value).subscribe((data: any) => {
       console.log(data);
 
       this.showSuccess();
       this.display = "none";
       setTimeout(() => {
         this.display = "none";
       }, 2000)
 
       this.ngOnInit();
     },
       error => {
         this.showError();
       })
   }
   isFormEmpty(formValue: any): boolean {
 
     for (const controlName in formValue) {
       if (formValue.hasOwnProperty(controlName) && formValue[controlName]) {
         return false;
       }
     }
     return true;
   }
   // action: string | undefined
   // openupdateSnackBar() {
 
   //   this.message = "Lead Data Submitted Successfully";
 
 
   //   // this._snackBar.open(this.message, this.action);
   //   this._snackBar.open(this.message, this.action, {
   //     // duration: 5000,
   //   //  horizontalPosition: "center",
   //   // verticalPosition: "top",
   //   panelClass: ['your-custom-class'], // Add a custom class for styling
 
   //   });
   // }
   showSuccess() {
     this.toastService.success(' Branch Created Successfully');
   }
   showError() {
     this.toastService.error('Something is Wrong')
   }
 
 
   handleItemClick(id: number) {
     this.selectedItem = this.branchListData.find((item: any) => item.id === id);
     console.log('item clicked', this.selectedItem);
     this.selectedId = this.selectedItem.id
     console.log('selected id', this.selectedId)
 
   }
   deleteBranch() {
     this.masterService.deleteRealestateBranchById(this.selectedId).subscribe((data: any) => {
       console.log('branch deleted');
       this.ngOnInit();
     })
   }
 
   sortState = { columnIndex: -1, ascending: true };
   sortTable(column: any) {
     if (this.sortColumn === column) {
         // If same column is clicked again, toggle sort order
         this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
     } else {
         // If different column is clicked, set new sort column and reset sort order to ascending
         this.sortColumn = column;
         this.sortOrder = 'asc';
     }
     this.sortUserList();
 }
 
 sortUserList() {
     this.sortedBranchList.sort((a, b) => {
         let aValue = a[this.sortColumn];
         let bValue = b[this.sortColumn];
         if (typeof aValue === 'string' && typeof bValue === 'string') {
             // Case-insensitive sorting for string values
             aValue = aValue.toLowerCase();
             bValue = bValue.toLowerCase();
         }
         if (this.sortOrder === 'asc') {
             return aValue > bValue ? 1 : -1;
         } else {
             return aValue < bValue ? 1 : -1;
         }
     });
 }
 tablepageChanged(event: PageChangedEvent): void {
   this.updatePageData(event.page);
 }
 
 updatePageData(page: number): void {
   const pageSize = 15; // Number of rows to display per page
   const startItem = (page - 1) * pageSize;
   const endItem = startItem + pageSize;
   this.branchData = this.branchListData.slice(startItem, endItem);
   this.sortedBranchList = this.branchData.slice();
   this.sortUserList()
 }
 
 branchTransfer(){
   this._router.navigate(['/real-estate/real-esate-BranchTransfer'])
 }
 }
 
