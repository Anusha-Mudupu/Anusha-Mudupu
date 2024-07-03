/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent {
  units=[
    {
      productType:"Units",
      Group:"Units",
      product:"Shamshabad",
      Area:"1189",
      unit:"SFT",
      type:"2BHK",
      facing:"North",
      totalValue:"2,972,500"
    },
    {
      productType:"Units",
      Group:"Units",
      product:"Shamshabad",
      Area:"1209",
      unit:"SFT",
      type:"2BHK",
      facing:"East",
      totalValue:"3,022,500"
    }
  ]


}
