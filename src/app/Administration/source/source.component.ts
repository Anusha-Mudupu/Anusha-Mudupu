/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { verticalData } from 'src/app/chits-class';
import { LeadService } from 'src/app/lead.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit {

  selectedIndex: number | null = null;
  public display = "none";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  selectedBusiness: string | null = null;
  public verticalData: any; realestateData: any;
  lookupConstantsrealestate: any;
  chitsFollowup: any;
  lookupConstantsChitsFollowup: any;
  realestateFollowup: any;
  lookupConstantsrealestateFollowup: any;
  ;
  picklistData: any;
  BusinessverticalData: any;
  lookupConstants: any;
  chitsData: any;
  lookupConstantsChits: any;
  constructor(private toastService: ToastrService, private masterService: MastersService, private leadService: LeadService) {
  }
  data: any;




  ngOnInit(): void {
    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      //business vertical
      this.verticalData = data.filter((item: any) => item.lookupCode === "BusinessVertical");
      console.log("this.verticalData", this.verticalData);
      if (this.verticalData.length > 0) {
        this.lookupConstants = this.verticalData[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);
      }
    })
  }
  selectedlookupCode: string | null = null;
  togglelookupCode(lookupCode: string, index: number): void {
    if (this.selectedlookupCode === lookupCode) {
      this.selectedlookupCode = null;
      this.selectedIndex = null;
    } else {
      this.selectedlookupCode = lookupCode;
      this.selectedIndex = index;
    }
  }

  getlookupConstants(lookupCode: string): any[] {
    const selectedData = this.data.find((item: any) => item.lookupCode === lookupCode);
    if (!selectedData) {
      return [];
    }

    const uniqueConstants = [];
    const uniqueValues = new Set();

    for (const constant of selectedData.lookupConstants) {
      if (!uniqueValues.has(constant.value)) {
        uniqueValues.add(constant.value);
        uniqueConstants.push(constant);
      }
    }

    return uniqueConstants;
  }
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  openEditPicklist() {
    this.display1 = "block";

  }
  onClosed() {
    this.display2 = "none";
  }
  onPickListValues() {
    this.display3 = "none";
  }
  onCreatePickListValues() {
    this.display3 = "block";
  }
  oncloseUpdatePickListValues() {
    this.display4 = "none";
  }
  onUpadtePicklistValues() {
    this.display4 = "block";

  }
  deleteForm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {

        Swal.fire({
          title: 'Deleted!',
          text: 'Email Data has been deleted.',
          icon: 'success',
          confirmButtonColor: 'rgb(3, 142, 220)',
        });

      }
    }, error => {
      this.toastService.error('Something went wrong while deleting the email.');
    });
  }



  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}
