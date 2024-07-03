/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Education, Gender, Lead, Products, User, UserList } from 'src/app/chits-class';
import { Router } from '@angular/router';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { LeadService } from '../Services/lead.service';

import { UsersService } from '../Services/users.service';
import { MastersService } from '../Services/masters.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UpdateLeadComponent } from '../update-lead/update-lead.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgPipesModule } from 'ngx-pipes';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TableRoutingModule } from 'src/app/pages/table/table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import Swal from 'sweetalert2';
import { LeadscreenService } from 'src/app/pages/real-estate/leadscreen/leadscreen.service';
import { ListService } from 'src/app/pages/table/listjs/listjs.service';
type SortColumn = any; // Change this to the actual type you're using
type SortDirection = 'asc' | 'desc'; // Adjust this based on your implementation

@Component({
  selector: 'app-lead',
  standalone: true,
  imports: [CommonModule, TabsModule, FormsModule, 
    ReactiveFormsModule, MatDialogModule, NgxPaginationModule
    ,ModalModule,PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,
   
    SimplebarAngularModule,
    
  ],
  providers: [ListService, DecimalPipe],

  templateUrl: './lead.component.html',
  styleUrl: './lead.component.scss'
})
export class LeadComponent implements OnInit {
  // websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  // breadCrumbItems: any
  // currentTab: any = "developers"
  // display = "none";
  // display1 = "none";
  // display2 = "none";
 public spinner:boolean=false
 public searchText = '';
 public filteredUserList: any;
 public leadsData: Lead[] = [];
 public educationData!:Education;
 public genderData!:Gender;
 public usersData: User[]=[];
 public ProductsData!:Products;
 public LeadForm!:FormGroup;
 public id!:number;
 public leadDataById!:Lead;
  // selectedItem: any;
  public updateLeadForm!:FormGroup;
  public  Status = "New";
  public  Branch = "Hyderabad";
  public submitted: boolean = false;



  public page: number = 1;
  public count: number = 0;
  public tableSize = 10;
  public tableSizes: any = [5, 10, 15, 20]
  public leadsData2:Lead[]=[];
  public headers: any;
  public rolePermission:any;
  public userCreate: any;
  public userDelete: any;
  public  userRead: any;
  public  userWrite: any;
  searchTermName: any;
  searchTermPhone: any;
  searchTermProducts: any;
  searchTermStatus: any;
  searchTermBranch:any;
  searchTermEmployee:any;



  currentPage: number = 1;
  itemsPerPage: number = 15;
  totalPages: number = 0;
  displayedPages: number[] = [];
  sortedLeadList: any[] = []; // Array to hold sorted user list
  sortColumn: any = 'leadName'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  constructor(private router: Router,private leadservice: LeadService, private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private service:ListService,public toastService: ToastrService,) { 
      //  this.educationData = new Education();
    }
  ngOnInit(): void {

    this.LeadForm = this.FormBuilder.group({
      leadName: ['', Validators.compose([Validators.required])],
      contactNo: ['', Validators.compose([Validators.required])],
      emailId: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      assignTo: ['', Validators.compose([Validators.required])],
      leadDate: '2024-03-04T08:11:03.901Z',
      loginUserId: '1',

      enquiredDate: '2024-03-04T08:11:03.901Z',
      sourceId: '3',
      sourceSubCategoryId: '4',
      Profession: '',
      Product: '',
      gender: '',
      dob: '',
      education: '',
      avgIncome: '',
      branch: '',
      productId: ['', Validators.compose([Validators.required])],
      ProductName: '',
      employeeName: ''

    });
    this.updateLeadForm = this.FormBuilder.group({
      leadName: ['', Validators.compose([Validators.required])],
      contactNo: ['', Validators.compose([Validators.required])],
      emailId: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      assignTo: '',
      leadDate: '2024-03-04T08:11:03.901Z',
      loginUserId: '1',

      enquiredDate: '2024-03-04T08:11:03.901Z',
      sourceId: '3',
      sourceSubCategoryId: '4',
      Profession: '',
      Product: '',
      gender: '',
      dob: '',
      education: '',
      avgIncome: '',
      branch: '',
      productId: '',
      ProductName: '',
      employeeName: ''

    })


    // this.breadCrumbItems = [{ label: 'Base UI' }, { label: 'Tabs', active: true }];

    // this.leadservice.getAllLeadsData().subscribe((data: any) => {
    this.leadservice.getAllLeadsData().subscribe((data: any) => {
      this.leadsData2 = data;
      console.log('leads data', this.leadsData);
      this.updatePageData(1);

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

    // this.msterService.getAgentProductsData().subscribe((data: any) => {
    //   this.ProductsData = data;
    //   console.log('ProductListData', this.ProductsData);
    // });

    this.rolePermission = localStorage.getItem('rolepermissionjson');
    if(this.rolePermission==null || this.rolePermission=="null"){
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead =  "true"
      this.userWrite =  "true"
    }
    else{
    const getRoles = JSON.parse(this.rolePermission).find((item:any) => item.navigation== "Leads")
  
    // if(this.agent == 'true'){
     if(getRoles==undefined){
       this.userCreate = "true"
       this.userDelete = "true"
       this.userRead =  "true"
       this.userWrite =  "true"
     }
     else{
      this.userCreate = getRoles.create
      this.userDelete = getRoles.delete
      this.userRead = getRoles.read
      this.userWrite = getRoles.write
     }
    }

  }

  filterLeads() {
    if (this.leadsData2) {
      this.leadsData = this.leadsData2.filter((lead: any) =>
        this.filterByName(lead) &&
        this.filterByPhone(lead) &&
        this.filterByProducts(lead) &&
        this.filterByStatus(lead)&&
        this.filterByBranch(lead)&&
        this.filterByEmployee(lead)

      );

    }
    this.sortedLeadList = this.leadsData.slice();

    this.sortUserList()
  }

  filterByName(lead: any): boolean {
    if (!this.searchTermName) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.leadName && lead.leadName.toLowerCase().includes(this.searchTermName.toLowerCase());
  }

  filterByPhone(lead: any): boolean {
    if (!this.searchTermPhone) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.contactNo && lead.contactNo.toLowerCase().includes(this.searchTermPhone.toLowerCase());
  }

  filterByProducts(lead: any): boolean {
    if (!this.searchTermProducts) {
      return true; // No products search term, pass all leads
    }
    return lead && lead.productName && lead.productName.toLowerCase().includes(this.searchTermProducts.toLowerCase());
  }
  filterByStatus(lead: any): boolean {
    if (!this.searchTermStatus) {
      return true; // No products search term, pass all leads
    }
    return lead && lead.statusName && lead.statusName.toLowerCase().includes(this.searchTermStatus.toLowerCase());
  }
  filterByBranch(lead: any): boolean {
    if (!this.searchTermBranch) {
      return true; // No products search term, pass all leads
    }
    return lead && lead.branchName && lead.branchName.toLowerCase().includes(this.searchTermBranch.toLowerCase());
  }
  filterByEmployee(lead: any): boolean {
    if (!this.searchTermEmployee) {
      return true; // No products search term, pass all leads
    }
    return lead && lead.employeeName && lead.employeeName.toLowerCase().includes(this.searchTermEmployee.toLowerCase());
  }










  openModal() {
    // this.display = "block";
    this.router.navigate(['/chits/create-lead'])
  }


  followuptable(id:any){
    debugger
    this.router.navigate(['/chits/lead-fallowup',id])
  }
  // onCloseHandled() {
  //   this.display = "none";
  // }
  TimeLine() {
    this.router.navigate(['/chits/Time'])
  }

  // Change Tab Content
  // changeTab(tab: string) {
  //   this.currentTab = tab;
  // }
  // EditModal() {
  //   this.display1 = "block";
  // }
  // onCloseHandled1() {
  //   this.display1 = "none";
  // }
  // onClosed() {
  //   this.display2 = "none";
  // }
 

  onSubmit() {
    this.submitted = true;
    // if(this.LeadForm.valid){
    this.leadservice.createLead(this.LeadForm.value).subscribe((res: any) => {
      console.log('lead addeded successfully');
      console.log(res);
      this.showSuccess();
      setTimeout(() => {
      // this.display = "none";
      },2000);
   
    }, error => {
        this.showError();
    })
    // }
  }


  // handleItemClick(id: number) {
  //   this.selectedItem = this.leadsData.find((item: any) => item.id === id);
  //   console.log('item clicked', this.selectedItem)

  // }






  openDialog(id: any) {

    // const dialogRef = this.dialog.open(UpdateLeadComponent, { height: '700px', data: { id: id } })
    //   .afterClosed().subscribe((result: any) => { this.ngOnInit() });

       this.router.navigate(['/chits/updateLead',id])
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.leadsData;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.leadsData
  }

  showSuccess() {
    this.toastService.success(' Lead Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  sortState = { columnIndex: -1, ascending: true };

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





tablepageChanged(event: PageChangedEvent): void {
  this.updatePageData(event.page);
}

// updatePageData(page: number): void {
//   debugger
//   const startItem = (page - 1) * 8;
//   const endItem = page * 15;
//   this.leadsData = this.leadsData2.slice(startItem, endItem);
// }
updatePageData(page: number): void {
  const startItem = (page - 1) * this.itemsPerPage;
  const endItem = page * this.itemsPerPage;
  this.leadsData = this.leadsData2.slice(startItem, endItem);
  this.sortedLeadList = this.leadsData.slice();
    
  this.sortUserList()

  // Update total pages based on total items
  this.totalPages = Math.ceil(this.leadsData2.length / this.itemsPerPage);

  // Calculate visible page links (e.g., show up to 5 pages around the current page)
  const maxDisplayedPages = 3;
  let startPage = Math.max(1, page - Math.floor(maxDisplayedPages / 2));
  let endPage = Math.min(this.totalPages, startPage + maxDisplayedPages - 1);

  if (endPage - startPage + 1 < maxDisplayedPages) {
    startPage = Math.max(1, endPage - maxDisplayedPages + 1);
  }

  this.displayedPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
}

goToPage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.updatePageData(page);
  }
}

nextPage(): void {
  this.goToPage(this.currentPage + 1);
}

prevPage(): void {
  this.goToPage(this.currentPage - 1);
}

isFirstPage(): boolean {
  return this.currentPage === 1;
}

isLastPage(): boolean {
  return this.currentPage === this.totalPages;
}


openDelete(id:any)  {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'rgb(3, 142, 220)',
    cancelButtonColor: 'rgb(243, 78, 78)',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
  }).then(result => {
    if (result.value) {
      debugger
      this.leadservice.leaddelete(id).subscribe((res: any) => {
        debugger;
        Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: 'rgb(3, 142, 220)', icon: 'success', });

      }, error => {
        debugger;
      
          this.toastService.error('Something is Wrong')
               
      });
    } else if (
      // Read more about handling dismissals
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire({
        title: 'Cancelled',
        text: 'Your imaginary file is safe :)',
        icon: 'error',
        confirmButtonColor: 'rgb(3, 142, 220)',
        showCancelButton: true,
      })
    }
  });
}

onSort(column: SortColumn) {
  debugger
  // Resetting other headers
  this.headers.forEach((header: { listsortable: any; direction: string; }) => {
    if (header.listsortable !== column) {
      header.direction = '';
    }
  });

  // Assuming you have a default direction or logic to determine the direction
  const direction: SortDirection = 'asc';

  this.service.sortColumn = column;
  this.service.sortDirection = direction;
}
searchTerm: string = '';

// filterLeads() {
//   debugger
//   if (this.leadsData2) {
//     this.leadsData = this.leadsData2.filter((lead: any) =>
//       lead && lead.leadName && lead.leadName.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }
// }
assignlead(){
  this.router.navigate(['/real-estate/AssignLead'])
}
  
}


