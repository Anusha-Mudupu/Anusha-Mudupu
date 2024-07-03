/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryList, ViewChild, ViewChildren } from '@angular/core';
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
import { formatDate } from '@fullcalendar/core';


const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};
@Component({
  selector: 'app-followpview',
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
  templateUrl: './followpview.component.html',
  styleUrl: './followpview.component.scss'
})
export class FollowpviewComponent {
  // breadCrumbItems: any;
  isFirstOpen = true

  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;

  public leadsData: any;

  public listJsForm!: UntypedFormGroup;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  public submitted = false;


  public SourceData: Source[] = [];
  public Sourcesubcategorydata: SubCatergory[] = [];


  public searchTerm: string = '';
  public leadId!: number;
  public LeadForm!: FormGroup;
  public status: Status[] = [];
  public getFollowUpThroughdata: FollowUpThrough[] = [];

  selectedLabel: any;
  selectedDate!: any;
  followuphistory: any;
  @Input() showAddAccordion: boolean = false;
  @Input() showHistoryAccordion: boolean = false;
  followupget: any;
  constructor(private _router: Router, private formBuilder: UntypedFormBuilder, private leadservice: LeadService,
    private toastService: ToastrService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private approute: ActivatedRoute, private menuitemservice: MenuitemsService) {
    this.leadId = this.approute.snapshot.params['id'];
    this.LeadForm = this.FormBuilder.group({

      leadid: this.leadId,

      remarks: [''],
      followUpStatus: [''],

      followupType: ['', Validators.required],
      nextFollowupType: '',
      nextFollowUpDate: '',
      followupDate: [''],

      followupBy: '',

    });
  }

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.menuitemservice.getSelectedLabel().subscribe(label => {
      this.selectedLabel = label;

      console.log('Selected Label:', this.selectedLabel);
    });
    this.leadservice.getfollowupbyid(this.leadId).subscribe((data: any) => {
      this.followuphistory = data;
      console.log('this.followuphistory', this.followuphistory)
    });



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
    this.msterService.getstatus().subscribe((data: any) => {
      this.status = data;
    });
    this.msterService.getFollowUpThrough().subscribe((data: any) => {
      this.getFollowUpThroughdata = data;
    });






  }
  onDateChange(event: any) {
   
    const selectedDate = event.target.value;
  
   
    const selectedDateUTC = new Date(selectedDate).toISOString().slice(0, 19) + 'Z';
  

    this.LeadForm.patchValue({ followupDate: selectedDateUTC });
  }
  
  close() {
    this._router.navigate(['/chits/followup']);
  }


  /**
    * Form data get
    */
  get form() {
    return this.listJsForm.controls;
  }

  sortLeadsByLeadName() {
    this.followuphistory.sort((a: any, b: any) => {
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
    this.leadsData = this.followuphistory.slice(startItem, endItem);
  }


  savefollowup() {

    this.leadservice.savefollowup(this.LeadForm.value).subscribe((res: any) => {

      console.log(res);

      this.showSuccess();
      console.log('followup form', this.LeadForm.value);
      this._router.navigate(['/chits/FollowUps']);
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
