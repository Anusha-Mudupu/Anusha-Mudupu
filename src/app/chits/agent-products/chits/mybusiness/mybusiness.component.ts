/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from 'src/app/chits/Services/reports.service';
import { mybusiness } from 'src/app/chits-class';


@Component({
  selector: 'app-mybusiness',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mybusiness.component.html',
  styleUrl: './mybusiness.component.scss'
})
export class MybusinessComponent {
  constructor(private reportsservice:ReportsService){

  }
  mybusinessData:any;
  display = "none";
  mybusiness:mybusiness[]=[
    {
      "ChitFund":"5 Laksh Chit",
      "BusinessValue":"500,000",
      "Name":"Anjaiah Kummari",
      "Phone":9876543210,
      "EnrollDate":"20 Nav,2021",
      "Branch":"Habsiguda-2-CAO",
      "Group":"KHYTI8J",
      "TNO":23,
      "AdAmount":'00',
      "DueAmount":'00',
     
    },
    {
      "ChitFund":"1 Laksh Chit",
      "BusinessValue":"100,000",
      "Name":"Ramesh R",
      "Phone":9776443819,
      "EnrollDate":"9 Nav,2021",
      "Branch":"Habsiguda-2-CAO",
      "Group":"KHYTI7J",
      "TNO":29,
      "AdAmount":'00',
      "DueAmount":'00',
     
    }
  ]
  ngOnInit(): void {
   this.reportsservice.getVacantChitsData().subscribe((data:any)=>{
    this.mybusinessData=data;
   })
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  } 
}
