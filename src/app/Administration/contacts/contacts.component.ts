/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education, Gender, Lead, Products, User, UserList } from 'src/app/chits-class';
import { Router } from '@angular/router';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


import { LeadService } from 'src/app/chits/Services/lead.service';

import { UsersService } from 'src/app/chits/Services/users.service';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgPipesModule } from 'ngx-pipes';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TableRoutingModule } from 'src/app/pages/table/table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



type SortColumn = any; // Change this to the actual type you're using
type SortDirection = 'asc' | 'desc'; // Adjust this based on your implementation

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, TabsModule, FormsModule,
    ReactiveFormsModule, MatDialogModule, NgxPaginationModule
    , ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  public spinner: boolean = false
  public searchText = '';
  public filteredUserList: any;
  public leadsData: Lead[] = [];
  public educationData!: Education;
  public genderData!: Gender;
  public usersData: User[] = [];
  public ProductsData!: Products;
  public LeadForm!: FormGroup;
  public id!: number;
  public leadDataById!: Lead;
  // selectedItem: any;
  public updateLeadForm!: FormGroup;
  public Status = "New";
  public Branch = "Hyderabad";
  public submitted: boolean = false;



  public page: number = 1;
  public count: number = 0;
  public tableSize = 10;
  public tableSizes: any = [5, 10, 15, 20]
  public leadsData2: Lead[] = [];
  public headers: any;
  public rolePermission: any;
  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  contactsData: any;
  leadslength: any;
  sortColumn: string = 'leadName'; // Default sort column
  sortOrder: string = 'asc'; 
  sortedLeadList: any[] = [];
  role: any;
  showActions: boolean=false;
  showAddButton: boolean =false;
  showbreadcrumbs: boolean=false;
  verticalId:any;
  constructor(private router: Router, private leadservice: LeadService, private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
     public toastService: ToastrService,) {

   
    this.leadservice.getContactData().subscribe((data: any) => {
      this.contactsData = data;
      this.sortedLeadList = this.contactsData.slice(); 
      console.log("this.sortedUserList",this.sortedLeadList)
      this.leadslength=data.length;
      console.log('leads length',this.leadslength);
      this.updatePageData(1);
      console.log('this.contactsData', this.contactsData);
    })
  }
  ngOnInit(): void {
    this.role = localStorage.getItem('Rolename');
    console.log("this.role for chits", this.role)
    this.verticalId = localStorage.getItem('vericalid');
    console.log("this.role for chits", this.verticalId);
    if(this.role == "Agent"){
      this.showAddButton=false;
      this.showActions= false;
      this.showbreadcrumbs=true;
      this.showbreadcrumbs = false;
    }


    //  this.LeadForm = this.FormBuilder.group({
    //    leadName: ['', Validators.compose([Validators.required])],
    //    contactNo: ['', Validators.compose([Validators.required])],
    //    emailId: ['', Validators.compose([Validators.required])],
    //    address: ['', Validators.compose([Validators.required])],
    //    assignTo: ['', Validators.compose([Validators.required])],
    //    leadDate: '2024-03-04T08:11:03.901Z',
    //    loginUserId: '1',

    //    enquiredDate: '2024-03-04T08:11:03.901Z',
    //    sourceId: '3',
    //    sourceSubCategoryId: '4',
    //    Profession: '',
    //    Product: '',
    //    gender: '',
    //    dob: '',
    //    education: '',
    //    avgIncome: '',
    //    branch: '',
    //    productId: ['', Validators.compose([Validators.required])],
    //    ProductName: '',
    //    employeeName: ''

    //  });
    //  this.updateLeadForm = this.FormBuilder.group({
    //    leadName: ['', Validators.compose([Validators.required])],
    //    contactNo: ['', Validators.compose([Validators.required])],
    //    emailId: ['', Validators.compose([Validators.required])],
    //    address: ['', Validators.compose([Validators.required])],
    //    assignTo: '',
    //    leadDate: '2024-03-04T08:11:03.901Z',
    //    loginUserId: '1',

    //    enquiredDate: '2024-03-04T08:11:03.901Z',
    //    sourceId: '3',
    //    sourceSubCategoryId: '4',
    //    Profession: '',
    //    Product: '',
    //    gender: '',
    //    dob: '',
    //    education: '',
    //    avgIncome: '',
    //    branch: '',
    //    productId: '',
    //    ProductName: '',
    //    employeeName: ''

    //  })


    // this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Tabs', active: true }];

    // this.leadservice.getAllLeadsData().subscribe((data: any) => {


    //  this.leadservice.getEducationData().subscribe((data: any) => {
    //    this.educationData = data;
    //    console.log('education data', this.educationData);
    //  });
    //  this.leadservice.getGenderData().subscribe((data: any) => {
    //    this.genderData = data;
    //  });

    //  this.userService.getUserListData().subscribe((data: any) => {
    //    this.usersData = data.data;
    //    console.log('userListData', this.usersData);
    //  });

    //  this.msterService.getAgentProductsData().subscribe((data: any) => {
    //    this.ProductsData = data;
    //    console.log('ProductListData', this.ProductsData);
    //  });

    //  this.rolePermission = localStorage.getItem('rolepermissionjson');
    //  if(this.rolePermission==null || this.rolePermission=="null"){
    //    this.userCreate = "true"
    //    this.userDelete = "true"
    //    this.userRead =  "true"
    //    this.userWrite =  "true"
    //  }
    //  else{
    //  const getRoles = JSON.parse(this.rolePermission).find((item:any) => item.navigation== "Leads")

    //  // if(this.agent == 'true'){
    //   if(getRoles==undefined){
    //     this.userCreate = "true"
    //     this.userDelete = "true"
    //     this.userRead =  "true"
    //     this.userWrite =  "true"
    //   }
    //   else{
    //    this.userCreate = getRoles.create
    //    this.userDelete = getRoles.delete
    //    this.userRead = getRoles.read
    //    this.userWrite = getRoles.write
    //   }
    //  }

  }

  // onTableDataChange(event: any) {
  //   this.page = event;
  //   this.leadsData;
  // }
  // onTableSizeChange(event: any) {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.leadsData;
  // }

  showSuccess() {
    this.toastService.success(' Lead Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
 

 

  





  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    const pageSize = 15; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.leadsData = this.contactsData.slice(startItem, endItem);
    this.sortedLeadList = this.leadsData.slice();
    
    this.sortUserList()
    
  }

  sortTable(column: any) {
    if (this.sortColumn === column) {
        // If same column is clicked again, toggle sort order
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        // If different column is clicked, set new sort column and reset sort order to ascending
        this.sortColumn = column;
        this.sortOrder = 'asc';
    }
    this.sortUserList();
}

sortUserList() {
    this.sortedLeadList.sort((a, b) => {
        let aValue = a[this.sortColumn];
        let bValue = b[this.sortColumn];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            // Case-insensitive sorting for string values
            aValue = aValue.toLowerCase();
            bValue = bValue.toLowerCase();
        }
        if (this.sortOrder === 'asc') {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });
}

 




}
