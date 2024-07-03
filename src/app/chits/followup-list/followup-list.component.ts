/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadService } from '../Services/lead.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-followup-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './followup-list.component.html',
  styleUrl: './followup-list.component.scss'
})
export class FollowupListComponent implements OnInit{
  followupData:any;
  sortedFollowups:any;
  latestFollowup:any;
  latestFollowupsMap: Map<number, any> = new Map<number, any>();
  
  constructor(private _router:Router,private leadservice:LeadService){

  }
 
  ngOnInit(): void {
    // this.leadservice.getfollowup().subscribe((data:any)=>{
    //  this.followupData = data;
    //  this.sortedFollowups = this.followupData.sort((a: any, b: any) => {
    //   return new Date(b.nextFollowUpDate).getTime() - new Date(a.nextFollowUpDate).getTime();
    // });
    // this.latestFollowup=this.sortedFollowups[0];
    // console.log('this.latestFollowup',this.latestFollowup);
    // console.log('this.sortedFollowups',this.sortedFollowups);
    // });
    this.leadservice.getfollowup().subscribe((data: any) => {
      // Assuming data is an array of follow-up objects
      data.forEach((followup: any) => {
        const leadId = followup.leadid;
        if (!this.latestFollowupsMap.has(leadId) || new Date(followup.nextFollowUpDate) > new Date(this.latestFollowupsMap.get(leadId).nextFollowUpDate)) {
          this.latestFollowupsMap.set(leadId, followup);
        }
      });
    });
  
   
  }
  openView(leadid:any){
    this._router.navigate(['/chits/followup-view',leadid])
  }
}
