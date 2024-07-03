/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionPerformance } from 'src/app/chits-class';
import { ReportsService } from '../Services/reports.service';
import { NgxPrintElementModule } from 'ngx-print-element';
@Component({
  selector: 'app-regionperformance',
  standalone: true,
  imports: [CommonModule,NgxPrintElementModule],
  templateUrl: './regionperformance.component.html',
  styleUrl: './regionperformance.component.scss'
})
export class RegionperformanceComponent implements OnInit {


  sortedRegionPerformanceList: any[] = []; // Array to hold sorted user list
  sortColumn: any = 'Branch_Name'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
     pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: black; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }


  RegionPerformancedata:any;
  constructor(private reportsservice:ReportsService)
{

}  

RegionPerformance:RegionPerformance[]=[
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

  ngOnInit(): void {
    this.sortedRegionPerformanceList = this.RegionPerformance.slice();
    this.sortUserList()
    this.reportsservice.getRegionPerformanceData().subscribe((data:any)=>{
      this.RegionPerformancedata=data;
    })
    throw new Error('Method not implemented.');
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
    this.sortedRegionPerformanceList.sort((a, b) => {
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
