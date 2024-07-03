/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Designation } from 'src/app/chits-class';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MastersService } from '../Services/masters.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { UpdatedesignationComponent } from './updatedesignation/updatedesignation.component';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-designationlist',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, PaginationModule],
  templateUrl: './designationlist.component.html',
  styleUrl: './designationlist.component.scss'
})
export class DesignationlistComponent implements OnInit {
  public designationForm: any;
  designationListData: any;
  public submitted: boolean = false;
  page: number = 1;
  count: number = 0;
  tableSize = 10;
  tableSizes: any = [5, 10, 15, 20];
  sorteddesiginationList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'name'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  searchTermDesignation: any;
  searchTermReportsTo: any;
  constructor(private dialog: MatDialog, private masterService: MastersService, private fb: FormBuilder, public toastService: ToastrService,) {
    this.designationForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
      reportsTo: ['', Validators.compose([Validators.required])],
      reportingName: ['', Validators.compose([Validators.required])],
      loginUserId: ['', Validators.compose([Validators.required])]
    })
  }
  public searchText: string = "";
  public designationData: Designation[] = [];
  public display = "none";
  public display1 = "none";
  public display2 = "none";
  public selectedId!: number;
  ngOnInit(): void {
    this.masterService.getDesignationListData().subscribe((data: any) => {
      this.designationListData = data.data;
      this.sorteddesiginationList = this.designationListData.slice();
      this.updatePageData(1);
      console.log("designation", data)
    })
  }
  filterData() {
    this.designationData = this.designationListData.filter((data: any) =>
      this.filterByName(data) &&
      this.filterByReportsTo(data)
    );
    this.sorteddesiginationList = this.designationData.slice();
    this.sortUserList()
  }
  clearAllSearchFields() {
    this.searchTermDesignation = '';
    this.searchTermReportsTo = '';
    this.filterData();
  }
  filterByName(data: any): boolean {
    if (!this.searchTermDesignation) {
      return true; // No name search term, pass all leads
    }
    return data && data.name && data.name.toLowerCase().includes(this.searchTermDesignation.toLowerCase());
  }
  filterByReportsTo(data: any): boolean {
    if (!this.searchTermReportsTo) {
      return true; // No name search term, pass all leads
    }
    return data && data.reportingName && data.reportingName.toLowerCase().includes(this.searchTermReportsTo.toLowerCase());
  }

  openDelete(id: any) {
    this.selectedId = id;
    this.display2 = "block";

  }
  deleteDesignation() {
    this.masterService.deleteDesignationData(this.selectedId).subscribe((data) => {
      console.log(data);
      this.display2 = "none";
      this.ngOnInit();
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.designationForm.invalid || this.isFormEmpty(this.designationForm.value)) {
      this.showError();
      return;
    }
    this.masterService.createDesignationList(this.designationForm.value).subscribe((data: any) => {
      console.log("createDesignationList", data);
      this.display = "none";
      this.showSuccess();
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
  showError() {
    this.toastService.error('Something is Wrong')
  }
  showSuccess() {
    this.toastService.success(' Designation Created Successfully');
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  onClosed() {
    this.display2 = "none";
  }
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
    this.sorteddesiginationList.sort((a, b) => {
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
  EditModal(id: any) {
    const dialogRef = this.dialog.open(UpdatedesignationComponent, { height: 'auto', width: '400px', data: { id: id } })
      .afterClosed().subscribe((result: any) => { this.ngOnInit() });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.designationData
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.designationData
  }

  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    const pageSize = 15; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.designationData = this.designationListData.slice(startItem, endItem);
    this.sorteddesiginationList = this.designationData.slice();
    this.sortUserList()
  }


}
