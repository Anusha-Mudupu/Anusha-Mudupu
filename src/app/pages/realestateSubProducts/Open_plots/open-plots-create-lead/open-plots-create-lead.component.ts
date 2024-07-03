/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { LeadService } from 'src/app/chits/Services/lead.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { MastersService } from 'src/app/chits/Services/masters.service';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Branch, Education, Gender, Profession, User } from 'src/app/chits-class';
import { MenuitemsService } from 'src/app/menuitems.service';

@Component({
  selector: 'app-open-plots-create-lead',
  standalone: true,
  imports: [TabsModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './open-plots-create-lead.component.html',
  styleUrl: './open-plots-create-lead.component.scss'
})
export class OpenPlotsCreateLeadComponent {
  public ChitLeadForm!: any;
  realestateLeadForm: any;
  adminLeadForm!: FormGroup;
  public educationData!: Education;
  public genderData!: Gender;
  public usersData: User[] = [];
  public ProductsData: any;
  public submitted: boolean = false;
  // currentTab: any = "developers";
  public professionData!: Profession;
  public brnachData: Branch[] = [];
  public statusData!: any;

  public SourceData!: any;
  public SourceSubCategoryData!: any;
  filteredData: any;
  selectedLabel: any;
  role: any;
  showAgentBranch: boolean = false;
  CategoryData: any;
  productTypes: string[] = [];
  productsByType: any[] = [];
  productByFacing: any[] = []
  selectedProductType: string = '';
  selectedProduct: string = '';
  durationByChitValue: any;
  selectedDuration: any;
  productCategory: any;
  productFacing: any;
  apartType: any;
  villaType: any;
  apartmentArea: any;
  filteredApartments: any;
  showApartmentType: boolean = false;
  showVillaType: boolean = false;
  showApartmentArea: boolean = false;
  showVillaArea: boolean = false;
  filterVillasArea: any;
  coworking: any;
  openPlots: any;
  showcoworking: boolean = false;
  showOpenPlots: boolean = false
  commercialSpace: any;
  commercialUnits: any;
  showCommercialUnits: boolean = false;
  showCommercialSpace: boolean = false;
  floorUnit: any;
  selectedFloorNo: any;
  selectedUnit: any;
  public verticalData1: any;
  picklistData: any;
  BusinessverticalData: any;
  lookupConstants: any;
  verticalData: any;
  data: any;
  facinglookupConstants: any;
  villaTypelookupConstants: any;
  productsType: any;
  productsTypelookupConstants: any;
  LeadStatusTypelookupConstants: any;
  LeadStatus: any;
  leadSourceData: any;
  selectedSource: any;
  constructor(private router: Router, private leadservice: LeadService, private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder, public toastService: ToastrService, private menuitemservice: MenuitemsService) {

  }



  ngOnInit() {
    this.leadservice.getLeadSource().subscribe((data: any) => {
      this.leadSourceData = data.data;
      console.log('leadSourceData', this.leadSourceData);
    });

    this.leadservice.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

      // Filter data based on lookupCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.lookupCode === "ProductCategory");
      this.productFacing = data.filter((item: any) => item.lookupCode === "PropertyFacing");
      this.villaType = data.filter((item: any) => item.lookupCode === "VillaType");
      this.productsType = data.filter((item: any) => item.lookupCode === "PropertyType")
      this.LeadStatus = data.filter((item: any) => item.lookupCode === "LeadStatus")
      console.log("this.verticalData", this.verticalData);
      console.log("this.productFacing", this.productFacing)
      //  
      this.LeadStatus = this.data.filter((item: any) => item.businessCode == "real-estate" && item.lookupCode == "LeadStatus");
      console.log('LeadStatus', this.LeadStatus);
      if (this.LeadStatus.length > 0) {
        this.LeadStatusTypelookupConstants = this.LeadStatus[0].lookupConstants.filter((item: any) => item.businessCode === "real-estate");
        console.log("LeadStatus lookupConstants", this.LeadStatusTypelookupConstants);
      }

      if (this.productsType.length > 0) {
        this.productsTypelookupConstants = this.productsType[0].lookupConstants;
        console.log("facinglookupConstants", this.productsTypelookupConstants);

      }
      if (this.productFacing.length > 0) {
        this.facinglookupConstants = this.productFacing[0].lookupConstants;
        console.log("facinglookupConstants", this.facinglookupConstants);

      }
      if (this.villaType.length > 0) {
        this.villaTypelookupConstants = this.villaType[0].lookupConstants;
        console.log("facinglookupConstants", this.villaTypelookupConstants);

      }
      if (this.verticalData1.length > 0) {
        this.lookupConstants = this.verticalData1[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);

      }
    })
  



  
    this.ProductsData = this.leadservice.getUniqueChitValues();
    console.log('this.productsData', this.ProductsData)
    this.role = localStorage.getItem('Rolename');
    if (this.role === 'Agent') {
      this.showAgentBranch = true;
    }



    this.realestateLeadForm = this.FormBuilder.group({
      leadName: ['', Validators.compose([Validators.required])],
      contactNo: ['', Validators.compose([Validators.required])],
      emailId: ['', Validators.compose([Validators.required])],
      address: '',
      assignTo: null,
      leadDate: [new Date().toISOString().slice(0, 19) + 'Z', Validators.required],
      loginUserId: '1',
      enquiredDate: [new Date().toISOString().slice(0, 19) + 'Z', Validators.required],
      Profession: '',
      Product: '',
      gender: '',
      dob: '',
      education: '',
      avgIncome: '',
      branchId: null,
      productId: null,
      ProductName: '',
      employeeName: '',
      status: null,
      verticalId: 2,
      productType: ['', Validators.required],
      product: ['', Validators.required],
      facing: ['', Validators.required],
      Type: ['', Validators.required],
      Area: ['', Validators.required],

    });
    this.leadservice.getEducationData().subscribe((data: any) => {
      this.educationData = data;
      console.log('education data', this.educationData);
    });
    this.leadservice.getGenderData().subscribe((data: any) => {
      this.genderData = data;
    });
    this.msterService.getSourceDataUrl().subscribe((data: any) => {
      this.SourceData = data;
    });
    // this.msterService.getSourcesubcategoryDataUrl().subscribe((data: any) => {
    //   this.SourceSubCategoryData = data;
    // });


    this.leadservice.getProfessionData().subscribe((data: any) => {
      this.professionData = data;
    });

    this.msterService.getCategoryData().subscribe((data: any) => {
      this.CategoryData = data;
      console.log("this.CategoryData", this.CategoryData)
    });

    this.msterService.getBranchListData().subscribe((data: any) => {
      this.brnachData = data;
    })


    this.userService.getUserListData().subscribe((data: any) => {
      this.usersData = data.data;
      console.log('userListData', this.usersData);
    });


    //Get agent product
    // this.msterService.getAgentProductsData().subscribe((data: any) => {
    //   this.ProductsData = data;
    //   console.log('ProductListData', this.ProductsData);
    // });

    this.msterService.getstatus().subscribe((data: any) => {
      this.statusData = data;
      console.log('this.statusData', this.statusData);

      this.filteredData = this.statusData.filter((item: any) => {
        const validNames = ['COLD', 'WARM', 'HOT', 'BOOKED'];

        if (item && typeof item.title === 'string') {
          const lowercaseTitle = item.title.toLowerCase();
          return validNames.map(name => name.toLowerCase()).includes(lowercaseTitle);
        }

        return false; // Exclude items with undefined/null title or non-string title
      });

      console.log('this.filteredData', this.filteredData);

    });


  }
  onFloorNoChange(event: any) {
    this.selectedFloorNo = event.target.value;
    console.log("this.selectedFloorNo", this.selectedFloorNo);
  }

  getFloorUnit() {
    const selectedUnit = this.commercialUnits.find((unit: any) => unit.floorNo === this.selectedFloorNo);
    return selectedUnit ? selectedUnit.floorUnit : '';
  }

  onProductTypeChange(event: any) {
    const categoryCode = event.target.value;
    console.log("categoryCode", categoryCode);

    // Reset all flags to false initially
    this.showApartmentArea = false;
    this.showVillaArea = false;
    this.showcoworking = false;
    this.showOpenPlots = false;
    this.showCommercialUnits = false;
    this.showCommercialSpace = false;

    // Set the flag based on the selected category code
    switch (categoryCode) {
      case "Apartments":
        this.showApartmentArea = true;
        break;
      case "Villas":
        this.showVillaArea = true;
        break;
      case "coworking":
        this.showcoworking = true;
        break;
      case "Open Plots":
        this.showOpenPlots = true;
        break;
      case "CommercialUnitsLease":
        this.showCommercialUnits = true;
        break;
      case "CommercialSpaces":
        this.showCommercialSpace = true;
        break;
      default:
        // If category code doesn't match any case, do nothing
        break;
    }
  }



  onProductChange() {
    this.selectedProduct = this.realestateLeadForm.get('product').value;
    console.log("this.selectedProduct", this.selectedProduct)
  }
  onSourceChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedIndex = target.selectedIndex - 1;
    if (selectedIndex >= 0 && this.leadSourceData[selectedIndex]) {
      this.selectedSource = this.leadSourceData[selectedIndex];
      this.SourceSubCategoryData = this.selectedSource.sourceSubs;
      console.log('selectedSource', this.selectedSource);
      console.log('SourceSubCategoryData', this.SourceSubCategoryData);
    } else {
      console.error('Invalid selection or leadSourceData not defined');
    }
  }
  /**
     * Form data get
     */
  // listJsForm: any
  // get form() {
  //   return this.listJsForm.controls;
  // }
  //Create lead method
  CreateFormBasedOnLabel(): any {

    return this.realestateLeadForm;

  }




  onSubmit() {
    this.submitted = true;
    console.log('entered into reaestae condition');
    this.leadservice.createLead(this.realestateLeadForm.value).subscribe(
      (res: any) => {
        console.log('Lead added successfully');
        console.log(res);
        // Success message
        this.showSuccess();
        this.router.navigate(['/real-estate/open-plots-leads']);
      },
      (error) => {
        this.showError();
      }
    );

  }

  close() {
    this.router.navigate(['/real-estate/open-plots-leads']);
  }
  showSuccess() {
    this.toastService.success(' Lead Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  // changeTab(tab: string) {
  //   this.currentTab = tab;
  // }

}
