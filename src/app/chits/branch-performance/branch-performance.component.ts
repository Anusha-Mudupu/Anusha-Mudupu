/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from '../Services/reports.service';
import { NgxPrintElementModule } from 'ngx-print-element';


@Component({
  selector: 'app-branch-performance',
  standalone: true,
  imports: [CommonModule,NgxPrintElementModule],
  templateUrl: './branch-performance.component.html',
  styleUrl: './branch-performance.component.scss'
})
export class BranchPerformanceComponent {
  sortedBranchPerformanceList: any[] = []; // Array to hold sorted user list
  sortColumn: any = 'Branch_Name'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  BranchPerformanceData:any;
  branchPerformance:any[]=[
    {
      "Branch_Name":"Hyderabad",
      "Total_Contacts":200,
      "Total_Leads":121,
      "Win":"2.1",
      "Business_Value":"10 lakhs",
      "Pipeline":0,
    },
    {
      "Branch_Name":"HANAMKONDA",
      "Total_Contacts":221,
      "Total_Leads":101,
      "Win":"3.0",
      "Business_Value":"5 lakhs",
      "Pipeline":0,
    }
  ]
  constructor(private reportService:ReportsService){

  }
  ngOnInit(){
    this.sortedBranchPerformanceList = this.branchPerformance.slice();
    this.sortUserList()
   this.reportService.getBranchPerformanceData().subscribe((data:any)=>{
    this.BranchPerformanceData=data;
   })
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
    this.sortedBranchPerformanceList.sort((a, b) => {
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
