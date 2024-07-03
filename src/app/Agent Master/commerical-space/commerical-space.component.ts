/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersService } from 'src/app/chits/Services/masters.service';

@Component({
  selector: 'app-commerical-space',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commerical-space.component.html',
  styleUrl: './commerical-space.component.scss'
})
export class CommericalSpaceComponent {
commericalSpace=[
  {
    productType:"Commercial Space",
    Location:"Hyderabad",
    Group:"Commercial Space",
    product:"Space 1",
    Area:"1189",
    unit:"SFT",
    type:"2BHK",
    facing:"North",
    totalValue:"2,972,500",
    MonthRSDAmount:"18000",
    MinMonthRent:"54000"
  },
  {
    productType:"Commercial Space",
    Location:"Hyderabad",
    Group:"Commercial Space",
    product:"Space 2",
    Area:"1209",
    unit:"SFT",
    type:"2BHK",
    facing:"East",
    totalValue:"3,022,500",
    MonthRSDAmount:"18000",
    MinMonthRent:"27000"
  }
];
CommercialData:any;
ProductData:any;
constructor( private masterService:MastersService){

}
ngOnInit() {
 this.masterService.getRealEstateproducts().subscribe((data:any)=>{
  this.ProductData=data.data;
  this.CommercialData=this.ProductData.filter((product:any)=>product.categoryCode==='commercial_space');
 });
}
}

