/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common'; 
import { NgxPrintElementModule } from 'ngx-print-element';
@Component({
  selector: 'app-excutive-wise-bookings',
  standalone: true,
  imports: [NgxPaginationModule, PaginationModule,CommonModule,NgxPrintElementModule],
  templateUrl: './excutive-wise-bookings.component.html',
  styleUrl: './excutive-wise-bookings.component.scss'
})
export class ExcutiveWiseBookingsComponent {
  // keys: string[] = [];
  sourceKeys:any[]=[];
  leadsData:any;
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  leadsConsolidate:any=[
    {
      "All":"Total",
    "Total":"50",
    "Mar2024":1,
    "Feb2024":0,
    "Jan2024":0,
    "Dec2024":0,
    "Nov2024":6,
    "OCT2024":0,
    "Sep2024":0,
    "Aug2024":0,
    "Jul2024":75,
    "May2024":0,
    "Apr2024":0,
    "Mar2023":0,
    "UptoFeb2023":136,

   },
  
];
leadsConsolidatekeys:any
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
    this.leadsConsolidatekeys=Object.keys(this.leadsConsolidate[0]);
  

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
