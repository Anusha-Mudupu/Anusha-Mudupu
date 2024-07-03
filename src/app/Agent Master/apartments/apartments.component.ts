/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersService } from 'src/app/chits/Services/masters.service';

@Component({
  selector: 'app-apartments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartments.component.html',
  styleUrl: './apartments.component.scss'
})
export class ApartmentsComponent implements OnInit{
  // Apartments=[
  //   {
  //     Name:"Nuziveedu",
  //     SFT:"1189 SFT",
  //     position:"2BHK North"
  //   },
  //   {
  //     Name:"Nuziveedu",
  //     SFT:"1209 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1209 SFT",
  //     position:"2BHK East"
  //   },
   
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1209 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1209 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1492 SFT",
  //     position:"2BHK West"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1492 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1248 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Nuziveedu",
  //     SFT:"1230 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1206 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1073 SFT",
  //     position:"2BHK East"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1048 SFT",
  //     position:"2BHK West"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1047 SFT",
  //     position:"2BHK West"
  //   },
  //   {
  //     Name:"Sangareddy-1",
  //     SFT:"1077 SFT",
  //     position:"2BHK East"
  //   }
  // ]
  // Apartments=[
  //   {
  //     productType:"Apartments",
  //     Group:"Apartments",
  //     product:"Nuziveedu",
  //     Area:"1189",
  //     unit:"SFT",
  //     type:"2BHK",
  //     facing:"North",
  //     totalValue:"2,972,500"
  //   },
  //   {
  //     productType:"Apartments",
  //     Group:"Apartments",
  //     product:"Nuziveedu",
  //     Area:"1209",
  //     unit:"SFT",
  //     type:"2BHK",
  //     facing:"East",
  //     totalValue:"3,022,500"
  //   }
  // ]
  CommercialData:any;
  ProductData:any;
  Apartments:any;
  
  constructor( private masterService:MastersService){
  
  }
  ngOnInit() {
   this.masterService.getRealEstateproducts().subscribe((data:any)=>{
    this.ProductData=data.data;
    this.Apartments=this.ProductData.filter((product:any)=>product.categoryCode==='apartments');
   });
  }
  
 

 





}
