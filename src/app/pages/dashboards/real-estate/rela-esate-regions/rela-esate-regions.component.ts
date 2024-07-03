/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Region } from 'src/app/chits-class';
import { Zone } from 'src/app/chits-class';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UpdateRegionComponent } from 'src/app/chits/update-region/update-region.component';
import { RealEsateUpdateRegionComponent } from './real-esate-update-region/real-esate-update-region.component';

@Component({
  selector: 'app-rela-esate-regions',
  standalone: true,
  imports: [CommonModule ,OrderByPipe, ReactiveFormsModule, FormsModule, NgxPaginationModule, PaginationModule],
  templateUrl: './rela-esate-regions.component.html',
  styleUrl: './rela-esate-regions.component.scss'
})
export class RelaEsateRegionsComponent implements OnInit{
  regionListData: Region[] = [];
  selectedItem: any;
  id!: number;
  zoneListData: Zone[] = [];
  submitted: boolean = false;
  regionDataById!: Region;
  regionData!: any;
  searchTermName: any;
  searchTermZone: any;
  sortedRegionList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'zoneNavigation'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  constructor(private masterService: MastersService, private FormBuilder: FormBuilder, private route: Router, public toastService: ToastrService,
    private dialog: MatDialog) {

    this.addRegionForm = this.FormBuilder.group({
      zone: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
      code: ['', Validators.compose([Validators.required])],
    });



  }
  searchText: any = '';
  addRegionForm: any;
  // RegionList:RegionList[]=[
  //   {
  //     "Zone":"Hyderabad",
  //     "Name":"hyderabad",
  //     "Code":"hyderabad",
  //   }
  //   , {
  //     "Zone":"Secunderabad",
  //     "Name":"secunderabad",
  //     "Code":"secunderabad",
  //   },

  // ]
  display = "none";
  display1 = "none";
  display2 = "none";


  ngOnInit(): void {
    this.masterService.getRealestateRegionListData().subscribe((data: any) => {
      this.regionListData = data.data;
      this.sortedRegionList = this.regionListData.slice();
      console.log("this.sortedUserList", this.sortedRegionList)
      console.log("this.regionListData", this.regionListData);
      this.updatePageData(1)
    });
    this.masterService.getrealZoneListData().subscribe((data: any) => {
      this.zoneListData = data.data;
      console.log("this.zoneListData", this.zoneListData);
    })
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  EditModal(id: any) {
    // this.display1 = "block";

    const dialogRef = this.dialog.open(RealEsateUpdateRegionComponent, { height: 'auto', width: '600px', data: { id: id } })
      .afterClosed().subscribe((result: any) => { this.ngOnInit() });
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

  filterLeads() {
    if (this.regionListData) {
      this.regionData = this.zoneListData.filter((lead: any) =>
        this.filterByName(lead) &&
        this.filterByZone(lead)
         );

    }
    this.sortedRegionList = this.regionListData.slice();

    this.sortUserList()
  }
  clearAllSearchFields() {
    this.searchTermZone = '';
    this.searchTermName = '';
    this.filterLeads();  
  }
  filterByName(lead: any): boolean {
    if (!this.searchTermName) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.name && lead.name.toLowerCase().includes(this.searchTermName.toLowerCase());
  }
  filterByZone(lead: any): boolean {
    if (!this.searchTermZone) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.name && lead.name.toLowerCase().includes(this.searchTermZone.toLowerCase());
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
    this.sortedRegionList.sort((a, b) => {
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


  saveRegion() {
    this.submitted = true;
    if (this.addRegionForm.invalid || this.isFormEmpty(this.addRegionForm.value)) {
      this.showError();
      return;
    }
    this.masterService.createRealestateRegion(this.addRegionForm.value).subscribe((res: any) => {
      console.log('region added successufully', res);
      this.display = "none";
      this.route.navigate(['/regionlist']);
      this.showSuccess();
      setTimeout(() => {
        this.display = "none";
      }, 2000)

      this.ngOnInit();
    }, error => {
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

  userClick(id: number) {
    console.log("id", id)
    this.display2 = "block";
    this.selectedItem = this.regionListData.find((item: any) => item.id == id);
    console.log("this.selectedItem", this.selectedItem.id);

    this.id = this.selectedItem.id;
    console.log("this.id", this.id);
    // this.masterService.getRegionDataById(this.id).subscribe((data: any) => {
    //   this.regionDataById = data;
    //   console.log('userDataById', this.regionDataById);
    //   // this.addRegionForm.controls['email'].setValue(this.userDataById.email);
    // })

  }

  showSuccess() {
    this.toastService.success(' Region Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  showregiondltedSuccess() {
    this.toastService.success(' Region Deleted ');
  }

  showregionError() {
    this.toastService.error('Something is Wrongy');
  }

  deleteRegion() {
    this.masterService.deleterealestateRegion(this.id).subscribe((res: any) => {
      console.log('region deleted successfully', res);
      this.display2 = "none";
      this.route.navigate(['/regionlist']);
      this.showregiondltedSuccess();
      this.ngOnInit();
      setTimeout(() => {
        this.display = "none";
      }, 2000)

    }, error => {
      this.showregionError();
    })
  }


  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    const pageSize = 15; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.regionData = this.regionListData.slice(startItem, endItem);
    this.sortedRegionList = this.regionData.slice();

    this.sortUserList()
  }

}
