/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpadateagentComponent } from './upadateagent/upadateagent.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/chits-class';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ScreenwiseService } from 'src/app/chits/screenwise.service';
import { PaginationInstance } from 'ngx-pagination';
import { LeadService } from 'src/app/lead.service';

@Component({
  selector: 'app-agent-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, PaginationModule,NgxPaginationModule],
  templateUrl: './agent-list.component.html',
  styleUrl: './agent-list.component.scss'
})
export class AgentListComponent {
  public searchText: string = "";
  public display = "none";
  public EditMOdel = "none";
  public DeleteMOdel = "none";
  public agentInactive = "none";
  public resetPassword = "none";
  public agentList1: any;
  public agentList: any[] = [];
  public agentform: any;
  public submitted: boolean = false;
  // public updateAgentForm: any;
  public selectedItem: any;
  public page: number = 1;
  public count: number = 0;
  public tableSize = 10;
  public tableSizes: any = [5, 10, 15, 20]
  public id: any;
  public updateUserForm: any;
  public rolePermission: any;
  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  public employeeList: any;
  public userDataById: any;
  public selectedUserStatus: boolean = false;
  public ids: string = '';
  public statusId!: number;
  public userActive: any;
  public userInactive: any;
  public selectedItems: any;
  public modalDisplay: string = 'none';
  public passwordResetForm: any;
  public selectedId: any;
  agentLst: any;
  agents: any;
  sortColumn: string = 'firstName'; // Default sort column
  sortOrder: string = 'asc';
  sortedAgentList: any[] = [];

  searchTermBranch: any;
  searchTermName: any;
  searchTermuserName: any;
  searchTermPhone: any;
  searchTermPanNo: any;
  agentData: any;
  userListScreen: any;
  UserListActions: any;
  currentPage: number = 1;
  itemsPerPage: number = 15;
  pagesToShow: number = 5;
  data: any;
  verticalData1: any;
  lookupConstants: any;
  constructor(private leadService: LeadService,private screenWise: ScreenwiseService, private FormBuilder: FormBuilder, private userService: UserService,
    private dialog: MatDialog, private router: Router, public toastService: ToastrService,
  ) {
    this.agentform = this.FormBuilder.group({
      // code: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])],
     
      phno: ['', Validators.compose([Validators.required])],
      pwd: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required])],
      userId: ['', Validators.compose([Validators.required])],
      subsourceid:0,
      businessCode:'',
      isDeleted: true,
      isActive: true
      // roles: this.FormBuilder.array([('Agent')]),
      // userName: ['', Validators.compose([Validators.required])]
     
    })
    // this.updateAgentForm = this.FormBuilder.group({
    //   code: ['', Validators.compose([Validators.required])],
    //   firstName: ['', Validators.compose([Validators.required])],
    //   lastName: ['', Validators.compose([Validators.required])],
    //   phoneNumber: ['', Validators.compose([Validators.required])],
    //   password: ['', Validators.compose([Validators.required])],
    //   id: ['', Validators.compose([Validators.required])],
    //   email: ['', Validators.compose([Validators.required])],
    //   branchId: ['', Validators.compose([Validators.required])],
    //   roles: this.FormBuilder.array([('Agent')]),
    //   userName: ['', Validators.compose([Validators.required])],
    //   branchName: ['', Validators.compose([Validators.required])]

    // });
    this.updateUserForm = this.FormBuilder.group({
      code: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      branchId: ['', Validators.compose([Validators.required])],
      roles: this.FormBuilder.array([('Agent')]),
      userName: ['', Validators.compose([Validators.required])],
      branchName: ['', Validators.compose([Validators.required])]

    });
    this.passwordResetForm = this.FormBuilder.group({

      email: [''],
      newPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordPatternValidator
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordPatternValidator
      ]],

    });



  }
  ngOnInit(): void {

    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

      // Filter data based on lookupCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.lookupCode === "BusinessVertical");

     

      // Access lookupConstants array from verticalData
      if (this.verticalData1.length > 0) {
        this.lookupConstants = this.verticalData1[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);
        // Now you can use lookupConstants array as needed
      }
    })
    this.userService.getAgentList().subscribe((data: any) => {
      console.log("Agent List", data);
      this.agentList1 = data;
      this.agentLst = this.agentList1.data;
      this.sortedAgentList = this.agentLst.slice();
      this.sortUserList();
      console.log("this.agentLst", this.agentLst);
      console.log("Sorted Agent List", this.sortedAgentList);
 

    });
    this.screenWise.getScreens().subscribe(data => {
      this.userListScreen = data.find(screen => screen.screenName === 'UserList');
      if (this.userListScreen) {
        // Assign the actions of the "Role" screen to roleActions
        this.UserListActions = this.userListScreen.actions;
      }
    });
    console.log("this.screens", this.userListScreen)

    this.rolePermission = localStorage.getItem('rolepermissionjson');
    if (this.rolePermission == null || this.rolePermission == "null") {
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead = "true"
      this.userWrite = "true"
    }
    else {
      const getRoles = JSON.parse(this.rolePermission).find((item: any) => item.navigation == "Agents")

      // if(this.agent == 'true'){
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
  userClick(id: number) {
    console.log("id", id)
    this.display4 = "block";
    this.selectedItem = this.agentList.find((item: any) => item.id == id);
    console.log("this.selectedItem", this.selectedItem.id);
    this.id = this.selectedItem.id;
    this.userService.getByUserId(id).subscribe((data: any) => {
      this.userDataById = data.data;
      console.log('userDataById', this.userDataById);
      this.passwordResetForm.controls['email'].setValue(this.userDataById.email);
    })

  }
  onSubmit() {

    this.submitted = true;
    console.log("data")
    //  if (this.userData.valid) {
    this.userService.postAgentList(this.agentform.value).subscribe((data: any) => {
      console.log("user data", data);
      // this.userData.reset();
      //  alert('User added Successflly');
      this.showSuccess();
      this.onCloseHandled();
      // this.onCloseHandled()

    }, error => {
      // alert('Something Went Wrong');
      this.showError();
    })

    //  }

    //  } 




  }

  openModal() {
    this.display = "block";
  }
  openStatusForm(id: any, userStatus: boolean) {
    this.selectedUserStatus = userStatus;
    console.log("id", id)
    this.modalDisplay = 'block';
    this.selectedItems = this.agentList.find((item: any) => item.id == id);
    console.log("this.selectedItem", this.selectedItems.id);

    this.ids = this.selectedItems.id
    console.log("this.id", this.id);
  }
  onCloseHandled() {
    this.display = "none";
  }
  onEditClose() {
    this.EditMOdel = 'none';
  }
  onEditModelOpen() {
    this.EditMOdel = 'block'
  }
  openDeleteModel() {
    this.DeleteMOdel = "block";
  }

  // onClosed() {
  //   this.DeleteMOdel = "none";
  // }

  openInactiveModel() {
    this.agentInactive = "block";
  }
  onClosedInactive() {
    this.agentInactive = "none";
  }
  onresetPasswordModelOpen() {
    this.resetPassword = "block";

  }
  onResetPasswordModelClosed() {
    this.resetPassword = "none";
  }



  // sortTable(columnIndex: number) {
  //   const table = document.getElementById("sortable-table") as HTMLTableElement;
  //   const rows = Array.from(table.rows).slice(1); // Exclude the header row

  //   rows.sort((a, b) => {
  //     const aValue = a.cells[columnIndex]?.textContent?.trim() || '';
  //     const bValue = b.cells[columnIndex]?.textContent?.trim() || '';

  //     // Customize the sorting logic based on your data type
  //     return aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });
  //   });

  //   // Clear the existing table rows
  //   const tbody = table.getElementsByTagName('tbody')[0];
  //   tbody.innerHTML = "";

  //   // Append the sorted rows to the table
  //   rows.forEach(row => tbody.appendChild(row));
  // }




  togglePasswordVisibility(inputId: any) {
    const passwordInput = document.getElementById(inputId) as HTMLInputElement;
    const toggleButton = document.getElementById(`toggle${inputId.charAt(0).toUpperCase() + inputId.slice(1)}`);

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      if (toggleButton) toggleButton.innerHTML = '👁️';
    } else {
      passwordInput.type = 'password';
      if (toggleButton) toggleButton.innerHTML = '👁️'; // Cross mark
    }
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
    this.sortedAgentList.sort((a: any, b: any) => {
      // Replace 'name' with the attribute you want to sort by
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
  pageChanged(event: any) {
    this.currentPage = event.page;
  }

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.sortedAgentList.slice(startIndex, startIndex + this.itemsPerPage);
  }
  // sortUserList() {
  //   this.sortedAgentList.sort((a, b) => {
  //     let aValue = a[this.sortColumn];
  //     let bValue = b[this.sortColumn];
  //     if (typeof aValue === 'string' && typeof bValue === 'string') {
  //       // Case-insensitive sorting for string values
  //       aValue = aValue.toLowerCase();
  //       bValue = bValue.toLowerCase();
  //     }
  //     if (this.sortOrder === 'asc') {
  //       return aValue > bValue ? 1 : -1;
  //     } else {
  //       return aValue < bValue ? 1 : -1;
  //     }
  //   });
  // }
  openDialog1(id: any) {
    // console.log('open dialog clicked')
    //   const dialogRef = this.dialog.open(UpadateagentComponent, { width:'700px',height:'auto',disableClose: true,
    //   data: { id:id }
    //   })
    //  .afterClosed().subscribe((result:any) => { this.ngOnInit(); });

    this.router.navigate(['chits/editAgent', id])

  }
  // onTableDataChange(event: any) {
  //   this.page = event;
  //   this.agentList;
  // }
  // onTableSizeChange(event: any) {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.agentList;
  // }


  // openModal() {
  //   this.display = "block";
  // }
  // onCloseHandled() {
  //   this.submitted = true;
  //   this.display = "none";
  // }
  EditModal() {
    this.display1 = "block";
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  onClosed() {
    this.display2 = "none";
  }
  openDelete(id: any) {
    this.selectedId = id
    this.display2 = "block";
  }
  DeleteList() {
    this.userService.userDelete(this.selectedId).subscribe((data) => {
      console.log("Deleted user data", data);
      this.showSuccess1();
      this.display2 = "none";
      this.ngOnInit();
    })
  }
  openActive() {
    this.display3 = "block";
  }
  closeActive() {
    this.display3 = "none";
  }
  openPassword() {
    this.display4 = "block";
  }
  closePassword() {
    this.display4 = "none"
  }
  showSuccess() {
    this.toastService.success(' Agent Created Successfully');
  }
  showSuccess1() {
    this.toastService.success('Deleted Agent Data');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  changeStatus(id: string, status: boolean) {
    console.log("Status ID:", id);
    if (status) {
      this.userService.statusInactive(id, this.userActive).subscribe(response => {
        console.log("Status inactive:", response);
        this.showActiveStatus();
        this.ngOnInit();
        // Handle response as needed
      }, error => {
        this.ShowActiveError()
      }
      );
    } else {
      this.userService.statusActive(id, this.userInactive).subscribe(response => {
        console.log("Status active:", response);
        this.showInActiveStatus()
        this.ngOnInit();
        // Handle response as needed
      }
        , error => {
          this.ShowActiveError()
        });
    }
  }
 
  get totalPages(): number {
    return Math.ceil(this.sortedAgentList.length / this.itemsPerPage);
  }

  // Method to change current page
  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  // Method to get an array of page numbers for pagination buttons
  getPages(): number[] {
    const totalPages = this.totalPages;
    const current = this.currentPage;
    const pagesToShow = this.pagesToShow;
    let start = Math.max(1, current - Math.floor(pagesToShow / 2));
    let end = Math.min(totalPages, start + pagesToShow - 1);

    // Adjust start when approaching the end of pages
    start = Math.max(1, end - pagesToShow + 1);

    return Array(end - start + 1).fill(0).map((_, index) => start + index);
  }

  totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }
  ShowActiveError() {
    this.toastService.error('Something is Wrong')
  }
  showActiveStatus() {
    this.toastService.success('Successfully Activated');
  }
  showInActiveStatus() {
    this.toastService.success('Successfully InActivated');
  }
  // changeStatus() {

  //   console.log("status id")
  //   if (this.selectedUserStatus) {

  //     this.userService.statusInactive(this.ids, this.userInactive).subscribe(response => {
  //       console.log("status inactive", response)
  //       if (response.message == 'User active status set to False') {

  //         this.selectedUserStatus = false;

  //         this.closeModal();
  //         this.ngOnInit();
  //       } else {

  //         console.error('Unexpected response:', response);

  //       }
  //     });
  //   }
  //   else {

  //     this.userService.statusActive(this.ids, this.userActive).subscribe(response => {
  //       console.log("status active", response)

  //       if (response.message == 'User active status set to True') {

  //         this.selectedUserStatus = true;

  //         this.closeModal();
  //         this.ngOnInit();
  //       } else {

  //         console.error('Unexpected response:', response);

  //       }
  //     });


  //   }
  // }
  closeModal() {
    // Function to close the modal
    this.modalDisplay = 'none';
  }
  passwordPatternValidator(control: any) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(control.value) ? null : { invalidPassword: true };
  }



  passwordMatchValidator(formGroup: any) {
    const password = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword').setErrors(null);
    }
  }

  savePassword() {
    if (this.passwordResetForm.valid) {
      this.userService.resetPassword(this.passwordResetForm.value).subscribe(
        (data: any) => {
          console.log('Password reset successful');
          this.showSuccess();
          this.closePassword();
          this.router.navigate(['chits/AgentList'])
        },
        (error: any) => {
          console.error('Password reset failed:', error);
          this.showError();
        }
      );
    } else {
      // this.error12 = 'Passwords do not match.'
      this.showError();

    }
  }
  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {

    // const startItem = (page - 1) * 8;
    // const endItem = page * 8;
    // this.user = this.userlist.slice(startItem, endItem);
    const pageSize = 8; // Number of rows to display per page
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;

    this.agents = this.agentList.slice(startItem, endItem);
    this.sortedAgentList = this.agents.slice();
    this.sortUserList()
  }

  clearAllSearchFields() {
    this.searchTermName = '';
    
    this.searchTermuserName = '';
    this.searchTermPanNo = '';
    this.searchTermPhone = '';
    this.searchTermBranch = '';
    this.filterLeads();  
  }

  filterLeads() {

    this.agentData = this.agentList.filter((lead: any) =>
      this.filterByName(lead) &&
      this.filterByPhone(lead) &&

      this.filterByUserName(lead) &&

      this.filterByBranch(lead) &&
      this.filterByPAN(lead)


    );



    this.sortedAgentList = this.agentData.slice();

    this.sortUserList()
  }
  filterByName(lead: any): boolean {
    if (!this.searchTermName) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.firstName && lead.firstName.toLowerCase().includes(this.searchTermName.toLowerCase());
  }
  filterByUserName(lead: any): boolean {
    if (!this.searchTermuserName) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.userName && lead.userName.toLowerCase().includes(this.searchTermuserName.toLowerCase());
  }
  filterByPAN(lead: any): boolean {
    if (!this.searchTermPanNo) {
      return true; // No name search term, pass all leads
    }
    return lead && lead.panNo && lead.panNo.toLowerCase().includes(this.searchTermPanNo.toLowerCase());
  }



  filterByPhone(lead: any): boolean {
    if (!this.searchTermPhone) {
      return true; // No products search term, pass all leads
    }
    return lead && lead.phoneNumber && lead.phoneNumber.toLowerCase().includes(this.searchTermPhone.toLowerCase());
  }
  filterByBranch(lead: any): boolean {
    if (!this.searchTermBranch) {
      return true; // No products search term, pass all leads
    }
    return lead && lead.branchName && lead.branchName.toLowerCase().includes(this.searchTermBranch.toLowerCase());
  }

}
