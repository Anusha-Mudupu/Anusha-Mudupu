/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { PaginationModule, PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-company-setup',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule,NgPipesModule,PaginationModule],
  templateUrl: './company-setup.component.html',
  styleUrl: './company-setup.component.scss'
})
export class CompanySetupComponent implements OnInit {
companySetUp:any=[
  {
    vchaccid:"1",
    vchcompanycode:"DI",
    vchcompanyName:"DAKSHIN INFRASTF",
    vcregioncode:'D/KT-C.O',
    vchregionaddress:"SURVEY NO.115/1",
  },
  {
    vchaccid:"2",
    vchcompanycode:"DI",
    vchcompanyName:"DAKSHIN INFRASTF",
    vcregioncode:'E/KT-D.O',
    vchregionaddress:"SURVEY NO.116/1"
  },
  {
    vchaccid:"3",
    vchcompanycode:"DI",
    vchcompanyName:"DAKSHIN INFRASTF",
    vcregioncode:'f/KT-D.O',
    vchregionaddress:"SURVEY NO.117/1"
  }
]
sortedCompanyList: any[] = []; // Array to hold sorted user list
sortColumn: string = 'vchaccid'; // Default sort column
sortOrder: string = 'asc';
public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  company: any;
constructor(){

}
  ngOnInit(): void {
    this.sortedCompanyList = this.companySetUp .slice(); 
      console.log("this.companySetUp",this.companySetUp)
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
    this.sortedCompanyList.sort((a, b) => {
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
  this.company = this.companySetUp.slice(startItem, endItem);
  this.sortedCompanyList = this.company .slice();
  
  this.sortUserList()
}
}
