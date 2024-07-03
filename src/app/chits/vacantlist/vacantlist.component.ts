/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccantList } from 'src/app/chits-class';
import { ReportsService } from '../Services/reports.service';
import { NgxPrintElementModule } from 'ngx-print-element';

@Component({
  selector: 'app-vacantlist',
  standalone: true,
  imports: [CommonModule,NgxPrintElementModule],
  templateUrl: './vacantlist.component.html',
  styleUrl: './vacantlist.component.scss'
})
export class VacantlistComponent implements OnInit{
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  constructor(private reportsservice:ReportsService)
  {
  
  } 
  vacanChitsData:any;
  display = "none";
  VaccantList:VaccantList[]=[
    {
      "BranchName":"AMARVATHI-CAO",
      "ChitValue":100000,
      "ChitPeriod":25,
      "SubscriptionAmount":4000,
      "ActionNumber":16,
      "VaccantValue":63596,
      "NoofVaccantTickets":1,
     
    },
    {
      "BranchName":"AMARVATHI",
      "ChitValue":200000,
      "ChitPeriod":27,
      "SubscriptionAmount":5000,
      "ActionNumber":18,
      "VaccantValue":73586,
      "NoofVaccantTickets":2,
     
    }
  ]
  ngOnInit(): void {
   this.reportsservice.getVacantChitsData().subscribe((data:any)=>{
    this.vacanChitsData=data;
   })
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }









  
 
}
