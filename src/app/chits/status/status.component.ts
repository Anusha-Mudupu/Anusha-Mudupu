/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadService } from '../Services/lead.service';
import { MastersService } from '../Services/masters.service';
@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent  implements OnInit{
  statusData: any;
  filteredStatusData: any;
  display = "none";
 verticalData:any;
 
  constructor(private leadservice: LeadService,private masterService:MastersService,){

  }
  ngOnInit(): void {
    this.masterService.getBusinessVerticalData().subscribe((data:any)=>{
      this.verticalData=data;
      console.log(" this.verticalData", this.verticalData)
   })
    this.statusData = this.leadservice.getLeadSatus().subscribe((data: any) => {
      console.log("this.statusData", data);
      // Filter out active statuses
      this.filteredStatusData = data.filter((title: any) => title.active === true);
      // Order statuses
      this.filteredStatusData.sort((a:any, b:any) => a.id - b.id);
      console.log("this.filteredStatusData", this.filteredStatusData);
    });
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  }


