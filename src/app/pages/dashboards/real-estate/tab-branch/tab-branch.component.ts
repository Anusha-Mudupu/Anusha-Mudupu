/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { PaginationModule, PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-tab-branch',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,NgPipesModule,PaginationModule],
  templateUrl: './tab-branch.component.html',
  styleUrl: './tab-branch.component.scss'
})
export class TabBranchComponent {
  floorDetails:any=[
    {
      vchbranch:"ABIDS",
      dateupdatedon:"2010-02-04 0:00:00",
      vchbranchname:"KAPIL INFRA",
      vchcompany:"OTHERS",
      brid:"DI",
      street:"Kapil Towers, 15th Floor",
      Area:"Nanakramguda",
      City:"Rangareddy Dist",
      State:"Telangana",
      Country:"India",
      pincode:"500032",
      brcode:1,
      rgid:1,
      commondate:"2024-01-30",
      name:"DAKSHIN-IT BLOCK",
      bm:11,
      phno:987654334,
      email:"N"

    },
    {
      vchbranch:"AMALAPURAM",
      dateupdatedon:"2010-02-04 0:00:00",
      vchbranchname:"KHC",
      vchcompany:"OTHERS",
      brid:"DI",
      street:"Kapil Towers, 15th Floor",
      Area:"Nanakramguda",
      City:"Rangareddy Dist",
      State:"Telangana",
      Country:"India",
      pincode:"500032",
      brcode:1,
      rgid:1,
      commondate:"2024-01-30",
      name:"DAKSHIN-IT BLOCK",
      bm:11,
      phno:987654334,
      email:"N"

    },
    {
      vchbranch:"ADILABAD",
      dateupdatedon:"2010-02-04 0:00:00",
      vchbranchname:"EDP",
      vchcompany:"OTHERS",
      brid:"DI",
      street:"Kapil Towers, 15th Floor",
      Area:"Nanakramguda",
      City:"Rangareddy Dist",
      State:"Telangana",
      Country:"India",
      pincode:"500032",
      brcode:1,
      rgid:1,
      commondate:"2024-01-30",
      name:"DAKSHIN-IT BLOCK",
      bm:11,
      phno:987654334,
      email:"N"

    },
    
  
  ]
  sortedFloorDetails: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'floorno'; // Default sort column
  sortOrder: string = 'asc';
  public display1 = "none";
    public display2 = "none";
    public display3 = "none";
    public display4 = "none";
  company: any;
  constructor(){
  
  }
    ngOnInit(): void {
      this.sortedFloorDetails = this.floorDetails .slice(); 
        console.log("this.companySetUp",this.floorDetails)
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
      this.sortedFloorDetails.sort((a, b) => {
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
  openAddForm(){
  this.display1="block"
  }
  closeAddForm(){
    this.display1 = "none"
  }
  closeEditForm(){
    this.display2 = "none"
  }
  editForm(){
    this.display2="block"
  }
  onClosed(){
    this.display3 = "none"  
  }
  openDelete(){
    this.display3 = "block"  
  }
  tablePageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }
  
  updatePageData(page: number): void {
    debugger
    const startItem = (page - 1) * 20;
    const endItem = page * 20;
    this.company = this.floorDetails.slice(startItem, endItem);
    this.sortedFloorDetails = this.company .slice();
    
    this.sortUserList()
  }
}
