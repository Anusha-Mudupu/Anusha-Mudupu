/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { Catergory } from 'src/app/chits-class';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-production-type',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule,PaginationModule],
  templateUrl: './production-type.component.html',
  styleUrl: './production-type.component.scss'
})
export class ProductionTypeComponent {
  
  display = "none";
  display1="none";
  rolePermission: any;
  userCreate: any;
  userDelete: any;
  userRead: any;
  userWrite: any;
   categoryData:any;
   page: number = 1;
   count: number = 0;
   tableSize = 10;
   tableSizes: any = [5, 10, 15, 20];
   sortedProductList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'name'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  ProductsData:any;
  constructor(private masterService:MastersService){

  }
  ngOnInit(): void {
     this.masterService.getRealEstateproducts().subscribe((data:any)=>{
      this.ProductsData=data.data;
      const uniqueCategoryCodes = Array.from(new Set(this.ProductsData.map((product: any) => product.categoryCode)));
      this.categoryData = uniqueCategoryCodes;
      this.sortedProductList = this.ProductsData.slice();
      
      this.sortUserList()
      console.log('categorydata',this.categoryData)
     })
   
    this.rolePermission = localStorage.getItem('rolepermissionjson');
    if(this.rolePermission==null || this.rolePermission=="null"){
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead =  "true"
      this.userWrite =  "true"
    }
    else{
    const getRoles = JSON.parse(this.rolePermission).find((item:any) => item.navigation== "Product Types")
    
    // if(this.agent == 'true'){
     if(getRoles==undefined){
       this.userCreate = "true"
       this.userDelete = "true"
       this.userRead =  "true"
       this.userWrite =  "true"
     }
     else{
      this.userCreate = getRoles.create
      this.userDelete = getRoles.delete
      this.userRead = getRoles.read
      this.userWrite = getRoles.write
     }
    }
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  EditModal(){
    this.display1 = "block";
  }
  onCloseHandled1(){
    this.display1 = "none";
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.categoryData
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.categoryData
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
    this.sortedProductList.sort((a, b) => {
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
}

