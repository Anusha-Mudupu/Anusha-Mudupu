/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { subscribers } from 'src/app/chits-class';
import { ReportsService } from '../Services/reports.service';

@Component({
  selector: 'app-subscribers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss'
})
export class SubscribersComponent {
  constructor(private reportsservice:ReportsService){

  }
  SubscribersData:any;
  display = "none";
  Subscribers:subscribers[]=[
    {
      "ChitFund":"5 Laksh Chit",
      "BusinessValue":"500,000",
      "Name":"Anjaiah Kummari",
      "Phone":9876543210,
      "EnrollDate":"20 Nav,2021",
      "Branch":"Habsiguda-2-CAO",
      "Group":"KHYTI8J",
      "TNO":23
     
    },
    {
      "ChitFund":"1 Laksh Chit",
      "BusinessValue":"100,000",
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
