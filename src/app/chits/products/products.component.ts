/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from 'src/app/chits-class';
import { FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MastersService } from '../Services/masters.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule ,OrderByPipe,ReactiveFormsModule,FormsModule,OrderByPipe,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsData:any;
  page: number = 1;
  count: number = 0;
  tableSize = 10;
  tableSizes: any = [5, 10, 15, 20]
  constructor(private masterService:MastersService){

  }
  searchText: any = '';
  products:any=[{
    "business_unit":"Chit Fund", 
    "Type":"Apartments",
    "Name":"1 Crore Chit",
    "Code":10000000,
    "Status":"Active"
  },{
  "business_unit":"Chit Fund", 
    "Type":"Units",
    "Name":"30 Lakhs Chit",
    "Code":3000000,
    "Status":"Active"
  },
  {
    "business_unit":"Chit Fund", 
      "Type":"Apartments",
      "Name":"25 Lakhs Chit",
      "Code":2500000,
      "Status":"Active"
    },
    {
      "business_unit":"Chit Fund", 
        "Type":"Apartments",
        "Name":"20 Lakhs Chit",
        "Code":2000000,
        "Status":"Active"
      },
      {
        "business_unit":"Chit Fund", 
          "Type":"Apartments",
          "Name":"15 Lakhs Chit",
          "Code":1500000,
          "Status":"Active"
        },
        {
          "business_unit":"Chit Fund", 
            "Type":"Units",
            "Name":"5 Lakhs Chit",
            "Code":500000,
            "Status":"Active"
          },
          {
            "business_unit":"Chit Fund", 
              "Type":"Units",
              "Name":"3 Lakhs Chit",
              "Code":300000,
              "Status":"Active"
            },
            {
              "business_unit":"Chit Fund", 
                "Type":"Apartments",
                "Name":"2 Lakhs Chit",
                "Code":200000,
                "Status":"Active"
              },
              {
                "business_unit":"Chit Fund", 
                  "Type":"Units",
                  "Name":"1 Lakh Chit",
                  "Code":100000,
                  "Status":"Active"
                }
]
  display = "none";
  display1="none";
  display2="none";
  ngOnInit(): void {
    this.masterService.getAgentProductsData().subscribe((data:any)=>{
      console.log("products",data)
      this.productsData=data;
    })
   
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.productsData;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.productsData;
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
