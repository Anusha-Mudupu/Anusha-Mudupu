/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { LeadService } from 'src/app/lead.service';
import { LeadscreenService } from '../../leadscreen/leadscreen.service';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { Products } from 'src/app/chits-class';

@Component({
  selector: 'app-realestateaddproduct',
  standalone: true,
  imports: [CommonModule, ModalModule, NgSelectModule, TabsModule, FormsModule,
    ReactiveFormsModule, MatDialogModule, NgxPaginationModule],
  templateUrl: './realestateaddproduct.component.html',
  styleUrl: './realestateaddproduct.component.scss'
})
export class RealestateaddproductComponent {
  public leadsData: any;

  public listJsForm!: FormGroup;
  public submitted = false;
  public usersData: any;
  public ProductsData: Products[] = [];
  public display: any;
  public SourceData: any;
  public Sourcesubcategorydata: any;
  public agentid: any;
  public sourceid: any;
  public productForm!: FormGroup;
  public genderData: any;
  public educationData: any;
  public breadCrumbItems!: Array<{}>;
  public isMenuOpen: boolean = true; // Set it to true initially, assuming the menu is open by default
  public message: any;
  public categorydata: any;
  public subcategorydata: any;
  public verticalData1: any;
  picklistData:any;
  BusinessverticalData:any;
  enumConstants:any;
  verticalData:any;
  data:any;


  constructor(private _router: Router, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar,

    private leadscreenservice: LeadscreenService, private leadservice: LeadService,
    private userService: UsersService, private msterService: MastersService, private toastService: ToastrService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {

    this.leadservice.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;
      
      // Filter data based on enumCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.enumCode === "ProductCategory");
      
      console.log("this.verticalData", this.verticalData);
  
      // Access enumConstants array from verticalData
      if (this.verticalData1.length > 0) {
          this.enumConstants = this.verticalData1[0].enumConstants;
          console.log("enumConstants",this.enumConstants);
          // Now you can use enumConstants array as needed
      }
  })


    this.productForm = this.FormBuilder.group({
      name: ['',],
      amountPayable: [''],
      unitSize: ['',],
      rsdAmount: [''],

      minimumMonthlyRent: [''],
      area: [''],
      value: [''],
      categoryId: [''],
      subCategoryId: ['2'],

      vertical: 2

    });
    this.leadscreenservice.catergory().subscribe((data: any) => {
      this.categorydata = data;
      console.log("this.categorydata", this.categorydata)
    });
    this.leadscreenservice.subcatergory().subscribe((data: any) => {
      this.subcategorydata = data;
    });

  }

  //Saving Products
  onSubmit() {
    this.submitted = true;
    debugger;
    const content = this.productForm.getRawValue();
    this.leadservice.productadd(content).subscribe((res: any) => {
      debugger;
      console.log('Lead added successfully');
      console.log(res);
      this.showSuccess();
      this._router.navigate(['/real-estate/products'])


      this.display = "none";
    }, error => {

      this.showError();
    });
  }
  showSuccess() {
    this.toastService.success(' Product Created Successfully');
  }
  showError() {
    debugger
    this.toastService.error('Something is Wrong')
  }
  close() {
    debugger
    this._router.navigate(['/real-estate/products'])
  }

  /**
   * Form data get
   */
  get form() {
    return this.listJsForm.controls;
  }
}
