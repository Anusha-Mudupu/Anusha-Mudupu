/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessVerticle } from 'src/app/chits-class';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MastersService } from '../Services/masters.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { LeadService } from 'src/app/chits/Services/lead.service';
@Component({
  selector: 'app-businessunit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, NgxPaginationModule, PaginationModule],
  templateUrl: './businessunit.component.html',
  styleUrl: './businessunit.component.scss'
})
export class BusinessunitComponent implements OnInit {
  BusinessVerticleData: BusinessVerticle[] = [];
  rolePermission: any;
  userDelete: string = '';
  userCreate: string = '';
  agent: any;
  userRead: string = '';
  userWrite: string = '';
  verticalData: any;
  sortColumn: string = 'name'; 
  sortOrder: string = 'asc';
  sortedUserList: any[] = [];
  sortState: any = {
    columnIndex: null,
    ascending: true
  };
  searchTermName: any;
  searchTermid: any;
  BusinessVerticleData1: any[] = [];
  public verticalData1: any;
  picklistData:any;
  BusinessverticalData:any;
  lookupConstants:any;
  data:any;
  constructor(private leadService:LeadService,private masterService: MastersService) {

  }
  ngOnInit(): void {

    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      
      // Filter data based on lookupCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.lookupCode === "BusinessVertical");
      
      console.log("this.verticalData", this.verticalData);
  
      // Access lookupConstants array from verticalData
      if (this.verticalData1.length > 0) {
          this.lookupConstants = this.verticalData1[0].lookupConstants;
          console.log("lookupConstants",this.lookupConstants);
          // Now you can use lookupConstants array as needed
      }
  });
this.masterService.getBusinessVerticalData().subscribe((data: any) => {
      this.BusinessVerticleData = data;
      this.sortedUserList = this.BusinessVerticleData.slice();
      
      console.log("this.sortedUserList", this.BusinessVerticleData)
      this.updatePageData(1);
    })
    this.rolePermission = localStorage.getItem('rolepermissionjson');
    if (this.rolePermission == null || this.rolePermission == "null") {
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead = "true"
      this.userWrite = "true"
    }
    else {
      const getRoles = JSON.parse(this.rolePermission).find((item: any) => item.navigation == "Leads")
      if (getRoles == undefined) {
        this.userCreate = "true"
        this.userDelete = "true"
        this.userRead = "true"
        this.userWrite = "true"
      }
      else {
        this.userCreate = getRoles.create
        this.userDelete = getRoles.delete
        this.userRead = getRoles.read
        this.userWrite = getRoles.write
      }
    }
  }
  display = "none";
  display1 = "none";
  display2 = "none";
  searchText: any = "";

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

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
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
    this.sortedUserList.sort((a, b) => {
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

    const startItem = (page - 1) * 8;
    const endItem = page * 15;
    this.verticalData = this.BusinessVerticleData.slice(startItem, endItem);
  }
  clearAllSearchFields() {
    this.searchTermName = '';
    
    this.searchTermid = '';
   
    this.filterLeads();  
  }
  filterLeads() {
    this.BusinessVerticleData1 = this.BusinessVerticleData.filter((lead: any) => {
        return this.filterByName(lead) && this.filterByPhone(lead);
    });

    this.sortedUserList = this.BusinessVerticleData1.slice();

    this.sortUserList();
}
 filterByName(lead: any): boolean {
    if (!this.searchTermName) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.name && lead.name.toLowerCase().includes(this.searchTermName.toLowerCase());
  }

  filterByPhone(lead: any): boolean {
    if (!this.searchTermid) {
        return true; // No phone search term, pass all leads
    }
    const searchTermAsNumber = parseInt(this.searchTermid, 10); // Convert search term to a number
    return lead && lead.id && parseInt(lead.id, 10) === searchTermAsNumber;
}
}
