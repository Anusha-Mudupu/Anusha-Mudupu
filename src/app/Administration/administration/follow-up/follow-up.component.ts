/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { ToastrService } from 'ngx-toastr';
import { SimplebarAngularModule } from 'simplebar-angular';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { NgbdListSortableHeader } from 'src/app/pages/table/listjs/listjs-sortable.directive';
import { TableRoutingModule } from 'src/app/pages/table/table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeadscreenService } from 'src/app/pages/real-estate/leadscreen/leadscreen.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { LeadService } from 'src/app/chits/Services/lead.service';
import { FollowUpThrough, Lead, Products, Source, Status, SubCatergory, User } from 'src/app/chits-class';



const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@Component({
  selector: 'app-follow-up',
  standalone: true,
  imports: [CommonModule,ModalModule,PaginationModule,
    TableRoutingModule,AccordionModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
     TabsModule,FormsModule,ReactiveFormsModule,MatDialogModule,NgxPaginationModule,
     TimepickerModule,
     NgxMaskDirective,
     NgxMaskPipe,
     FlatpickrModule,
      NgSelectModule],
      providers: [
        provideNgxMask(),
        {
          provide: DROPZONE_CONFIG,
          useValue: DEFAULT_DROPZONE_CONFIG
        }
      ],
  templateUrl: './follow-up.component.html',
  styleUrl: './follow-up.component.scss'
})
export class FollowUpComponent {
  // breadCrumbItems: any;
public  isFirstOpen = true

  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;
  public leadsData:Lead[]=[];
  public  Status = "Created";
  public Branch = "Hyderabad";
  public listJsForm!: UntypedFormGroup;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  public submitted = false;
  public usersData: User[]=[];
  public ProductsData: Products[]=[];
  // display: any;
  public SourceData: Source[]=[];
  public  Sourcesubcategorydata:SubCatergory[]=[];
  // agentid: any;
  // sourceid: any;
  // ListJsDatas: any;
  public followups:any;
  public  searchTerm: string = '';
  public  leadId!: number;
  public LeadForm!:FormGroup;
  public status:Status[]=[];
  public getFollowUpThroughdata:FollowUpThrough[]=[];
  // history: any;
  public  nextfollowupwith: string='';
  followupData: any;
  constructor( private _router:Router,private formBuilder: UntypedFormBuilder,private leadservice:LeadService,
    private toastService:ToastrService,
   private userService:UsersService,private msterService:MastersService,private FormBuilder: FormBuilder,
   private dialog: MatDialog,private approute: ActivatedRoute){}

 ngOnInit(): void {
  this.leadId = this.approute.snapshot.params['id'];

  this.LeadForm = this.FormBuilder.group({

    leadid:this.leadId,
    //  cleaveTimeFormat: ['', [Validators.pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)]],
     remarks: [''],
     followUpStatus: [''],

     followupType:['', Validators.required],
     
     nextFollowUpDate:'',
    //  leadDate: '2024-03-04T08:11:03.901Z',
     nextFollowupType:'',
      followupBy:'',
    
   });

   this.msterService.getstatus().subscribe((data:any)=>{
    this.status=data;
 }) ;
   this.msterService.getFollowUpThrough().subscribe((data:any)=>{
    this.getFollowUpThroughdata=data;
 }) ;
 
  debugger
 
  this.getfollowupbyidtable();
   
  this.followupData = this.followups.sort((a:any, b:any) => new Date(b.followupDate).getTime() - new Date(a.followupDate).getTime());
  
 }

 getfollowupbyidtable(){
  this.leadservice.getfollowupbyid(this.leadId).subscribe((data:any)=>{
    debugger
   
    this.followups = data;
    this.sortLeadsByLeadName(); // Call the sorting function

  this.updatePageData(1);
  })
 }
 getfollowup(recordid:any){
//   this.leadservice.getfollowupbyid(this.leadId).subscribe((data:any)=>{
//     debugger
   
//     // this.leadsData2 = data;

//     for(let i=0;i<data.length;i++){
// if(recordid==data[i].id){
//   this.history.push(data[i])
// }

//     }
   
//   })

this.nextfollowupwith="WHATS APP"
 }

 
 followup(){
  
  this._router.navigate(['/real-estate/leadfollowUp',this.leadId])
}
close(){
  this._router.navigate(['/chits/leads-list'])
}




  
 


  /**
    * Form data get
    */
  get form() {
    return this.listJsForm.controls;
  }

  sortLeadsByLeadName() {
    this.followups.sort((a: any, b: any) => {
      // Assuming the lead name is a property called "leadName" in your data
      const nameA = a.leadName.toUpperCase(); // convert to uppercase for case-insensitive comparison
      const nameB = b.leadName.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; // names are equal
    });
  }
  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    const startItem = (page - 1) * 8;
    const endItem = page * 8;
    this.leadsData = this.followups.slice(startItem, endItem);
  }


savefollowup()
{


  debugger
  // if(this.LeadForm.valid){
   
  this.leadservice.savefollowup(this.LeadForm.value).subscribe((res:any)=>{
    debugger
    console.log('lead addeded successfully');
    console.log(res);
    // alert('Lead Added Successfully');
    this.showSuccess();
  },error=>{
  //  alert('Somethig Went Wrong ')
  this.showError()
  })
}



showSuccess() {
  this.toastService.success(' Lead Created Successfully');
}
showError() {
  this.toastService.error('Something is Wrong')
}
}

