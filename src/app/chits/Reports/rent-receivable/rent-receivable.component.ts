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
  selector: 'app-rent-receivable',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule, PaginationModule,NgxPrintElementModule],
  templateUrl: './rent-receivable.component.html',
  styleUrl: './rent-receivable.component.scss'
})
export class RentReceivableComponent {
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
      "Company":"Dakshin Infra",
    "Year-2024":0,
    "Year-2025":12678,
    "Year-2026":12678,
    "Year-2027":10297,
    "Year-2028":1290,
    "Year-2029":897654,
    

   },

];

MonthWiseData:any=[
  {
    "Total":"",
    "Mar":"",
    "Apr":"",
    "May":"",
    "June":"",
    "July":"",
    "Aug":"",
    "Sep":"",
    "Oct":"",
    "Nov":"",
    "Dec":"",

 }, 
];

FloorWiseData:any=[
  {

    "Floor":"",
    "Total":"",
    "Mar":"",
    "Apr":"",
    "May":"",
    "June":"",
    "July":"",
    "Aug":"",
    "Sep":"",
    "Oct":"",
    "Nov":"",
    "Dec":"",

 }, 
];




leadsConsolidatekeys:any;
monthWiseDataKeys:any;
floorwiseDataKeys:any;
constructor(){
this.leadsConsolidatekeys=Object.keys(this.leadsConsolidate[0]);
this.monthWiseDataKeys=Object.keys(this.MonthWiseData[0]);
this.floorwiseDataKeys=Object.keys(this.FloorWiseData[0]);
}

tablepageChanged(event: PageChangedEvent): void {
  this.updatePageData(event.page);
}

updatePageData(page: number): void {
  
  const startItem = (page - 1) * 8;
  const endItem = page * 15;
  this.leadsData = this.leadsConsolidate.slice(startItem, endItem);
}

}
