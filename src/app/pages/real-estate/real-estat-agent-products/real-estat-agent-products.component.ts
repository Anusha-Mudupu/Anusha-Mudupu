/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealAgentProducts } from 'src/app/chits-class';

@Component({
  selector: 'app-real-estat-agent-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './real-estat-agent-products.component.html',
  styleUrl: './real-estat-agent-products.component.scss'
})
export class RealEstatAgentProductsComponent {
  display = 'none';
  display1 = 'none';
  display2 = 'none;'
  realAgentProducts: RealAgentProducts[] = [
    {
      "Name": "Commercial Space",
      "UnitsSize": "120",
      "Amountpayble": "2,400,000",
      "RSDAmount": "1800",
      "MinumumMontlyRent": "1800"
    },
    {
      "Name": "Commercial Space",
      "UnitsSize": "120",
      "Amountpayble": "3,600,000",
      "RSDAmount": "54,000",
      "MinumumMontlyRent": "27,000"
    },
    // {
    //   "Name":"Real Estate",
    //   "UnitsSize":"---",
    //   "Amountpayble":"---",
    //   "RSDAmount":0,
    //   "MinumumMontlyRent":"---"
    // },
    // {
    //   "Name":"Real Estate",
    //   "UnitsSize":"---",
    //   "Amountpayble":"---",
    //   "RSDAmount":0,
    //   "MinumumMontlyRent":"---"
    // }
  ]
  constructor() {

  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  openModal1() {
    this.display1 = "block";
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  onClosed() {
    this.display2 = "none";
  }
  openDelete() {
    this.display2 = "block";
  }
}
