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
  selector: 'app-direct-business-details',
  standalone: true,
  imports: [CommonModule ,NgxPaginationModule, PaginationModule,NgxPrintElementModule],
  templateUrl: './direct-business-details.component.html',
  styleUrl: './direct-business-details.component.scss'
})
export class DirectBusinessDetailsComponent {
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  businessData:any;
  manager:any=[
    {
       "Manager":'A.Veera',
       "TOTAL":0,
       "Mar2024":0,
       "Feb2024":'0',
       "Jan2024":'0',
       "Dec2023":'0',
       "Nov2023":'0',
      
       "Oct2023":'0',
       "Sep2023":'0',
       "Aug2023":'0',
       "July2023":'0',
       "Jun2023":'0',
       "May2023":'0',
       "Apr2024":'0',
       "Mar2023":'0',
       "UptoFeb2023":'25,000',
   },
   {
    "Manager":'K.Dheeraj',
    "TOTAL":0,
    "Mar2024":0,
    "Feb2024":0,
    "Jan2024":0,
    "Dec2023":0,
    "Nov2023":0,
   
    "Oct2023":0,
    "Sep2023":0,
    "Aug2023":0,
    "July2023":0,
    "Jun2023":0,
    "May2023":0,
    "Apr2024":0,
    "Mar2023":0,
    "UptoFeb2023":"2,80,000",
  },
  {
    "Manager":'Kalyan',
    "TOTAL":0,
    "Mar2024":0,
    "Feb2024":0,
    "Jan2024":0,
    "Dec2023":0,
    "Nov2023":0,
   
    "Oct2023":0,
    "Sep2023":0,
    "Aug2023":0,
    "July2023":0,
    "Jun2023":0,
    "May2023":0,
    "Apr2024":0,
    "Mar2023":0,
    "UptoFeb2023":"40,000",
  },
  {
    "Manager":'Ravoof',
    "TOTAL":0,
    "Mar2024":0,
    "Feb2024":0,
    "Jan2024":0,
    "Dec2023":0,
    "Nov2023":0,
   
    "Oct2023":0,
    "Sep2023":0,
    "Aug2023":0,
    "July2023":0,
    "Jun2023":0,
    "May2023":0,
    "Apr2024":0,
    "Mar2023":0,
    "UptoFeb2023":"52,800",
  },
  {
    "Manager":'Total',
    "TOTAL":0,
    "Mar2024":0,
    "Feb2024":0,
    "Jan2024":0,
    "Dec2023":0,
    "Nov2023":0,
   
    "Oct2023":0,
    "Sep2023":0,
    "Aug2023":0,
    "July2023":0,
    "Jun2023":0,
    "May2023":0,
    "Apr2024":0,
    "Mar2023":0,
    "UptoFeb2023":"52,800",
  }
  ]
  directBusinessKeys: string[];
  constructor(){
    this.directBusinessKeys=Object.keys(this.manager[0]);
  }
  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }
  
  updatePageData(page: number): void {
    debugger
    const startItem = (page - 1) * 8;
    const endItem = page * 15;
    this.businessData = this.manager.slice(startItem, endItem);
  }
}
