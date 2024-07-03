/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { LeadService } from '../Services/lead.service';
import { UsersService } from '../Services/users.service';
import { MastersService } from '../Services/masters.service';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Branch, Education, Gender, Profession, User } from 'src/app/chits-class';
import { MenuitemsService } from 'src/app/menuitems.service';
@Component({
  selector: 'app-create-lead',
  standalone: true,
  imports: [TabsModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-lead.component.html',
  styleUrl: './create-lead.component.scss'
})
export class CreateLeadComponent {
  public ChitLeadForm!: any;
  // public educationData!: Education;
  // public genderData!: Gender;
  public usersData: User[] = [];
  public ProductsData: any;
  public submitted: boolean = false;

  // public professionData!: Profession;
  // public brnachData: Branch[] = [];
  public statusData!: any;

  // public SourceData!: any;
  public SourceSubCategoryData!: any;
  filteredData: any;
  // selectedLabel: any;
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
  uniqueChitValues: any;
  durationProducts: any;
  data: any;
  LeadStatus: any;
  LeadStatusTypeenumConstants: any;
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


      this.LeadStatus = this.data.filter((item: any) => item.businessCode == "chits" && item.enumCode == "LeadStatus");
      console.log('raji', this.LeadStatus);
      if (this.LeadStatus.length > 0) {
        this.LeadStatusTypeenumConstants = this.LeadStatus[0].enumConstants.filter((item: any) => item.businessCode === "chits");
        console.log("LeadStatus enumConstants", this.LeadStatusTypeenumConstants);
      }

    });

   
    // this.ProductsData = this.leadservice.getUniqueChitValues();
    console.log('this.productsData', this.ProductsData)



    this.leadservice.getProductsData().subscribe(
      (data: any) => {
        this.ProductsData = data.data;
        console.log('data', this.ProductsData);
        this.fetchUniqueChitValues();
      },
      (error: any) => {
        console.error('There was an error!', error);
      }
    );
    this.role = localStorage.getItem('Rolename');
    if (this.role === 'Agent') {
      this.showAgentBranch = true;
    }

    this.ChitLeadForm = this.FormBuilder.group({
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
      chitValue: [],
      durationMonths: [],
      employeeName: '',
      status: null,
      verticalId: 1,

    });
    //    this.leadservice.getEducationData().subscribe((data: any) => {
    //   this.educationData = data;
    //   console.log('education data', this.educationData);
    // });
    // this.leadservice.getGenderData().subscribe((data: any) => {
    //   this.genderData = data;
    // });
    // this.msterService.getSourceDataUrl().subscribe((data: any) => {
    //   this.SourceData = data;
    // });
    // this.msterService.getSourcesubcategoryDataUrl().subscribe((data: any) => {
    //   this.SourceSubCategoryData = data;
    // });


    // this.leadservice.getProfessionData().subscribe((data: any) => {
    //   this.professionData = data;
    // });

    this.msterService.getCategoryData().subscribe((data: any) => {
      this.CategoryData = data;
      console.log("this.CategoryData", this.CategoryData)
    });

    // this.msterService.getBranchListData().subscribe((data: any) => {
    //   this.brnachData = data;
    // })


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

        return false;
      });

      console.log('this.filteredData', this.filteredData);

    });


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


  fetchUniqueChitValues(): void {
    this.leadservice.getUniqueChitValues().subscribe(
      (uniqueValues: any) => {
        this.uniqueChitValues = uniqueValues;
        console.log('Unique Chit Values:', this.uniqueChitValues);
      },
      (error: any) => {
        console.error('There was an error fetching unique chit values!', error);
      }
    );
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
      case "apartments":
        this.showApartmentArea = true;
        break;
      case "villas":
        this.showVillaArea = true;
        break;
      case "coworking":
        this.showcoworking = true;
        break;
      case "open plots":
        this.showOpenPlots = true;
        break;
      case "commercial units":
        this.showCommercialUnits = true;
        break;
      case "commercial space":
        this.showCommercialSpace = true;
        break;
      default:
        // If category code doesn't match any case, do nothing
        break;
    }
  }





  onChitValueChange(): void {
    const chitValue = this.ChitLeadForm.get('chitValue')?.value;
    console.log('chitValue:', chitValue);
    const chitValueNumber = parseInt(chitValue, 10);

    this.leadservice.getduration(chitValueNumber).subscribe(
      (durationProducts: any) => {
        this.durationByChitValue = durationProducts;
        console.log('Duration By Chit Value:', this.durationByChitValue);
      },
      (error: any) => {
        console.error('There was an error fetching duration products!', error);
      }
    );
  }





  onDurationChange() {
    this.selectedDuration = this.ChitLeadForm.get('durationMonths')?.value;
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

    return this.ChitLeadForm;


  }




  onSubmit() {
    this.submitted = true;
    if (this.ChitLeadForm.valid) {
      this.leadservice.createLead(this.ChitLeadForm.value).subscribe(
        (res: any) => {
          console.log('Lead added successfully');
          console.log(res);
          // Success message
          this.showSuccess();
          this.router.navigate(['/chits/Lead']);
        },
        (error) => {
          this.showError();
        }
      );
    }

  }

  close() {
    this.router.navigate(['/chits/Lead'])
  }
  showSuccess() {
    this.toastService.success(' Lead Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }



}