/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule,Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { LeadService } from 'src/app/chits/Services/lead.service';
import { LeadscreenService } from 'src/app/pages/real-estate/leadscreen/leadscreen.service';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { Education, Followup, Gender, Lead, Products, Source, SubCatergory, User } from 'src/app/chits-class';

@Component({
  selector: 'app-edit-lead',
  standalone: true,
  imports: [CommonModule,ModalModule,NgSelectModule, TabsModule,FormsModule,ReactiveFormsModule,MatDialogModule,NgxPaginationModule],
  templateUrl: './edit-lead.component.html',
  styleUrl: './edit-lead.component.scss'
})
export class EditLeadComponent {
 public leadsData: Lead[]=[];
 public Status="Created";
 public  Branch="Hyderabad";
 public listJsForm: any;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  public submitted = false;
  public usersData: User[]=[];
  public ProductsData:Products[]=[];
  // display: any;
  public SourceData: Source[]=[];
  public Sourcesubcategorydata: SubCatergory[]=[];
  // agentid: any;
  // sourceid: any;
  public LeadForm!:FormGroup;
  public genderData!: Gender;
  public educationData!: Education;
  public leadDataById:any;
  public id!: number;
  public followupget:Followup[]=[];

  constructor( private _router:Router, private FormBuilder: FormBuilder,
    private leadservice:LeadService,
    private userService:UsersService,private msterService:MastersService, 
    private dialog: MatDialog,private approute:ActivatedRoute,private toastService:ToastrService){}

  ngOnInit(): void {
  
   debugger
   this.id = this.approute.snapshot.params['id'];

   this.LeadForm=this.FormBuilder.group({
    id: this.id,
    leadName: ['', Validators.compose([Validators.required])],
    contactNo: ['', Validators.compose([Validators.required])],
    emailId: ['', Validators.compose([Validators.required])],
    address: ['', Validators.compose([Validators.required])],
    assignTo:['', Validators.compose([Validators.required])],
     leadDate: '2024-03-04T08:11:03.901Z',
    loginUserId:'1',

    enquiredDate:'2024-03-04T08:11:03.901Z',
    sourceId:['', Validators.compose([Validators.required])],
    sourceSubCategoryId:['', Validators.compose([Validators.required])],
       dob:'',
    productId:['', Validators.compose([Validators.required])],
    ProductName:'',
    employeeName:''
  
  });

  this.leadservice.getAllLeadsData().subscribe((data:any)=>{
    this.leadsData=data;
   
    
  })

this.leadservice.getEducationData().subscribe((data:any)=>{
  this.educationData=data;
  console.log('education data',this.educationData);
});
 this.leadservice.getGenderData().subscribe((data:any)=>{
  this.genderData=data;
 });

this.userService.getUserListData().subscribe((data:any)=>{
this.usersData=data.data;
console.log('userListData',this.usersData);
});

this.msterService.getAgentProductsData().subscribe((data:any)=>{
 this.ProductsData=data;
 console.log('ProductListData',this.ProductsData);
}) ;
    this.leadservice.getLeadDataById(this.id).subscribe((data: any) => {
      this.leadDataById = data;
      debugger
      this.LeadForm.controls['leadName'].setValue(data.leadName);
                this.LeadForm.controls['emailId'].setValue(data.emailId);
                this.LeadForm.controls['contactNo'].setValue(data.contactNo);
                this.LeadForm.controls['dob'].setValue(data.dob);
                this.LeadForm.controls['assignTo'].setValue(data.assignTo);
                this.LeadForm.controls['productId'].setValue(data.productId);
                this.LeadForm.controls['sourceId'].setValue(data.sourceId);
                this.LeadForm.controls['sourceSubCategoryId'].setValue(data.sourceSubCategoryId);
                this.LeadForm.controls['address'].setValue(data.address);
                this.LeadForm.controls['employeeName'].setValue(data.employeeName);
                this.id = data.id;
    console.log('leads data',this.leadsData);
      console.log('leadbyid', this.leadDataById);
    })

    
      this.leadservice.getfollowupbyid(this.id).subscribe((data:any)=>{
        debugger
       
        // this.followupget = data;
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
       
      })
     
    this.leadservice.getAllLeadsData().subscribe((data:any)=>{
      debugger
      this.leadsData=data;
    })
    this.userService.getUserListData().subscribe((data:any)=>{
      this.usersData=data.data;
     });
     this.msterService.getAgentProductsData().subscribe((data:any)=>{
      this.ProductsData=data;
   }) ;
     this.msterService.getSourceDataUrl().subscribe((data:any)=>{
      this.SourceData=data;
   }) ;
     this.msterService.getSourcesubcategoryDataUrl().subscribe((data:any)=>{
      this.Sourcesubcategorydata=data;
   }) ;

   

    
 
 
  }
  get form() {
    return this.listJsForm.controls;
  }



  saveUpdateLeadData() {
debugger
    this.leadservice.updateLeadData(this.id, this.LeadForm.value).subscribe(data => {
      console.log(data);
      debugger
      // alert('successfully updated');
    this.showSuccess();
    this._router.navigate(['/chits/leads-list'])
      },error=>{
        debugger
        // this.openfailedSnackBar();
        // alert('Something Went Wrong');
        this.showError();
      });
  }

  close(){
    this._router.navigate(['/chits/Lead']);
  }

  showSuccess() {
    this.toastService.success(' Lead Updated Successfully');

  }
  showError() {
    this.toastService.error('Something is Wrong')
  }

}
