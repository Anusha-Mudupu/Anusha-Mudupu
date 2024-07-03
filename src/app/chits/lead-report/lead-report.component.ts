/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPrintElementModule } from 'ngx-print-element';
@Component({
  selector: 'app-lead-report',
  standalone: true,
  imports: [NgxPaginationModule, PaginationModule,NgxPrintElementModule],
  templateUrl: './lead-report.component.html',
  styleUrl: './lead-report.component.scss'
})
export class LeadReportComponent {
  keys: string[] = [];
  sourceKeys:any[]=[];
  leadsData: any;
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  leadsConsolidate: any = [

    {
      "Manager Name":"Total",
      "Total": "0",
      "Conversion Rate%": "NaN",
      "UC Booked": 0,
      "Booked": 0,
      "Hot": 0,
      "Warm": 0,
      "Cold": 0,
      "Lost": 0,
      "No status": 0,
    }
  ];
 sourcedata:any = [
 {
      "Name": "Total",
      "Total": "0",
       "Booked": 0,
      "Hot": 0,
      "Warm": 0,
      "Cold": 0,
      "Lost": 0,
      "No Status": 0,


    }
  ]
  constructor(){
    this.keys = Object.keys(this.leadsConsolidate[0]);
    console.log('headings',this.keys);

    this.sourceKeys=Object.keys(this.sourcedata[0])
  }
  ngonInit(){
   
     
  }
  
 
  
  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    debugger
    const startItem = (page - 1) * 8;
    const endItem = page * 15;
    this.leadsData = this.leadsConsolidate.slice(startItem, endItem);
  }

 
 
 
}