/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LeadService } from '../Services/lead.service';
import { UsersService } from '../Services/users.service';
import { MastersService } from '../Services/masters.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Branch, Education, Followup, Gender, Lead, Profession, User } from 'src/app/chits-class';
import { ToastrService } from 'ngx-toastr';
import { MenuitemsService } from 'src/app/menuitems.service';
@Component({
  selector: 'app-update-lead',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TabsModule, CommonModule],
  templateUrl: './update-lead.component.html',
  styleUrl: './update-lead.component.scss'
})
export class UpdateLeadComponent implements OnInit {
  public leadsData: Lead[] = [];
  // public educationData: Education[] = [];
  // public genderData: Gender[] = [];
  // public usersData: User[] = [];
  public ProductsData: any;
  public leadDataById!: Lead;


  public id: any;
  public chitsupdateLeadForm!: FormGroup;


  // public professionData: Profession[] = [];
  // public branchData: Branch[] = [];
  // selectedBranch:any;
  public statusData!: any;
  // selectedStatus:any;
  // selectedEmployee:any;
  public followupget: Followup[] = [];
  public SourceData!: any;
  public Sourcesubcategorydata!: any;
  public fallowUpTypeData: any;
  selectedLabel: any;
  filteredData: any;
  role: any;
  showAgentBranch: boolean = false;
  CategoryData: any;

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
  durationByChitValue: any;
  selectedDuration: any;


  constructor(private FormBuilder: FormBuilder, private router: Router, private leadservice: LeadService, private userService: UsersService, private msterService: MastersService,
    private activated: ActivatedRoute, public toastService: ToastrService, private menuitemservice: MenuitemsService) {
    // this.id = data.id;
    this.menuitemservice.getSelectedLabel().subscribe(label => {
      this.selectedLabel = label;

      console.log('Selected Label:', this.selectedLabel);
    });
    console.log('iddddddd', this.id);

    this.ProductsData = this.leadservice.getUniqueChitValues();
    console.log('this.productsData', this.ProductsData)
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id', this.id);

    });


    this.chitsupdateLeadForm = this.FormBuilder.group({
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
      ProductName: [],
      tenureInMonths: [],
      employeeName: '',
      status: null,
      verticalId: 1,

    });





    this.leadservice.getLeadDataById(this.id).subscribe((data: any) => {
      this.leadDataById = data;

      this.chitsupdateLeadForm.controls['leadName'].setValue(data.leadName);
      this.chitsupdateLeadForm.controls['emailId'].setValue(data.emailId);
      this.chitsupdateLeadForm.controls['contactNo'].setValue(data.contactNo);
      this.chitsupdateLeadForm.controls['dob'].setValue(data.dob);
      this.chitsupdateLeadForm.controls['assignTo'].setValue(data.assignTo);
      this.chitsupdateLeadForm.controls['productId'].setValue(data.productId);
      this.chitsupdateLeadForm.controls['sourceId'].setValue(data.sourceId);
      this.chitsupdateLeadForm.controls['sourceSubCategoryId'].setValue(data.sourceSubCategoryId);
      this.chitsupdateLeadForm.controls['address'].setValue(data.address);
      this.chitsupdateLeadForm.controls['employeeName'].setValue(data.employeeName);
      this.chitsupdateLeadForm.controls['branchId'].setValue(data.branchId);
      this.id = data.id;
      console.log('leads data', this.leadsData);
      console.log('leadbyid', this.leadDataById);
    });



    this.leadservice.getAllLeadsData().subscribe((data: any) => {
      this.leadsData = data;
      console.log('leads data', this.leadsData);
    })
    this.msterService.getSourceDataUrl().subscribe((data: any) => {
      this.SourceData = data;
    });
    this.msterService.getSourcesubcategoryDataUrl().subscribe((data: any) => {
      this.Sourcesubcategorydata = data;
    });

    // this.leadservice.getEducationData().subscribe((data: any) => {
    //   this.educationData = data;
    //   console.log('education data', this.educationData);
    // });
    // this.leadservice.getGenderData().subscribe((data: any) => {
    //   this.genderData = data;
    // });

    // this.userService.getUserListData().subscribe((data: any) => {
    //   this.usersData = data.data;
    //   console.log('userListData', this.usersData);
    // });


    // this.leadservice.getProfessionData().subscribe((data: any) => {
    //   this.professionData = data;
    // });

    // this.msterService.getAgentProductsData().subscribe((data: any) => {
    //   this.ProductsData = data;

    //   console.log('ProductListData', this.ProductsData);
    //   // console.log('selected product', this.selectedProduct)
    // });

    // this.msterService.getBranchListData().subscribe((data: any) => {
    //   this.branchData = data;
    // });
    this.leadservice.getStatusData().subscribe((data: any) => {
      this.statusData = data;
    });


    this.msterService.getFollowUpThrough().subscribe((data: any) => {
      this.fallowUpTypeData = data;
    });

    this.leadservice.getfollowupbyid(this.id).subscribe((data: any) => {
      debugger

      this.followupget = data.map((item: any) => {
        // Convert the string to a Date object
        const nextFollowupDate = new Date(item.nextFollowUpDate);

        // Format the date
        const formattedDate = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        }).format(nextFollowupDate);

        // Update the item with the formatted date
        return {
          ...item,
          nextFollowUpDate: formattedDate
        };
      });

    });
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


  ngOnInit() {
    this.role = localStorage.getItem('Rolename');
    if (this.role === 'Agent') {
      this.showAgentBranch = true;
    }
    this.msterService.getCategoryData().subscribe((data: any) => {
      this.CategoryData = data;
      console.log("this.CategoryData", this.CategoryData)
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

        break;
    }
  }

  updateFormBasedOnLabel(): any {

    return this.chitsupdateLeadForm;


  }

  saveUpdateLeadData() {


    this.leadservice.updateLeadData(this.id, this.chitsupdateLeadForm.value).subscribe(data => {
      console.log(data);

      this.showSuccess();
      return this.router.navigate(['/chits/Lead'])


    }, error => {
      this.showError();
    });

  }




  onChitValueChange() {
    const chitValue = this.chitsupdateLeadForm.get('ProductName')?.value;
    console.log('Product Name:', chitValue);
    const chitValueNumber = parseInt(chitValue, 10);
    this.durationByChitValue = this.leadservice.getduration(chitValueNumber);
    console.log('Duration By Chit Value:', this.durationByChitValue);
  }



  onDurationChange() {
    this.selectedDuration = this.chitsupdateLeadForm.get('tenureInMonths')?.value;
  }





  Cancel() {
    return this.router.navigate(['/chits/Lead'])
  }




  showSuccess() {
    this.toastService.success(' Lead Updated Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
}