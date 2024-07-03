/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MastersService } from '../Services/masters.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-productconfig',
  standalone: true,
  imports: [CommonModule,OrderByPipe,ReactiveFormsModule,FormsModule,NgxPaginationModule],
  templateUrl: './productconfig.component.html',
  styleUrl: './productconfig.component.scss'
})
export class ProductconfigComponent implements OnInit{
  productConfigData:any;
  constructor(private masterService:MastersService){

  }
  page: number = 1;
  count: number = 0;
  tableSize = 10;
  tableSizes: any = [5, 10, 15, 20]
  display = "none";
  display1="none";
  display2="none";
  searchText: any = '';
  Products:any=[
    {
     "BusinessVertical":"Chit Fund" ,
     "Type":"---",
     "Product":"1 Core Chit",
     "Value":'10000000',
     "Tenure":20,
     },
     {
      "BusinessVertical":"Chit Fund" ,
      "Type":"---",
      "Product":"1 Core Chit",
      "Value":'10000000',
      "Tenure":20,
      },
      {
        "BusinessVertical":"Chit Fund" ,
        "Type":"---",
        "Product":"30 Lakhs chit",
        "Value":'3000000',
        "Tenure":60,
        },
        {
          "BusinessVertical":"Chit Fund" ,
          "Type":"---",
          "Product":"25 Lakhs chit",
          "Value":'2500000',
          "Tenure":70,
          },
          {
            "BusinessVertical":"Chit Fund" ,
            "Type":"---",
            "Product":"15 Lakh chit",
            "Value":'1500000',
            "Tenure":80,
            },
            {
              "BusinessVertical":"Chit Fund" ,
              "Type":"---",
              "Product":"5 Lakh chit",
              "Value":'500000',
              "Tenure":90,
              },
              {
                "BusinessVertical":"Chit Fund" ,
                "Type":"---",
                "Product":"3 Lakh chit",
                "Value":'300000',
                "Tenure":20,
                },
                {
                  "BusinessVertical":"Chit Fund" ,
                  "Type":"---",
                  "Product":"2 Lakh chit",
                  "Value":'200000',
                  "Tenure":10,
                  }
  ]
  ngOnInit(): void {
    this.masterService.getProductConfigData().subscribe((data:any)=>{
      this.productConfigData=data;
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.Products;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.Products;
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
  onClosed(){
    this.display2="none";
  }
  openDelete(){
    this.display2 = "block";
  }

  sortState = { columnIndex: -1, ascending: true };

  sortTable(columnIndex: any) {
    const table = document.getElementById("sortable-table") as HTMLTableElement;
    const rows = Array.from(table.rows).slice(1); // Exclude the header row

    // Toggle sorting direction if it's the same column
    if (this.sortState.columnIndex === columnIndex) {
      this.sortState.ascending = !this.sortState.ascending;
    } else {
      this.sortState.columnIndex = columnIndex;
      this.sortState.ascending = true;
    }

    rows.sort((a, b) => {
 const aValue = a.cells[columnIndex]?.textContent?.trim() || '';
            const bValue = b.cells[columnIndex]?.textContent?.trim() || '';

      const compareResult = aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });

      return this.sortState.ascending ? compareResult : -compareResult;
    });

    // Clear the existing table rows
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";

    // Append the sorted rows to the table
    rows.forEach(row => tbody.appendChild(row));

    // Update sorting indicators
    this.updateSortingIndicators();
  }

  updateSortingIndicators() {
    const table = document.getElementById("sortable-table") as HTMLTableElement;
    const headers = table.getElementsByTagName('th');

    for (let i = 0; i < headers.length; i++) {
      const sortIcon = headers[i].getElementsByClassName('sort-icon')[0] as HTMLElement;
      sortIcon.innerHTML = ""; // Clear previous icons

      if (i === this.sortState.columnIndex) {
        if (this.sortState.ascending) {
          sortIcon.className = 'sort-icon asc';
        } else {
          sortIcon.className = 'sort-icon desc';
        }
      }
    }
  }
}
