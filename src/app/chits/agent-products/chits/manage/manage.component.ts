/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { UntypedFormGroup, UntypedFormBuilder, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';

import { NgbdListSortableHeader, SortColumn, SortDirection } from 'src/app/pages/table/listjs/listjs-sortable.directive';
import { ListService } from 'src/app/pages/table/listjs/listjs.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule, PageChangedEvent } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { SimplebarAngularModule } from 'simplebar-angular';
import { TableRoutingModule } from 'src/app/pages/table/table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import Swal from 'sweetalert2';

import { LeadService } from 'src/app/lead.service';
import { roledata, verticalData } from 'src/app/chits-class';
import { ScreenwiseService } from 'src/app/chits/screenwise.service';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
    TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule],
  providers: [ListService, DecimalPipe],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  @ViewChildren(NgbdListSortableHeader) headers!: QueryList<NgbdListSortableHeader>;
  public roleData: roledata[] = [];
  public Status = "Created";
  public Branch = "Hyderabad";
  public listJsForm!: UntypedFormGroup;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  submitted = false;
  public roleData2: roledata[] = [];;
  public searchTerm: string = '';
  public spinner: boolean = true
  public verticalData: verticalData[] = [];
  public verticalid = "1";
  public rolePermission: any = [];
  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  public display = "none";
  searchTermName: any;
  searchTermPhone: any;
  searchTermProducts: any;
  sortedRoleList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'roleName'; // Default sort column
  sortOrder: string = 'asc';
  roleScreens: any;
  roleActions: any;
  public cards: any = [
    {
      "totalContacts": "Total Contacts",
      "totalLeads": "Total Leads",
      "ConvertedLeads": "Converted Leads",
      "Businessvalue": "Business value",
      "PipeLine": " Pipe Line"
    }
  ]
  public verticalData1: any;
  picklistData: any;
  BusinessverticalData: any;
  lookupConstants: any;
  data: any;
  constructor(private _router: Router, private screenWise: ScreenwiseService,
    private toastService: ToastrService, private leadService: LeadService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private service: ListService) { }

  ngOnInit(): void {


    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

      // Filter data based on lookupCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.lookupCode === "BusinessVertical");

      console.log("this.verticalData", this.verticalData);

      // Access lookupConstants array from verticalData
      if (this.verticalData1.length > 0) {
        this.lookupConstants = this.verticalData1[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);
        // Now you can use lookupConstants array as needed
      }
    })

    this.screenWise.getScreens().subscribe(data => {
      this.roleScreens = data.find(screen => screen.screenName === 'Role');
      if (this.roleScreens) {
        // Assign the actions of the "Role" screen to roleActions
        this.roleActions = this.roleScreens.actions;
      }
    });
    console.log("this.screens", this.roleScreens)

    this.sortedRoleList = this.roleData2.slice();
    console.log("this.sortedUserList", this.sortedRoleList)
    debugger
    this.getRolesData()
    this.filterLeads()

    //getbusinessvertical dropdown
    this.leadService.getVerticalDropdown().subscribe((data: any) => {
      this.verticalData = [{ id: 0, name: 'All' }, ...data];
      console.log("vertical", this.verticalData)
    });
    //here checking role base permission
    this.rolePermission = localStorage.getItem('rolepermissionjson');
    if (this.rolePermission == null || this.rolePermission == "null") {
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead = "true"
      this.userWrite = "true"
    }
    else {
      const getRoles = JSON.parse(this.rolePermission).find((item: any) => item.navigation == "Roles")

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
  clearAllSearchFields() {
    this.searchTermName = '';

    this.searchTermPhone = '';

    this.filterLeads();
  }

  filterLeads() {
    if (this.roleData2) {
      this.roleData = this.roleData2.filter((lead: any) =>
        this.filterByName(lead) &&
        this.filterByPhone(lead)
         );

    }
    this.sortedRoleList = this.roleData.slice();

    this.sortUserList()
  }

  filterByName(lead: any): boolean {
    if (!this.searchTermName) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.roleName && lead.roleName.toLowerCase().includes(this.searchTermName.toLowerCase());
  }

  filterByPhone(lead: any): boolean {
    if (!this.searchTermPhone) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.description && lead.description.toLowerCase().includes(this.searchTermPhone.toLowerCase());
  }


  //Getroles method
  getRolesData() {
    let verticalid = parseInt(this.verticalid)

    this.leadService.getRoles().subscribe((data: any) => {


      this.roleData2 = data.data;
      this.sortedRoleList = this.roleData2.slice();
      console.log("this.sortedUserList", this.sortedRoleList)
      this.spinner = false
      this.updatePageData(1);
    });
  }
  onSort(column: SortColumn) {
    debugger
    // Resetting other headers
    this.headers.forEach(header => {
      if (header.listsortable !== column) {
        header.direction = '';
      }
    });

    // Assuming you have a default direction or logic to determine the direction
    const direction: SortDirection = 'asc';

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
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
    this.sortedRoleList.sort((a, b) => {
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


  openDelete(rolename: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        this.leadService.deleteRole(rolename).subscribe((response: any) => {
          console.log("response", response)

          if (response.success === true) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Role has been deleted.',
              icon: 'success',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });
          } else {
            Swal.fire({
              title: 'Role Not Deleted!',
              text: "Role already assigned, can't be Deleted.",
              icon: 'warning',
              confirmButtonColor: 'rgb(3, 142, 220)',
            });
            this.getRolesData();
          }

        }, error => {
          this.toastService.error('Something went wrong while deleting the role.');
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: 'rgb(3, 142, 220)',
          showCancelButton: true,
        });
      }
    });
  }


  get form() {
    return this.listJsForm.controls;
  }


  tablePageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    debugger
    const startItem = (page - 1) * 20;
    const endItem = page * 20;
    this.roleData = this.roleData2.slice(startItem, endItem);
    this.sortedRoleList = this.roleData.slice();

    this.sortUserList()
  }

  showSuccess() {
    this.toastService.success(' Lead Created Successfully');
  }

  openAdd() {

    this._router.navigate(['/chits/addrole', this.verticalid])

  }
  openEdit(name: any) {
    debugger
    this._router.navigate(['/chits/editrole', name])

  }
  smallModal() {

    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}




