/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import * as Highcharts from 'highcharts';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MastersService } from 'src/app/chits/Services/masters.service';
@Component({
  selector: 'app-product-commercial-space',
  standalone: true,
  imports: [CommonModule, TabsModule,ReactiveFormsModule,FormsModule],
  templateUrl: './product-commercial-space.component.html',
  styleUrl: './product-commercial-space.component.scss'
})
export class ProductCommercialSpaceComponent {
  selectedOption: string = 'dakshin'; // Default selection
  // commercialTowers=[
  //   {
  //     floor:" Third Floor",
  //     SFT:"23275 SFT"
  //   },
  //   {
  //     floor:"Fourth Floor",
  //     SFT:"0 SFT"
  //   },
  //   {
  //     floor:"Eighth Floor",
  //     SFT:"775 "
  //   },
  //   {
  //     floor:"Ninth Floor",
  //     SFT:"0 SFT"
  //   },
  //   {
  //     floor:"Tenth Floor",
  //     SFT:"23275 SFT"
  //   },
  //   {
  //     floor:"Eleventh Floor",
  //     SFT:"23275 SFT"
  //   }
  //   ,  {
  //     floor:"Twelfth Floor",
  //     SFT:"23275 SFT"
  //   }
  //   ,  {
  //     floor:"Thirteenth Floor",
  //     SFT:"23275 SFT"
  //   }
  //   ,  {
  //     floor:"fourteenth Floor",
  //     SFT:"0 SFT"
  //   }
  //   ,
  //   {
  //     floor:"Fifteenth Floor ",
  //     SFT:"0 SFT"
  //   },
  //   {
  //     floor:"Sixteenth Floor ",
  //     SFT:"0 SFT"
  //   },
  //   {
  //     floor:"Seventeenth Floor",
  //     SFT:"0 SFT"
  //   },
  //   {
  //     floor:"Sixth Floor",
  //     SFT:"23275 SFT"
  //   },
  //   {
  //     floor:"Second Floor",
  //     SFT:"23275 SFT"
  //   },
  //   {
  //     floor:"Fifth Floor ",
  //     SFT:"23275 SFT"
  //   },
  //   {
  //     floor:"Seventh Floor",
  //     SFT:"775 SFT"
  //   },
  //   {
  //     floor:"Ground Floor",
  //     SFT:" 15516 SFT"
  //   },
  //   {
  //     floor:"First Floor",
  //     SFT:"11880 SFT"
  //   }
  // ]
  commercialTowers=[
  {
    productType:"Commercial Towers",
    Group:"DAKSHIN-IT BLOCK",
    product:"Third Floor",
    Area:"1189",
    unit:"SFT",
    type:"2BHK",
    facing:"North",
    totalValue:"2,972,500",
    FloorNo:"3",
    FloorUnit:"193",
    UnitValue:"960000"
  },
  {
    productType:"Commercial Towers",
    Group:"DAKSHIN-IT BLOCK",
    product:"Fourth",
    Area:"1209",
    unit:"SFT",
    type:"2BHK",
    facing:"East",
    totalValue:"3,022,500",
    FloorNo:"4",
    FloorUnit:"0",
    UnitValue:"0"
  }
]
   
    
CommercialData:any;
ProductData:any;
constructor( private masterService:MastersService){

}
ngOnInit() {
 this.masterService.getRealEstateproducts().subscribe((data:any)=>{
  this.ProductData=data.data;
  this.CommercialData=this.ProductData.filter((product:any)=>product.categoryCode==='commercial_towers');
 });
}   
   
       
 
        
     
  
 

}
