/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Zone } from 'src/app/chits-class';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MastersService } from '../Services/masters.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ZoneupdateComponent } from './zoneupdate/zoneupdate.component';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-zonelist',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, MatDialogModule, NgxPaginationModule, PaginationModule],
  templateUrl: './zonelist.component.html',
  styleUrl: './zonelist.component.scss'
})
export class ZonelistComponent implements OnInit {
  public selectedId!: number;
  public zoneForm: any;
  public submitted: boolean = false;
  public id: any;
  public ZoneById: any;
  public zoneEditForm: FormGroup;
  zoneData: any;
  sortedZoneList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'name'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order

  searchTermZone: any;
  searchTermCode: any;
  searchTermDate: any;
  searchTermPanNo: any;
  constructor(private masterService: MastersService,
    private FormBuilder: FormBuilder, private dialog: MatDialog, public toastService: ToastrService, private activated: ActivatedRoute, private router: Router) {
    this.zoneForm = this.FormBuilder.group({

      // name: ['', Validators.compose([Validators.required])],
      // code: ['', Validators.compose([Validators.required])],
      // loginUserId: '',
      vchzoneid: 0,
      vchzonename: '',
      vchinchargename: '',
      vchloginid: '',
      // datlogindate: "2024-06-21T06:37:58.102Z",
      vchpanno: ''
    });
    this.zoneEditForm = this.FormBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
      loginUserId: ''
    })
  }
  public zoneListData: Zone[] = [];
  public display = "none";
  public display1 = "none";
  public display2 = "none";

  public searchText: any = "";
  ChitsbusinessCode="chits";
  ngOnInit(): void {
    this.masterService.getZoneListData().subscribe((data: any) => {
      this.zoneListData = data.data;
      this.sortedZoneList = this.zoneListData.slice();
      console.log("this.sortedUserList", this.sortedZoneList)
      this.updatePageData(1);
    })

  }
  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }
  EditModal(id: number) {
    console.log("get Zone By Id", id);
    const dialogRef = this.dialog.open(ZoneupdateComponent, { height: '300px', width: '400px', data: { id: id } })
      .afterClosed().subscribe((result: any) => { this.ngOnInit() });

    // this.router.navigate(['/chits/zoneupdate' , id])
    // this.masterService.getZoneById(id).subscribe((data)=>{
    //   console.log("get Zone By Id",data);
    //   this.ZoneById = data
    // })
    // this.display1 = "block";
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  onClosed() {
    this.display2 = "none";
  }
  openDelete(id: any) {
    this.selectedId = id

    this.display2 = "block";

  }
  deleteZone() {
    this.masterService.deleteZoneListData(this.selectedId).subscribe((data) => {
      console.log(data);
      this.display2 = "none";
      this.ngOnInit();
    })
  }

  filterData() {

    this.zoneData = this.zoneListData.filter((data: any) =>
      this.filterByName(data) &&
      this.filterByIncharge(data)

    );
    this.sortedZoneList = this.zoneData.slice();
    this.sortUserList()
  }
  clearAllSearchFields() {
    this.searchTermZone = '';

    this.searchTermCode = '';

    this.filterData();
  }
  filterByName(data: any): boolean {
    if (!this.searchTermZone) {
      return true; // No name search term, pass all leads
    }
    return data && data.name && data.name.toLowerCase().includes(this.searchTermZone.toLowerCase());
  }
  filterByIncharge(data: any): boolean {
    if (!this.searchTermCode) {
      return true; // No name search term, pass all leads
    }
    return data && data.code && data.code.toLowerCase().includes(this.searchTermCode.toLowerCase());
  }




  // onSubmit() {
  // this.submitted = true
  //   this.masterService.createZoneListData(this.zoneForm.value).subscribe((data: any) => {
  //     console.log("create zone data",data);


  //     this.showSuccess();

  //       this.display = "none";


  //     this.ngOnInit();
  

  //     error => {
  //       this.showError();
  //     })

  // }
  onSubmit() {

    this.submitted = true;
    if (this.zoneForm.invalid || this.isFormEmpty(this.zoneForm.value)) {
      this.showError();
      return;
    }
    this.masterService.createZoneListData(this.zoneForm.value).subscribe((data: any) => {
      console.log(data);
      // this.display = "none";
      this.showSuccess();
      // this.ngOnInit();
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
    this.toastService.error('Something is Wrong');
  }
  showSuccess() {
    this.toastService.success(' Zone Created Successfully');
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
    this.sortedZoneList.sort((a, b) => {
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
  onSubmit1() {

    this.submitted = true;
    if (this.zoneEditForm.invalid || this.isFormEmpty(this.zoneEditForm.value)) {
      this.showError();
      return;
    }
    console.log("data")

    this.masterService.editZoneListData(this.id, this.zoneEditForm.value).subscribe((res: any) => {
      console.log('submitted form', this.zoneEditForm.value);

      this.showSuccess()
      this.router.navigate(['chits/zonelist']);

    },
      errorMsg => {

        this.showError()
      }
    );

    // }

  }

  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    const pageSize = 15; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.zoneData = this.zoneListData.slice(startItem, endItem);
    this.sortedZoneList = this.zoneData.slice();

    this.sortUserList();
  }

}
