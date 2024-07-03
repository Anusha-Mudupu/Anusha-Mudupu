/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { LeadService } from 'src/app/chits/Services/lead.service';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upload-leads',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './upload-leads.component.html',
  styleUrl: './upload-leads.component.scss'
})
export class UploadLeadsComponent implements OnInit {
  selectedFile: File | null = null;
  verticalData: any;
  productCategory: any;
  id: any;
  showProductCategory: boolean = false;
  fileErrorMessage: string = '';
  public verticalData1: any;
  lookupConstants: any;
  data: any;
  productCategorylookupConstants: any;
  constructor(private leadService: LeadService, private masterService: MastersService, private leadservice: LeadService,) {
    this.masterService.getBusinessVerticalData().subscribe((data: any) => {
      this.verticalData = data;
      console.log(" this.verticalData", this.verticalData)
    })
  }
  ngOnInit() {

    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

      // Filter data based on lookupCode being "BusinessVertical"
      this.verticalData1 = this.data.filter((item: any) => item.lookupCode === "BusinessVertical");
      this.productCategory = this.data.filter((item: any) => item.lookupCode === "ProductCategory");
      console.log("this.verticalData", this.verticalData);

      // Access lookupConstants array from verticalData
      if (this.verticalData1.length > 0) {
        this.lookupConstants = this.verticalData1[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);
        // Now you can use lookupConstants array as needed
      }
      if (this.productCategory.length > 0) {
        this.productCategorylookupConstants = this.productCategory[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);

      }
    })



  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const fileExtension = this.selectedFile.name.split('.').pop()?.toLowerCase();
      const allowedExtensions = ['xlsx', 'xls', 'csv'];

      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        this.fileErrorMessage = 'Invalid file type. Please upload an Excel or CSV file.';
        event.target.value = '';
      } else {
        this.fileErrorMessage = '';

      }
    } else {
      this.fileErrorMessage = 'No file selected.';
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      console.log('Selected File:', this.selectedFile);
      this.selectedFile = null;
    }
  }
  onvericalData(event: any) {
    const verticalData = event.target.value;
    console.log("verticalData", verticalData)
    if (verticalData == "real-estate") {
      this.showProductCategory = true
    }
    else {
      this.showProductCategory = false;

    }
  }
}
