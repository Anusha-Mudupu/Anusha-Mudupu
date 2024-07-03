/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lead } from 'src/app/chits-class';
import { LeadService } from 'src/app/chits/Services/lead.service';
import { DecimalPipe } from '@angular/common';
import { ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { selectData, selectlistData } from 'src/app/store/Invoices/invoices.selector';
import { deleteinvoice, fetchInvoiceData, fetchInvoicelistData } from 'src/app/store/Invoices/invoices.action';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { ContactsComponent } from 'src/app/Administration/contacts/contacts.component';
import { LeadsListComponent } from 'src/app/Administration/leads-list/leads-list.component';

@Component({
  selector: 'app-chits-dashboard',
  standalone: true,
  imports: [CommonModule, PaginationModule, NgxPaginationModule, ContactsComponent, LeadsListComponent],
  templateUrl: './chits-dashboard.component.html',
  styleUrl: './chits-dashboard.component.scss'
})
export class ChitsDashboardComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  invoiceslist: any
  invoices: any;
  deleteID: any;
  masterSelected!: boolean;
  invoiceCard: any;
  term: any;
  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;
  leadsData: Lead[] = [];
  totalLeads: Lead[] = [];
  totalAdministrationLeadsLength: boolean = false;
  totalContactsData: boolean = false;
  contactsClicked: boolean = false;
  totalPipeLine: boolean = false;
  totalBusinessValue: boolean = false;
  totalConvertedLeads: boolean = false;
  role: any;
  realestateLeadData: any;
  chitsLeadData: any;
  realestateLeadDataLength: any;
  chitsLeadDataLength: any;
  showAdministartionLeadsData: boolean = false;
  showrealestateLeadData: boolean = false;
  ShowChitsLeadsData: boolean = false;
  verticalId: any;
  showContactsComponent: boolean = false;
  showadminComponent: boolean = false;
  contactslength: any;
  contactsData: any;
  totalAdmin: any;
  totalAdminLength: boolean = false;

  userRole: string = 'user'; // Example: Set the user's role (could be 'superadmin', 'admin', 'user')

  // dashboardData = {
  //   "cards": [
  //     {
  //       "id": 1,
  //       "title": "User Management",
  //       "roleAccess": ["superadmin", "admin"]
  //     },
  //     {
  //       "id": 2,
  //       "title": "Reports",
  //       "roleAccess": ["superadmin", "admin", "user"]
  //     },
  //     {
  //       "id": 3,
  //       "title": "Settings",
  //       "roleAccess": ["superadmin"]
  //     },
  //     {
  //       "id": 4,
  //       "title": "Analytics",
  //       "roleAccess": [ "admin"]
  //     },
  //     {
  //       "id": 5,
  //       "title": "Notifications",
  //       "roleAccess": ["admin", "user"]
  //     }
  //   ]
  // };
  constructor(private leadService: LeadService, public store: Store) {

  }
  // getVisibleCards(): any[] {
  //   return this.dashboardData.cards.filter(card => card.roleAccess.includes(this.userRole));
  // }
  ngOnInit() {
    this.role = localStorage.getItem('Rolename');
    console.log("this.role for chits", this.role)
    this.verticalId = localStorage.getItem('vericalid');
    console.log("this.role for chits", this.verticalId);
    
    this.leadService.getContactData().subscribe((data: any) => {
      this.contactsData = data;

      this.contactslength = data.length;

    });
    this.leadService.getContactData().subscribe((data: any) => {
      this.totalAdmin = data;

      this.totalAdminLength = data.length;

    });

    switch (this.role) {
      case 'Super Admin':
        // this.totalAdminLength = true;
        this.totalAdministrationLeadsLength = true;
        this.totalContactsData = true;
        this.totalPipeLine = true;
        this.totalBusinessValue = true;
        this.totalConvertedLeads = true;
        this.showAdministartionLeadsData = true;
        this.showrealestateLeadData=false;
        this.ShowChitsLeadsData=false;
        break;
      case 'Agent,Employee':
        this.totalBusinessValue = true;
        this.showrealestateLeadData = true;
        this.totalContactsData = true;
        this.ShowChitsLeadsData = false;
        this.showAdministartionLeadsData = false;
        break;
      case 'Product Admin':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        break;
      case 'Branch Manager':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        break;
      case 'testing':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        break;
      case 'Employee':
        this.showrealestateLeadData = true;
        this.totalContactsData = true;
        break;
      case 'Real Estates Admin':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        this.totalPipeLine = true;
        this.totalBusinessValue = true;
        this.totalConvertedLeads = true;
        break;
      case 'Real Estates Admin12':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        this.totalPipeLine = true;
        this.totalBusinessValue = true;
        this.totalConvertedLeads = true;
        break;
      case 'Real Estates':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        break;
      case 'Regional Manager Realestate':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        break;
      case 'Manager':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        break;
      case 'Agent':
        this.showrealestateLeadData = true;
        this.totalContactsData = true;
        break;
      case 'Real Estate sample':
        this.showAdministartionLeadsData = true;
        this.totalContactsData = true;
        break;
      default:
        // Handle default case here
        break;
    }


    this.leadService.getContactData().subscribe((data: any) => {
      this.totalLeads = data;
      this.updatePageData(1);
      this.totalAdministrationLeadsLength = data.length;
      console.log("length", this.totalAdministrationLeadsLength)
    });
    this.leadService.getrealestateleaddata("2").subscribe((data: any) => {
      this.realestateLeadData = data;
      this.updatePageData1(1);
      this.realestateLeadDataLength = data.length;
    });
    this.leadService.getAllLeadsData().subscribe((data: any) => {
      this.chitsLeadData = data;
      this.updatePageData2(1);
      this.chitsLeadDataLength = data.length;
    })
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Invoice', active: true },
      { label: 'Invoice List', active: true }
    ];
    // store

    // Fetch Data
    setTimeout(() => {
      this.store.dispatch(fetchInvoicelistData());
      this.store.select(selectlistData).subscribe((data) => {
        this.invoices = data;
        this.invoiceslist = data;
        this.invoices = this.invoiceslist.slice(0, 10)
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000)

    this.store.dispatch(fetchInvoiceData());
    this.store.select(selectData).subscribe((data) => {
      this.invoiceCard = data;
    });
  }
  // Sort Data
  direction: any = 'asc';
  onSort(column: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    const sortedArray = [...this.invoices]; // Create a new array
    sortedArray.sort((a, b) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === 'asc' ? res : -res;
    });
    this.invoices = sortedArray;
  }
  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  // filterdata
  filterdata() {
    if (this.term) {
      this.invoices = this.invoiceslist.filter((el: any) => el.customer.toLowerCase().includes(this.term.toLowerCase()))
    } else {
      this.invoices = this.invoiceslist
    }
    // noResultElement
    this.updateNoResultDisplay();
  }

  // no result 
  updateNoResultDisplay() {
    const noResultElement = document.querySelector('.noresult') as HTMLElement;

    if (this.term && this.invoices.length === 0) {
      noResultElement.style.display = 'block';
    } else {
      noResultElement.style.display = 'none';
    }
  }


  checkedValGet: any[] = [];
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.invoices = this.invoices.map((x: { states: any }) => ({ ...x, states: ev.target.checked }));

    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].states == true) {
        result = this.invoices[i].id;
        checkedVal.push(result);
      }
    }

    this.checkedValGet = checkedVal;
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.invoices.length; i++) {
      if (this.invoices[i].states == true) {
        result = this.invoices[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }

  // Delete Product
  removeItem(id: any) {
    this.deleteID = id
    this.deleteRecordModal?.show();
  }

  deleteData(id: any) {
    this.deleteRecordModal?.hide();
    if (id) {
      this.store.dispatch(deleteinvoice({ id: this.deleteID.toString() }));
    }
    this.store.dispatch(deleteinvoice({ id: this.checkedValGet.toString() }));
    this.deleteRecordModal?.hide();
    this.masterSelected = false;
  }

  // Page Changed
  // pageChanged(event: any): void {
  //   const startItem = (event.page - 1) * event.itemsPerPage;
  //   const endItem = event.page * event.itemsPerPage;
  //   this.invoices = this.invoiceslist
  //     .slice(startItem, endItem);
  // }
  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    const pageSize = 15; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.leadsData = this.totalLeads.slice(startItem, endItem);
  }
  tablepageChanged1(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData1(page: number): void {
    const pageSize = 15; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.realestateLeadData = this.realestateLeadData.slice(startItem, endItem);
  }
  tablepageChanged2(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData2(page: number): void {
    const pageSize = 15; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.chitsLeadData = this.chitsLeadData.slice(startItem, endItem);
  }
  showContacts() {


    // this.showContactsComponent = !this.showContactsComponent;





    //      this.showAdministartionLeadsData = true;
    //   this.showrealestateLeadData=true
    //   this.ShowChitsLeadsData=true;


  }
  showAdministartion() {

    // if(this.role=='Super Admin'){
    // this.showadminComponent = ! this.showadminComponent;


    // this.showContactsComponent = false
    //     this.totalAdministrationLeadsLength = true;
    //     this.totalAdminLength = true;
    //     this.totalContactsData = true;
    //     this.totalPipeLine = true;
    //     this.totalBusinessValue = true;
    //     this.totalConvertedLeads = true;
    //     this.showAdministartionLeadsData = true;
    //     this.showrealestateLeadData=true
    //     this.ShowChitsLeadsData=true;

  }
  // if(this.role=='Agent,Employee'){

  //  this.realestateLeadDataLength= true;
  //  this.totalBusinessValue = true;
  //  this.totalConvertedLeads = true;
  // this.showAdministartionLeadsData = true;
  // this.showrealestateLeadData=true
  // this.ShowChitsLeadsData=true;
  //  this.showContactsComponent = false
  // }

}

