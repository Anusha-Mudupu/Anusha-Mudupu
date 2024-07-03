/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsService } from 'src/app/chits/Services/reports.service';
import { subscribers } from 'src/app/chits-class';

@Component({
  selector: 'app-real-estate-myledger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './real-estate-myledger.component.html',
  styleUrl: './real-estate-myledger.component.scss'
})
export class RealEstateMyledgerComponent implements OnInit {
  constructor(private reportsservice:ReportsService){

  }
  SubscribersData:any;
  display = "none";
  Subscribers:subscribers[]=[
    {
      "ChitFund":"AJY39802/22",
      "BusinessValue":"4 Nov,2022",
      "Name":"Anjaiah Kummari",
      "Phone":9876543210,
      "EnrollDate":"20 Nav,2021",
      "Branch":"Habsiguda-2-CAO",
      "Group":"KHYTI8J",
      "TNO":23
     
    },
    {
      "ChitFund":"AJY39802/22",
      "BusinessValue":"4 Nov,2022",
      "Name":"Ramesh R",
      "Phone":9776443819,
      "EnrollDate":"9 Nav,2021",
      "Branch":"Habsiguda-2-CAO",
      "Group":"KHYTI7J",
      "TNO":29
     
    }
  ]
  ngOnInit(): void {
   this.reportsservice.getVacantChitsData().subscribe((data:any)=>{
    this.SubscribersData=data;
   })
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  
  
}


