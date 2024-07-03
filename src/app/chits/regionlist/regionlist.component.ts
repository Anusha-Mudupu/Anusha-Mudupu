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
import { MastersService } from '../Services/masters.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { UpdateRegionComponent } from '../update-region/update-region.component';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-regionlist',
  standalone: true,
  imports: [CommonModule, OrderByPipe, ReactiveFormsModule, FormsModule, NgxPaginationModule, PaginationModule],
  templateUrl: './regionlist.component.html',
  styleUrl: './regionlist.component.scss'
})
export class RegionlistComponent implements OnInit {
  regionListData: Region[] = [];
  selectedItem: any;
  id!: number;
  zoneListData: Zone[] = [];
  submitted: boolean = false;
  regionDataById!: Region;
  regionData!: any;
  searchTermregion: any;
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
  ChitsbusinessCode="chits";

  ngOnInit(): void {
    this.masterService.getRegionListData().subscribe((data: any) => {
      this.regionListData = data.data;
      this.sortedRegionList = this.regionListData.slice();
      console.log("this.sortedUserList", this.sortedRegionList)
      console.log("this.regionListData", this.regionListData);
      this.updatePageData(1)
    });
    this.masterService.getZoneListData().subscribe((data: any) => {
      this.zoneListData = data;
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

    const dialogRef = this.dialog.open(UpdateRegionComponent, { height: 'auto', width: '600px', data: { id: id } })
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

  filterData() {
    this.regionData = this.regionListData.filter((data: any) =>
      this.filterByRegion(data) &&
      this.filterByZone(data)
    );


    this.sortedRegionList = this.regionData.slice();

    this.sortUserList()
  }
  clearAllSearchFields() {
    this.searchTermZone = '';
    
    this.searchTermregion = '';
   
    this.filterData();  
  }
  filterByRegion(lead: any): boolean {
    if (!this.searchTermregion) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.name && lead.name.toLowerCase().includes(this.searchTermregion.toLowerCase());
  }
  filterByZone(lead: any): boolean {
    if (!this.searchTermZone) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.zoneNavigation.name && lead.zoneNavigation.name.toLowerCase().includes(this.searchTermZone.toLowerCase());
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
    this.masterService.createRegion(this.addRegionForm.value).subscribe((res: any) => {
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
    this.masterService.deleteRegion(this.id).subscribe((res: any) => {
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
