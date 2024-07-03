/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { Validators } from 'ngx-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';
// import { LeadService } from 'src/app/lead.service';
import { LeadscreenService } from 'src/app/pages/real-estate/leadscreen/leadscreen.service';
import { LeadService } from 'src/app/chits/Services/lead.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Education, Gender, Lead, Products, Source, SubCatergory, User } from 'src/app/chits-class';
// import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
// ngx-toastr

@Component({
  selector: 'app-add-lead',
  standalone: true,
  imports: [CommonModule, ModalModule, NgSelectModule, TabsModule, FormsModule,
    ReactiveFormsModule, MatDialogModule, NgxPaginationModule],
  templateUrl: './add-lead.component.html',
  styleUrl: './add-lead.component.scss'
})
export class AddLeadComponent {
  public leadsData: Lead[] = [];
  public Status = "Created";
  public Branch = "Hyderabad";
  listJsForm: any;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  public submitted = false;
  public usersData: User[] = [];
  public ProductsData: Products[] = [];
  // display: any;
  public SourceData: Source[] = [];
  public Sourcesubcategorydata: SubCatergory[] = [];
  public agentid: any;
  public sourceid: any;
  public LeadForm!: FormGroup;
  public genderData!: Gender;
  public educationData!: Education;
  public breadCrumbItems!: Array<{}>;
  statusData: any;
  titlesToFilter: any = ["COLD", "HOT", "WARM", "BOOKED"];

  // error: { timeOut: number; };
  isMenuOpen: boolean = true; // Set it to true initially, assuming the menu is open by default
  message: string = '';
  filteredData: any;
  verticalid: any;


  constructor(private appRoute: ActivatedRoute,private _router: Router, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar,

    private leadservice: LeadService,
    private userService: UsersService, private msterService: MastersService, private toastService: ToastrService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.verticalid = this.appRoute.snapshot.params['verticalid'];
        console.log("this.verticalid",this.verticalid)
   
    //  this.breadCrumbItems = [{ label: 'Administration' }, { label: 'Basic Elements', active: true }];

    this.LeadForm = this.FormBuilder.group({
      leadName: ['', Validators.compose([Validators.required])],
      contactNo: [''],
      emailId: ['', Validators.compose([Validators.required])],
      address: [''],
      assignTo: null,
      leadDate: '2024-03-04T08:11:03.901Z',
      loginUserId: '1',

      enquiredDate: '2024-03-04T08:11:03.901Z',
      sourceId: ['', Validators.compose([Validators.required])],
      sourceSubCategoryId: ['', Validators.compose([Validators.required])],
      dob: '',
      productId: null,
      employeeName: '',
      verticalId: '2',
      status: ['', Validators.compose([Validators.required])]
    });



    // Add a method to toggle the menu state

    this.leadservice.getAllLeadsData().subscribe((data: any) => {
      this.leadsData = data;
      console.log('leads data', this.leadsData);
    })

    this.leadservice.getEducationData().subscribe((data: any) => {
      this.educationData = data;
      console.log('education data', this.educationData);
    });
    this.leadservice.getGenderData().subscribe((data: any) => {
      this.genderData = data;
    });

    this.userService.getUserListData().subscribe((data: any) => {
      this.usersData = data.data;
      console.log('userListData', this.usersData);
    });

    this.msterService.getAgentProductsData().subscribe((data: any) => {
      this.ProductsData = data;
      console.log('ProductListData', this.ProductsData);
    });
    this.leadservice.getAllLeadsData().subscribe((data: any) => {

      this.leadsData = data;
    })
    this.userService.getUserListData().subscribe((data: any) => {
      this.usersData = data.data;
    });
    this.msterService.getAgentProductsData().subscribe((data: any) => {
      this.ProductsData = data;
    });
    this.msterService.getSourceDataUrl().subscribe((data: any) => {
      this.SourceData = data;
    });
    this.msterService.getSourcesubcategoryDataUrl().subscribe((data: any) => {
      this.Sourcesubcategorydata = data;
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








  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  close() {
    this._router.navigate(['/chits/Lead']);
  }


  /**
     * Form data get
     */
  get form() {
    return this.listJsForm.controls;
  }

  enabled = false
  onRoleSelectionChange1(event: any) {
    debugger
    this.agentid = event.value;


  }
  onRoleSelectionChange(event: any) {
    this.sourceid = event.value;


  }

  // onSubmit(){
  //   this.submitted=true;
  //   debugger
  //   // if(this.LeadForm.valid){

  //   this.leadservice.createLead(this.LeadForm.value).subscribe((res:any)=>{
  //     debugger
  //     console.log('lead addeded successfully');
  //     console.log(res);
  //     alert('Lead Added Successfully');
  //     this.display = "none";
  //     // window.location.reload();
  //   },error=>{
  //     debugger
  //     this.toastService.error('Something is Wrong')  //  this.display = "none";
  //   })
  // // }
  // }
  onSubmit() {
    this.submitted = true;
    debugger;
    // const value = this.LeadForm?.controls?.property;
    const content = this.LeadForm.getRawValue();
    this.leadservice.createLead(content).subscribe((res: any) => {
      debugger;
      console.log('Lead added successfully');
      console.log(res);
      // alert('Lead Added Successfully');
      this.openupdateSnackBar();

      this.showSuccess();
      // this.display = "none";
    }, error => {

      // this.toastService.error('Something is Wrong');
      // alert('Something is Wrong');
      this.openfailedSnackBar();



      this.showError();
    });
  }
  action: string | undefined
  openupdateSnackBar() {

    this.message = "Lead data submitted successfully";
    // this.value = "cancel"
    debugger
    // this._snackBar.open(this.message, this.action);
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: 'page-content1',
    });
  }
  openfailedSnackBar() {

    this.message = "Something went wrong please check";
    // this.value = "cancel"
    debugger
    // this._snackBar.open(this.message, this.action);
    this._snackBar.open(this.message, this.action, {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      // panelClass: ['page-content1']
      panelClass: 'page-content1',
    });
  }




  showSuccess() {
    this.toastService.success(' Lead Created Successfully');
  }
  showError() {
    debugger
    this.toastService.error('Something is Wrong')
  }
  // showError() {
  //   this.error ='Something is very wrong!', 'Major Error', {
  //     timeOut: 3000,
  //   });
  // }

}
