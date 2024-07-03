/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from 'src/app/chits/Services/reports.service';
import { subscribers } from 'src/app/chits-class';

@Component({
  selector: 'app-real-estate-subscribers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './real-estate-subscribers.component.html',
  styleUrl: './real-estate-subscribers.component.scss'
})
export class RealEstateSubscribersComponent {
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
