/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintElementModule } from 'ngx-print-element';
@Component({
  selector: 'app-managerwise',
  standalone: true,
  imports: [CommonModule,NgxPrintElementModule],
  templateUrl: './managerwise.component.html',
  styleUrl: './managerwise.component.scss'
})
export class ManagerwiseComponent {
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }

manager:any=[
  {
     "Manager":'A.veera-CPcount',
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
     "UptoFeb2023":'99',
 },
 {
  "Manager":'K.Dheeraj-CP count',
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
  "UptoFeb2023":68,
},
{
  "Manager":'Kalyan-CP count',
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
  "UptoFeb2023":59,
},
{
  "Manager":'Total-CP count',
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
  "UptoFeb2023":226,
}
]
}

