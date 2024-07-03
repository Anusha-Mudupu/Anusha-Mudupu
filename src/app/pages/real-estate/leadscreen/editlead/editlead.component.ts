/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { LeadService } from 'src/app/chits/Services/lead.service';


import { MastersService } from 'src/app/chits/Services/masters.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Branch, Education, Followup, Gender, Lead, Products, Profession, Source, Status, SubCatergory, User } from 'src/app/chits-class';
import { ToastrService } from 'ngx-toastr';
import { LeadscreenService } from 'src/app/pages/real-estate/leadscreen/leadscreen.service';
import { CommonModule } from '@angular/common';
import { MenuitemsService } from 'src/app/menuitems.service';

@Component({

  selector: 'app-editlead',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TabsModule, CommonModule],
  templateUrl: './editlead.component.html',
  styleUrl: './editlead.component.scss'
})
export class EditleadComponent {
  public leadsData: Lead[] = [];
  public educationData: Education[] = [];
  public genderData: Gender[] = [];
  public usersData: User[] = [];
  public ProductsData: Products[] = [];
  public leadDataById!: Lead;

  //  public selectedProduct:any;
  public id: any;

  public realestateupdateLeadForm!: FormGroup;

  // prodctId: any;
  public professionData: Profession[] = [];
  public branchData: Branch[] = [];
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


  constructor(private FormBuilder: FormBuilder, private router: Router, private leadservice: LeadService, private msterService: MastersService,
    private activated: ActivatedRoute, public toastService: ToastrService, private menuitemservice: MenuitemsService) {
    // this.id = data.id;

    console.log('iddddddd', this.id);


    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id', this.id);

    });


    this.realestateupdateLeadForm = this.FormBuilder.group({
      id: this.id,
      leadName: ['', Validators.compose([Validators.required])],
      contactNo: ['', Validators.compose([Validators.required])],
      emailId: ['', Validators.compose([Validators.required])],
      address: '',
      assignTo: '',
      leadDate: '2024-03-04T08:11:03.901Z',
      loginUserId: '1',

      enquiredDate: '2024-03-04T08:11:03.901Z',
      // sourceId: '3',
      // sourceSubCategoryId: '4',
      Profession: '',
      Product: '',
      gender: '',
      dob: '',
      education: '',
      avgIncome: '',
      branchId: '',
      branchName: '',
      productId: '',
      ProductName: '',
      employeeName: '',
      verticalId: '2',
      // status:'',


    });





    this.leadservice.getLeadDataById(this.id).subscribe((data: any) => {
      this.leadDataById = data;

      this.realestateupdateLeadForm.controls['leadName'].setValue(data.leadName);
      this.realestateupdateLeadForm.controls['emailId'].setValue(data.emailId);
      this.realestateupdateLeadForm.controls['contactNo'].setValue(data.contactNo);
      this.realestateupdateLeadForm.controls['dob'].setValue(data.dob);
      this.realestateupdateLeadForm.controls['assignTo'].setValue(data.assignTo);
      this.realestateupdateLeadForm.controls['productId'].setValue(data.productId);
      // this.updateLeadForm.controls['sourceId'].setValue(data.sourceId);
      // this.updateLeadForm.controls['sourceSubCategoryId'].setValue(data.sourceSubCategoryId);
      this.realestateupdateLeadForm.controls['address'].setValue(data.address);
      this.realestateupdateLeadForm.controls['employeeName'].setValue(data.employeeName);
      this.realestateupdateLeadForm.controls['branchId'].setValue(data.branchId);
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

    this.leadservice.getEducationData().subscribe((data: any) => {
      this.educationData = data;
      console.log('education data', this.educationData);
    });
    this.leadservice.getGenderData().subscribe((data: any) => {
      this.genderData = data;
    });

    // this.userService.getUserListData().subscribe((data: any) => {
    //   this.usersData = data.data;
    //   console.log('userListData', this.usersData);
    // });


    this.leadservice.getProfessionData().subscribe((data: any) => {
      this.professionData = data;
    })

    this.msterService.getAgentProductsData().subscribe((data: any) => {
      this.ProductsData = data;

      console.log('ProductListData', this.ProductsData);
      // console.log('selected product', this.selectedProduct)
    });

    this.msterService.getBranchListData().subscribe((data: any) => {
      this.branchData = data;
    });
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

        return false; // Exclude items with undefined/null title or non-string title
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
        // If category code doesn't match any case, do nothing
        break;
    }
  }
  // saveUpdateLeadData() {
  //   this.leadservice.updateLeadData(this.id, this.chitsupdateLeadForm.value).subscribe(data => {
  //     console.log(data);

  //     this.showSuccess();
  //     return this.router.navigate(['/chits/Lead'])


  //   }, error => {
  //     this.showError();
  //   });
  // }
  updateFormBasedOnLabel(): any {

    return this.realestateupdateLeadForm;

  }

  saveUpdateLeadData() {



    console.log('entered into reaestae condition');
    this.leadservice.updateLeadData(this.id, this.realestateupdateLeadForm.value).subscribe(data => {
      console.log(data);

      this.showSuccess();
      return this.router.navigate(['/real-estate/leadrealestate']);


    }, error => {
      this.showError();
    });


  }








  Cancel() {
    this.router.navigate(['/real-estate/leadrealestate']);
  }




  showSuccess() {
    this.toastService.success(' Lead Updated Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
}
