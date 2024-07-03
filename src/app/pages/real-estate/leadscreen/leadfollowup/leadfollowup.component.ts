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
import { DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
// import { FlatpickrModule } from 'angularx-flatpickr';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { LeadService } from 'src/app/chits/Services/lead.service';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FollowUpThrough, Followup, Lead, Products, Source, Status, SubCatergory, User } from 'src/app/chits-class';
import { MenuitemsService } from 'src/app/menuitems.service';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};
@Component({
  selector: 'app-leadfollowup',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule, AccordionModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
    TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule,
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
    },

    FlatpickrDefaults,

  ],
  templateUrl: './leadfollowup.component.html',
  styleUrl: './leadfollowup.component.scss'
})
export class LeadfollowupComponent {
  // breadCrumbItems: any;
  isFirstOpen = true

  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;

  public leadsData: any;

  public listJsForm!: UntypedFormGroup;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  public submitted = false;
  public usersData: User[] = [];
  public ProductsData: Products[] = [];

  public SourceData: Source[] = [];
  public Sourcesubcategorydata: SubCatergory[] = [];

  public leadsData2: any;
  public searchTerm: string = '';
  public leadId!: number;
  public LeadForm!: FormGroup;
  public status: Status[] = [];
  public getFollowUpThroughdata: FollowUpThrough[] = [];
  public history: any;
  public nextfollowupwith: any;
  selectedLabel: any;
  selectedDate!: any;
  followupget: any;
  LeadStatusTypeenumConstants: any;
  data: any;
  LeadStatus: any;
  constructor(private _router: Router, private formBuilder: UntypedFormBuilder, private leadservice: LeadService,
    private toastService: ToastrService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private approute: ActivatedRoute, private menuitemservice: MenuitemsService) { }

  ngOnInit(): void {
    this.selectedDate = new Date();
    // this.menuitemservice.getSelectedLabel().subscribe(label => {
    //   this.selectedLabel = label;

    //   console.log('Selected Label:', this.selectedLabel);
    // });
    this.leadId = this.approute.snapshot.params['id'];

    this.LeadForm = this.FormBuilder.group({

      leadid: this.leadId,
      //  cleaveTimeFormat: ['', [Validators.pattern(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)]],
      remarks: [''],
      followUpStatus: [''],

      followupType: ['', Validators.required],
      followupDate: [''],

      nextFollowUpDate: '',
      //  leadDate: '2024-03-04T08:11:03.901Z',
      nextFollowupType: '',
      followupBy: '',

    });
  
    this.leadservice.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

     
        this.LeadStatus = this.data.filter((item: any) => item.businessCode == "real-estate" && item.enumCode == "FollowupStatus");
       console.log('raji',this.LeadStatus);
        if (this.LeadStatus.length > 0) {
          this.LeadStatusTypeenumConstants = this.LeadStatus[0].enumConstants.filter((item:any)=> item.businessCode==="real-estate");
          console.log("LeadStatus enumConstants", this.LeadStatusTypeenumConstants);
        }
      
    });



    //  this.msterService.getstatus().subscribe((data: any) => {
    //    this.status = data;
    //  });
    this.msterService.getFollowUpThrough().subscribe((data: any) => {
      this.getFollowUpThroughdata = data;
    });

    debugger

    this.getfollowupbyidtable();

    this.leadservice.getfollowupbyid(this.leadId).subscribe((data: any) => {


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

  }
  onDateChange(event: any) {

    const selectedDate = event.target.value;


    const selectedDateUTC = new Date(selectedDate).toISOString().slice(0, 19) + 'Z';


    this.LeadForm.patchValue({ followupDate: selectedDateUTC });
  }

  getfollowupbyidtable() {
    this.leadservice.getfollowupbyid(this.leadId).subscribe((data: any) => {


      this.leadsData2 = data;
      this.sortLeadsByLeadName(); // Call the sorting function

      this.updatePageData(1);
    })
  }





  getfollowup(recordid: any) {
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
    this.nextfollowupwith = "WHATS APP"
  }



  close() {
    this._router.navigate(['/real-estate/leadrealestate']);
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


  savefollowup() {



    // if(this.LeadForm.valid){

    this.leadservice.savefollowup(this.LeadForm.value).subscribe((res: any) => {

      console.log(res);

      this.showSuccess();
    }, error => {

      this.showError()
    })
  }



  showSuccess() {
    this.toastService.success(' Followup Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong');
  }
}
