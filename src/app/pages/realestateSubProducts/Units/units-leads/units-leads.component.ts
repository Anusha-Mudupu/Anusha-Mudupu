/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { LeadService } from 'src/app/chits/Services/lead.service';
import { Lead } from 'src/app/chits-class';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Education, Gender, Products, User } from 'src/app/chits-class';
import { Router } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import Swal from 'sweetalert2';
import { ListService } from 'src/app/pages/table/listjs/listjs.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { MenuitemsService } from 'src/app/menuitems.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
type SortColumn = any;
type SortDirection = 'asc' | 'desc';


@Component({
  selector: 'app-units-leads',
  standalone: true,
  imports: [CommonModule, TabsModule, FormsModule,
    ReactiveFormsModule, MatDialogModule, NgxPaginationModule
    , ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,
    CKEditorModule,
    SimplebarAngularModule],
  providers: [ListService, DecimalPipe],
  templateUrl: './units-leads.component.html',
  styleUrl: './units-leads.component.scss'
})
export class UnitsLeadsComponent implements OnInit {
  public spinner: boolean = false
  public leadsData: Lead[] = [];
  public ProductsData!: Products;
  public LeadForm!: FormGroup;
  public id!: number;
  public leadDataById!: Lead;
  public Editor = ClassicEditor;
  public updateLeadForm!: FormGroup;
  public submitted: boolean = false;
  public verticaldropdown = false;
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
  searchTermName: any;
  searchTermPhone: any;
  searchTermProducts: any;
  searchTermStatus: any;
  searchTermBranch: any;
  searchTermEmployee: any;
  searchTermEmail: any;
  searchTermChitValue: any;
  searchTermDuration: any;
  searchTermCategoryName: any;
  searchTermCategory: any;
  currentPage: number = 1;
  itemsPerPage: number = 15;
  totalPages: number = 0;
  displayedPages: number[] = [];
  sortedLeadList: any[] = [];
  sortColumn: any = 'leadName';
  sortOrder: string = 'asc';
  LeadsData: Lead[] = []
  realEstateLeadData: any;
  adminLeadData: any;
  chitsLeadData: any;
  showRealEstateLeadData = false;
  selectedLabel: string = '';
  verticalData: any;
  public verticalid: any;
  role: any;
  hideEmployeeName: boolean = false;
  assignLead: boolean = true;
  assignTransfer: boolean = true;
  public display = "none";
  EmailPopup = "none";
  constructor(private router: Router, private leadservice: LeadService, private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private service: ListService, public toastService: ToastrService, private menuitemservice: MenuitemsService) {
    this.leadservice.getrealestateleaddata("2").subscribe((data: any) => {
      this.realEstateLeadData = data;
    });
    this.leadservice.getVerticalDropdown().subscribe((data: any) => {
      this.verticalData = data;
      console.log("vertical", this.verticalData)
    });
  }
  ngOnInit(): void {
    this.getSelectedData();
    this.role = localStorage.getItem('Rolename');
    if (this.role == "Agent") {
      this.hideEmployeeName = false;
      this.assignLead = false;
      this.assignTransfer = false;
    }
    else if (this.role === "Employee") {
      this.assignLead = false;
      this.assignTransfer = false
    }
    this.rolePermission = localStorage.getItem('rolepermissionjson');
    if (this.rolePermission == null || this.rolePermission == "null") {
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead = "true"
      this.userWrite = "true"
    }
    else {
      const getRoles = JSON.parse(this.rolePermission).find((item: any) => item.navigation == "Leads")
      if (getRoles == undefined) {
        this.userCreate = "true"
        this.userDelete = "true"
        this.userRead = "true"
        this.userWrite = "true"
      }
      else {
        this.userCreate = getRoles.create
        this.userDelete = getRoles.delete
        this.userRead = getRoles.read
        this.userWrite = getRoles.write
      }
    }
  }
  collapse(id: any) {
    document.querySelector('#' + id)?.classList.toggle('show')
  }
  getSelectedData() {
    let filteredData = [];
    filteredData = this.realEstateLeadData || [];
    filteredData = filteredData.filter((lead: any) =>
      this.filterByName(lead) &&
      this.filterByPhone(lead) &&
      this.filterByProducts(lead) &&
      this.filterByStatus(lead) &&
      this.filterByBranch(lead) &&
      this.filterByEmployee(lead)
    );

    return filteredData;
  }

  trackByFn(index: number, item: any): number {
    return item.id; // Use the lead ID as the unique identifier
  }

  opennotificationModel() {
    this.display = "block";
  }
  onClosed() {
    this.display = "none";
  }

  openEmailModel() {
    this.EmailPopup = "block"
  }
  onEmailPopupClosed() {
    this.EmailPopup = "none";
  }
  clearAllSearchFields() {
    this.searchTermName = '';
    this.searchTermEmail = '';
    this.searchTermPhone = '';
    this.searchTermProducts = '';
    this.searchTermStatus = '';
    this.searchTermBranch = '';
    this.searchTermChitValue = '';
    this.searchTermDuration = '';
    this.searchTermCategoryName = '';
    this.searchTermCategory = '';
    this.searchTermEmployee = '';
    this.filterLeads()
  }

  filterLeads() {
    if (this.chitsLeadData || this.realEstateLeadData || this.adminLeadData) {
      this.leadsData = this.chitsLeadData || this.realEstateLeadData || this.adminLeadData.filter((lead: any) =>
        this.filterByName(lead) &&
        this.filterByPhone(lead) &&
        this.filterByEmailId(lead) &&
        this.filterByProducts(lead) &&
        this.filterByStatus(lead) &&
        this.filterByBranch(lead) &&
        this.filterByEmployee(lead) &&
        this.filterByDuration(lead) &&
        this.filterByCategoryName(lead) &&
        this.filterByCategory(lead)

      );

    }
  }

  filterByName(lead: any): boolean {
    if (!this.searchTermName) {
      return true;
    }
    return lead && lead.leadName && lead.leadName.toLowerCase().includes(this.searchTermName.toLowerCase());
  }
  filterByEmailId(lead: any): boolean {
    if (!this.searchTermEmail) {
      return true;
    }
    return lead && lead.emailId && lead.emailId.toLowerCase().includes(this.searchTermEmail.toLowerCase());
  }

  filterByPhone(lead: any): boolean {
    if (!this.searchTermPhone) {
      return true;
    }
    return lead && lead.contactNo && lead.contactNo.toLowerCase().includes(this.searchTermPhone.toLowerCase());
  }

  filterByProducts(lead: any): boolean {
    if (!this.searchTermProducts) {
      return true;
    }
    return lead && lead.productName && lead.productName.toLowerCase().includes(this.searchTermProducts.toLowerCase());
  }
  filterByStatus(lead: any): boolean {
    if (!this.searchTermStatus) {
      return true;
    }
    return lead && lead.statusName && lead.statusName.toLowerCase().includes(this.searchTermStatus.toLowerCase());
  }
  filterByBranch(lead: any): boolean {
    if (!this.searchTermBranch) {
      return true;
    }
    return lead && lead.branchName && lead.branchName.toLowerCase().includes(this.searchTermBranch.toLowerCase());
  }
  filterByChitValue(lead: any): boolean {
    if (!this.searchTermChitValue) {
      return true;
    }
    return lead && lead.employeeName && lead.employeeName.toLowerCase().includes(this.searchTermEmployee.toLowerCase());
  }

  filterByDuration(lead: any): boolean {
    if (!this.searchTermDuration) {
      return true;
    }
    return lead && lead.tenureInMonths && lead.tenureMonths.toLowerCase().includes(this.searchTermDuration.toLowerCase());
  }

  filterByCategoryName(lead: any): boolean {
    if (!this.searchTermCategoryName) {
      return true;
    }
    return lead && lead.productType && lead.productType.toLowerCase().includes(this.searchTermCategoryName.toLowerCase());
  }
  filterByCategory(lead: any): boolean {
    if (!this.searchTermCategory) {
      return true;
    }
    return lead && lead.product && lead.product.toLowerCase().includes(this.searchTermCategory.toLowerCase());
  }
  filterByEmployee(lead: any): boolean {
    if (!this.searchTermEmployee) {
      return true;
    }
    return lead && lead.employeeName && lead.employeeName.toLowerCase().includes(this.searchTermEmployee.toLowerCase());
  }
  openModal() {
    this.router.navigate(['/real-estate/units-create-leads']);
  }
  followuptable(id: any) {
    this.router.navigate(['/real-estate/leadfollowUp', id]);
  }
  TimeLine() {
    this.router.navigate(['/chits/Time']);
  }
  onSubmit() {
    this.submitted = true;
    this.leadservice.createLead(this.LeadForm.value).subscribe((res: any) => {
      console.log('lead addeded successfully');
      console.log(res);
      this.showSuccess();
      setTimeout(() => {
      }, 2000);

    }, error => {
      this.showError();
    })
  }
  openDialog(id: any) {
    this.router.navigate(['/real-estate/villas-edit-leads', id])
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
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {

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
  openDelete(id: any) {
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
  assignlead() {
    this.router.navigate(['/real-estate/AssignLead'])
  }

  leadTransfer() {
    this.router.navigate(['/chits/lead-transfer']);
  }
  onVerticalChange(event: any) {
    this.verticalid = event.target.value;
    this.getSelectedData();
  }

}
