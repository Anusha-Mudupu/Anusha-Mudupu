/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadService } from 'src/app/chits/Services/lead.service';


@Component({
  selector: 'app-real-estate-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './real-estate-status.component.html',
  styleUrl: './real-estate-status.component.scss'
})
export class RealEstateStatusComponent implements OnInit {
  statusData: any;
  filteredStatusData: any;
  display = "none";
  constructor(private leadservice: LeadService) {

  }
  ngOnInit(): void {
    this.leadservice.getLeadSatus().subscribe((data: any) => {
      console.log("this.statusData", data);
      this.statusData = data
      // Filter out active statuses
      this.filteredStatusData = data.filter((title: any) => title.active === true);
      // Order statuses
      this.filteredStatusData.sort((a: any, b: any) => a.id - b.id);
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


