/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incentives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incentives.component.html',
  styleUrl: './incentives.component.scss'
})
export class IncentivesComponent implements OnInit {
  incentivelist=[
    {
      businessVertical:"chits",
      Year:'2024',
      month:'Jan',
      points:'#',
      Eligible:'#',
      claimed:'#',
      balance:'#',
      NewBusiness:'#',
      Allowance:'#'
    },
    {
      businessVertical:"Real Estate",
      Year:'2024',
      month:'Feb',
      points:'#',
      Eligible:'#',
      claimed:'#',
      balance:'#',
      NewBusiness:'#',
      Allowance:'#'
    },
    
    
  ]
  ngOnInit(): void {
   
  }

}
