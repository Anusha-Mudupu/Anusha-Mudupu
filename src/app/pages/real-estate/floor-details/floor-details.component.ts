/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { PaginationModule, PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-floor-details',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,NgPipesModule,PaginationModule,ReactiveFormsModule,FormsModule],
  templateUrl: './floor-details.component.html',
  styleUrl: './floor-details.component.scss'
})
export class FloorDetailsComponent implements OnInit{
  floorDetails:any=[
    {
      floorno:"3",
      blackname:"DAKSHIN-IT BLOCK",
      floorname:"Third Floor",
      floorunits:193,
      amtperunit:96000,
      amtperfloor:185234668,
      floorsft:23275
    },
    {
      floorno:"4",
      blackname:"DAKSHIN-IT BLOCK",
      floorname:"fourth Floor",
      floorunits:0,
      amtperunit:0,
      amtperfloor:0,
      floorsft:0
    },
    {
      floorno:"5",
      blackname:"DAKSHIN-IT BLOCK",
      floorname:"fifth Floor",
      floorunits:80,
      amtperunit:8000,
      amtperfloor:7542168,
      floorsft:23567
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
  searchfloorsft: any;
  searchamtperfloor: any;
  searchamtperunit: any;
  searchfloorunits:any;
  searchfloorname:any;
  searchblackname:any;
  searchfloorno:any;
  floor: any;
  constructor(){
  
  }
    ngOnInit(): void {
      this.sortedFloorDetails = this.floorDetails .slice(); 
        console.log("this.companySetUp",this.floorDetails);
        this.filterLeads()
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
  filterLeads() {
    if (this.floorDetails) {
      this.company = this.floorDetails.filter((data: any) =>
      this.filterByfloorno(data) &&
        this.filterByblackname(data) &&
        this.filterByfloorname(data) &&
        this.filterByfloorunits(data)&& 
        this.filterBychamtperunit(data) &&
        this.filterBychamtperfloor(data) &&
        this.filterByfloorsft(data) 
        
        
        
       
      

       
       

      );

    }
    this.sortedFloorDetails = this.company.slice();

    this.sortUserList()
  }
  
  filterByfloorno(lead: any): boolean {
    if (!this.searchfloorno) {
      return true; 
    }
    return lead && lead.floorno && lead.floorno.toLowerCase().includes(this.searchfloorno.toLowerCase());
  }

  filterByblackname(lead: any): boolean {
    if (!this.searchblackname) {
      return true; 
    }
    return lead && lead.blackname && lead.blackname.toLowerCase().includes(this.searchblackname.toLowerCase());
  }
  filterByfloorname(lead: any): boolean {
    if (!this.searchfloorname) {
      return true; 
    }
    return lead && lead.floorname && lead.floorname.toLowerCase().includes(this.searchfloorname.toLowerCase());
  }
  filterBychamtperunit(lead: any): boolean {
    if (!this.searchfloorunits) {
      return true; 
    }
    return lead && lead.amtperunit && lead.amtperunit.toLowerCase().includes(this.searchfloorunits.toLowerCase());
  }
  filterBychamtperfloor(lead: any): boolean {
    if (!this.searchamtperfloor) {
      return true; 
    }
    return lead && lead.amtperfloor && lead.amtperfloor.toLowerCase().includes(this.searchamtperfloor.toLowerCase());
  }
  filterByfloorsft(lead: any): boolean {
    if (!this.searchfloorsft) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.floorsft && lead.floorsft.toLowerCase().includes(this.searchfloorsft.toLowerCase());
  }
  filterByfloorunits(lead: any): boolean {
    if (!this.searchfloorunits) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.floorunits && lead.floorunits.toLowerCase().includes(this.searchfloorunits.toLowerCase());
  }

}
