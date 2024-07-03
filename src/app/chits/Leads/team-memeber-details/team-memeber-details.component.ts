/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadDetail } from 'src/app/chits-class';

@Component({
  selector: 'app-team-memeber-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-memeber-details.component.html',
  styleUrl: './team-memeber-details.component.scss'
})
export class TeamMemeberDetailsComponent implements OnInit {

  leadDetils:LeadDetail[] = [
    {
      "slno": 1,
      "LeadDate": '16-0ct-2020',
      "LeadName": 'Sunkari Ramesh Kumar',
      "ContactNo": 7654321890,
      "EmailId": "",
      "Source": 'DATACALLING',
      "SubSource": 'CALLING',
      "Query": 'Kkh',
      "NextFollowupDate": '29-Dec-2020',
      "NextFollowupThrough": 'EMAIL',
      "Status": 'LOST',
      "AssignTo": '',
    },
    {
      "slno": 2,
      "LeadDate": '8-0ct-2020',
      "LeadName": 'ANJALI adf',
      "ContactNo": 8654421890,
      "EmailId": "",
      "Source": 'DATACALLING',
      "SubSource": 'CALLING',
      "Query": 'hfdfyt',
      "NextFollowupDate": '29-Dec-2020',
      "NextFollowupThrough": 'EMAIL',
      "Status": 'LOST',
      "AssignTo": 'Anil',
    }
  ]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
