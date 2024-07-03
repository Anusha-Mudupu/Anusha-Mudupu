import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
import { LeadscreenService } from '../leadscreen.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlatpickrModule } from 'angularx-flatpickr';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { LeadService } from 'src/app/chits/Services/lead.service';



const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };
@Component({
  selector: 'app-followupgrid',
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
      NgSelectModule,],
      providers: [
        provideNgxMask(),
        {
          provide: DROPZONE_CONFIG,
          useValue: DEFAULT_DROPZONE_CONFIG
        }
      ],
  templateUrl: './followupgrid.component.html',
  styleUrl: './followupgrid.component.scss'
})
export class FollowupgridComponent {
  breadCrumbItems: any;
  isFirstOpen = true

  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;

  leadsData: any;
  Status = "Created";
  Branch = "Hyderabad";
  listJsForm!: UntypedFormGroup;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  submitted = false;
  usersData: any;
  ProductsData: any;
  display: any;
  SourceData: any;
  Sourcesubcategorydata: any;
  agentid: any;
  sourceid: any;
  ListJsDatas: any;
  leadsData2: any;
  searchTerm: string = '';
  leadId: any;
  LeadForm:any;
  status: any;
  getFollowUpThroughdata: any;
  history: any;
  nextfollowupwith: any;
  constructor( private _router:Router,private formBuilder: UntypedFormBuilder,private leadservice:LeadService,
    private leadscreenservice:LeadscreenService,private toastService:ToastrService,
   private userService:UsersService,private msterService:MastersService,private fb: FormBuilder,
   private dialog: MatDialog,private approute: ActivatedRoute){}

 ngOnInit(): void {
  this.leadId = this.approute.snapshot.params['id'];

  this.LeadForm = this.fb.group({

    leadid:this.leadId,
    //  cleaveTimeFormat: ['', [Validators.pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)]],
     remarks: [''],
     followUpStatus: [''],

     followupType:['', Validators.required],
     
     nextFollowUpDate:'',
    //  leadDate: '2024-03-04T08:11:03.901Z',
     nextFollowupType:'',
      // followupBy:'',
    
   });

   this.msterService.getstatus().subscribe((data:any)=>{
    this.status=data;
 }) ;
   this.msterService.getFollowUpThrough().subscribe((data:any)=>{
    this.getFollowUpThroughdata=data;
 }) ;
 
  debugger
 
  this.getfollowupbyidtable();
   
 
  
 }

 
 getfollowupbyidtable(){
  this.leadscreenservice.getfollowupbyid(this.leadId).subscribe((data:any)=>{
    debugger
   
    this.leadsData2 = data;
    this.sortLeadsByLeadName(); // Call the sorting function

  this.updatePageData(1);
  })
 }
 //Get records
 getfollowup(recordid:any){
//   this.leadscreenservice.getfollowupbyid(this.leadId).subscribe((data:any)=>{
//     debugger
   
//     // this.leadsData2 = data;

//     for(let i=0;i<data.length;i++){
// if(recordid==data[i].id){
//   this.history.push(data[i])
// }

//     }
   
//   })
debugger
this.nextfollowupwith="WHATS APP"
 }

 
 followup(){
  debugger
  this._router.navigate(['/real-estate/leadfollowUp',this.leadId])
}
close(){
  this._router.navigate(['/real-estate/leadrealestate'])
}




  
 


  /**
    * Form data get
    */
  get form() {
    return this.listJsForm.controls;
  }

  sortLeadsByLeadName() {
    this.leadsData2.sort((a: any, b: any) => {
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
    this.leadsData = this.leadsData2.slice(startItem, endItem);
  }

//save Folloeup
savefollowup()
{  
  this.leadservice.savefollowup(this.LeadForm.value).subscribe((res:any)=>{
    debugger
    console.log('lead addeded successfully');
    console.log(res);
    this.showSuccess();
    this.getfollowupbyidtable();

  },error=>{
//Error
  this.showError()
  })
}



showSuccess() {
  this.toastService.success(' FollowUp Created Successfully');
}
showError() {
  this.toastService.error('Something is Wrong')
}




}


