import { CommonModule } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup, UntypedFormBuilder, FormBuilder } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';
import { PaginationModule, PageChangedEvent } from 'ngx-bootstrap/pagination';
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
import { MenuitemsService } from 'src/app/menuitems.service';
import { LeadService } from 'src/app/chits/Services/lead.service';

@Component({
  selector: 'app-assignlead',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
    TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule],
  templateUrl: './assignlead.component.html',
  styleUrl: './assignlead.component.scss'
})
export class AssignleadComponent {
  breadCrumbItems: any;
  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;

  leadsData: any;

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
  formGroup: any
  ListJsDatas: any;
  leadsData2: any;
  searchTerm: string = '';
  users: any;
  spinner: boolean = true
  isAssignButtonEnabled: boolean = false;
  selectedUser: any = null;
  selectedRecords: any[] = [];
  data: any;
  booleanValue: any;
  datasets: any;
  assignButtonEnabled: any;
  selectedLabel: any;
  chitsLeadData: any;
  realEstateLeadData: any;
  adminLeadData: any;
  verticalData: any;
  verticalid: any;
  constructor(private _router: Router, private formBuilder: UntypedFormBuilder,
    private leadscreenservice: LeadscreenService, private toastService: ToastrService,
    private userService: UsersService, private msterService: MastersService, private fb: FormBuilder,
    private dialog: MatDialog, private menuitemservice: MenuitemsService, private leadservice: LeadService) {
    this.menuitemservice.getSelectedLabel().subscribe(label => {
      this.selectedLabel = label;
      // Here you can perform actions based on the selected label
      console.log('Selected Label:', this.selectedLabel);
    });
  }

  ngOnInit(): void {

    this.leadservice.getAllLeadsData().subscribe((data: any) => {
      this.chitsLeadData = data;
      console.log('leads data', this.leadsData);
      this.updatePageData(1);

    });
    this.leadservice.getrealestateleaddata("2").subscribe((data: any) => {
      this.realEstateLeadData = data;
    });
    this.leadservice.getAdminLeadData().subscribe((data: any) => {
      this.adminLeadData = data;
    })

    this.leadservice.getVerticalDropdown().subscribe((data: any) => {
      this.verticalData = data;
      console.log("vertical", this.verticalData);
    });


    this.formGroup = this.formBuilder.group({
      user: [''] // Initialize the dropdown with an empty value
    });
    this.spinner = true
    //Get all leads


    //Get all user in dropdown
    this.leadscreenservice.getallusers().subscribe((data: any) => {
      debugger
      this.users = data.data;
    });
  }
  masterSelected!: boolean;
  checkedValGet: any[] = [];

  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    debugger
    this.leadsData2.forEach((x: { state: any; }) => x.state = ev.target.checked)
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.leadsData2.length; i++) {
      if (this.leadsData2[i].state == true) {
        result = this.leadsData2[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    this.updateButtonState();

    console.log("table", this.checkedValGet)
  }

  checkUncheckSingle(event: any, id: any) {
    // Find the specific lead by ID
    const lead = this.leadsData2.find((x: { id: any; }) => x.id === id);
    if (lead) {
      lead.state = event.target.checked;

      // Update checkedValGet array based on the state of individual checkboxes
      if (event.target.checked) {
        this.checkedValGet.push(id);
      } else {
        const index = this.checkedValGet.indexOf(id);
        if (index !== -1) {
          this.checkedValGet.splice(index, 1);
        }
      }
      this.updateButtonState();

      console.log("table", this.checkedValGet);
    }
  }



  getSelectedData() {

    return this.realEstateLeadData || [];

  }

  filterLeads() {
    debugger
    if (this.leadsData2) {
      this.leadsData = this.leadsData2.filter((lead: any) =>
        lead && lead.leadName && lead.leadName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  /**
    * Form data get
    */
  get form() {
    return this.listJsForm.controls;
  }



  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    const startItem = (page - 1) * 8;
    const endItem = page * 8;
    this.leadsData = this.leadsData2.slice(startItem, endItem);
    this.spinner = false

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

  updateAssignButtonState(event: any) {
    // Update the selected user
    debugger
    this.selectedUser = event.target.value
    this.updateButtonState();
  }



  updateButtonState() {
    // Enable the assign button if a user is selected and at least one record is selected
    this.isAssignButtonEnabled = !!this.selectedUser && this.checkedValGet.length > 0;
  }

  assignLead() {
    // Handle lead assignment here
  }
  cancel() {
    this._router.navigate(['/real-estate/leadrealestate']);

  }

  //Assigning Lead 
  assignlead() {
    this.submitted = true;
    debugger;
    var data = {
      leadIds: this.checkedValGet
      ,
      assignTo: this.selectedUser

    }
    this.leadscreenservice.assignlead(data).subscribe((res: any) => {
      debugger;

      console.log(res);
      //Success Message
      this.showSuccess();
      this._router.navigate(['/real-estate/leadrealestate']);

      this.display = "none";
    }, error => {
      debugger;
      //Error Message
      this.showError();
    });
  }

  showSuccess() {
    this.toastService.success('Lead Assigned Successfully');
  }
  showError() {
    debugger
    this.toastService.error('Something is Wrong')
  }





}
