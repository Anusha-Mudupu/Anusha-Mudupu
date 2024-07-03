/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPrintElementModule } from 'ngx-print-element';
@Component({
  selector: 'app-leads-consolidate',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule, PaginationModule,NgxPrintElementModule],
  templateUrl: './leads-consolidate.component.html',
  styleUrl: './leads-consolidate.component.scss'
})
export class LeadsConsolidateComponent {

  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  leadsData:any;

  leadsConsolidate:any=[
    {
      "Status":"K.Dheeraj",
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
   {
    "Status":"Conversion%",
  "Total":"10",
  "Mar2024":0,
  "Feb2024":100,
  "Jan2024":0,
  "Dec2024":134,
  "Nov2024":7,
  "OCT2024":25,
  "Sep2024":66,
  "Aug2024":5,
  "Jul2024":99,
  "May2024":0,
  "Apr2024":135,
  "Mar2023":0,
  "UptoFeb2023":128,

 },
 {
  "Status":"NO STATUS",
"Total":"23",
"Mar2024":0,
"Feb2024":66,
"Jan2024":2,
"Dec2024":34,
"Nov2024":45,
"OCT2024":0,
"Sep2024":101,
"Aug2024":0,
"Jul2024":0,
"May2024":99,
"Apr2024":0,
"Mar2023":67,
"UptoFeb2023":1200,

},
{
  "Status":"COLD",
"Total":"0",
"Mar2024":3,
"Feb2024":0,
"Jan2024":60,
"Dec2024":0,
"Nov2024":68,
"OCT2024":0,
"Sep2024":67,
"Aug2024":0,
"Jul2024":56,
"May2024":0,
"Apr2024":89,
"Mar2023":0,
"UptoFeb2023":1564,

},
{
  "Status":"WARM",
"Total":"100",
"Mar2024":2,
"Feb2024":22,
"Jan2024":0,
"Dec2024":18,
"Nov2024":12,
"OCT2024":0,
"Sep2024":3,
"Aug2024":0,
"Jul2024":0,
"May2024":0,
"Apr2024":8,
"Mar2023":0,
"UptoFeb2023":1789,

},
{
  "Status":"LOST",
"Total":"78",
"Mar2024":0,
"Feb2024":7,
"Jan2024":0,
"Dec2024":0,
"Nov2024":0,
"OCT2024":16,
"Sep2024":0,
"Aug2024":0,
"Jul2024":9,
"May2024":0,
"Apr2024":31,
"Mar2023":0,
"UptoFeb2023":2001,

}
];
leadsConsolidatekeys:any
constructor(){
this.leadsConsolidatekeys=Object.keys(this.leadsConsolidate[0]);
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
