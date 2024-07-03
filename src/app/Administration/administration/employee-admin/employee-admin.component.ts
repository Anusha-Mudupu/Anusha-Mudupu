/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  UserList } from 'src/app/chits-class';
import {  Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { UserService } from 'src/app/pages/real-estate/userlist/user.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ScreenwiseService } from 'src/app/chits/screenwise.service';
@Component({
  selector: 'app-employee-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, MatDialogModule, NgxPaginationModule, PaginationModule],
  templateUrl: './employee-admin.component.html',
  styleUrl: './employee-admin.component.scss'
})
export class EmployeeAdminComponent {
  public display = "none";
  public searchText: string = "";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  public Userlist1: any;
  public userlist: UserList[] = [];
  public userData: any;
  public updateUserForm: any;
  public getUserData: any;
   public sortKey: string = '';
  public reverse: boolean = false;
  public Agent = 'Agent'
  public id: any;
  public hideIdField: boolean = true;
  public selectedItem: any;
  public submitted: boolean = false;
  public page: number = 1;
  public count: number = 0;
  public tableSize = 10;
  public tableSizes: any = [5, 10, 15, 20];
  public passwordResetForm: any;
  @ViewChild('addProperty', { static: false }) addProperty?: ModalDirective;
  public formBuilder: any;
  public employeeList: UserList[] = [];
  public error12: any;
  public userDataById: any;
  public selectedUserStatus: boolean = false;
  public ids!: number;
  public statusId: any;
  public userActive: any;
  public userInactive: any;
  public selectedItems: any;
  public modalDisplay: string = 'none';
  public selectedId: any;
  sortColumn: string = 'firstName'; // Default sort column
  sortOrder: string = 'asc';
  sortedUserList: any[] = [];
  searchTermName: any;
  searchTermuserName: any;
  searchTermPhone: any;
  searchTermBranch: any;
  userListScreen: any;
  UserListActions: any;
  constructor(private screenWise: ScreenwiseService,public toastService: ToastrService, private userService: UserService, private dialog: MatDialog, private http: HttpClient, private FormBuilder: FormBuilder, private router: Router,) {
    this.userData = this.FormBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      id: '',
      email: ['', Validators.compose([Validators.required])],
      // roles:['Agent']
      branchId: ['', Validators.compose([Validators.required])]

    })
    this.updateUserForm = this.FormBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
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

  sort(key: string) {
    this.sortKey = key;
    this.reverse = !this.reverse;
    this.Userlist1.sort((a: any, b: any) => {
      const x = a[key];
      const y = b[key];
      return this.reverse ? x.localeCompare(y) : y.localeCompare(x);
    });
  }


  ngOnInit(): void {
    this.screenWise.getScreens().subscribe(data => {
      this.userListScreen = data.find(screen => screen.screenName === 'UserList');
      if (this.userListScreen) {
        // Assign the actions of the "Role" screen to roleActions
        this.UserListActions = this.userListScreen.actions;
      }
    });
    console.log("this.screens", this.userListScreen)
    this.userService.getUserList().subscribe((data: any) => {
      console.log(data);
      this.Userlist1 = data;
       console.log(this.Userlist1.data);
      console.log(this.Userlist1.data);
      this.employeeList = this.Userlist1.filter((user: any) => {
        return user.roles.includes('Employee');

      });
      this.sortedUserList = this.employeeList.slice();
      console.log("this.sortedUserList", this.sortedUserList)
      console.log("this.employeeList", this.employeeList);
      console.log("this.agentList", this.userlist);
      this.Userlist1.data.forEach((user: any) => {
        console.log("User id:", user.id);
        console.log("roles", user.roles)
      });
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.userlist;
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.userlist
  }
  openDialog() {
    this.router.navigate(['/chits/CreateEmployee'])

  }


  openEditForm(id: any) {
    this.router.navigate(['/chits/updateEmployee', id])

  }
  toggleIdField(): void {
    this.hideIdField = !this.hideIdField;
  }
  userClick(id: number) {
    console.log("id", id)
    this.display4 = "block";
  
    this.userService.getByUserId(id).subscribe((data: any) => {
      this.userDataById = data.data;
      console.log('userDataById', this.userDataById);
      this.passwordResetForm.controls['email'].setValue(this.userDataById.email);
    })

  }
  UpdateUserList() {

  }

  onSubmit() {
    this.submitted = true;
  
    debugger
    console.log("logindata", this.userData)

    this.userService.createUser(this.userData.value).subscribe((res: any) => {
      console.log('user addeded successfully');
      console.log(res);
      alert('User Added Successfully');
      this.display = "none";
    }, error => {
      alert('Somethig Went Wrong ')

    })

  }

  submitForm() {
    this.submitted = true;
    this.userService.createUser(this.userData.value).subscribe((data: any) => {
      console.log("user data", data);
      alert('User added Successflly');

    })
 
  }

  onCloseHandled() {
    this.submitted = true;
    this.display = "none";
  }
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
    this.sortedUserList.sort((a, b) => {
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

  filterLeads() {

    this.userData = this.employeeList.filter((lead: any) =>
      this.filterByName(lead) &&
      this.filterByPhone(lead) &&

      this.filterByUserName(lead) &&

      this.filterByBranch(lead)


    );



    this.sortedUserList = this.userData.slice();

    this.sortUserList()
  }

  clearAllSearchFields() {
    this.searchTermName = '';
   
    this.searchTermuserName = '';
  
    this.searchTermPhone = '';
    this.searchTermBranch = '';
    this.filterLeads();  // Optionally call your filter method to refresh the displayed data
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
          console.log('Password reset successful', data);
          this.showSuccess();
          this.closePassword();
          this.router.navigate(['chits/employee'])
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
  showSuccess() {
    this.toastService.success('Password Successfully Updated');
  }

  showError() {
    this.toastService.error('Something is Wrong')
  }
  openModal(id: any, userStatus: boolean) {
    this.selectedUserStatus = userStatus;
    console.log("id", id)
    this.modalDisplay = 'block';
    this.selectedItems = this.employeeList.find((item: any) => item.id == id);
    console.log("this.selectedItem", this.selectedItems.id);

    this.ids = this.selectedItems.id
    console.log("this.id", this.id);
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
  ShowActiveError() {
    this.toastService.error('Something is Wrong')
  }
  showActiveStatus() {
    this.toastService.success('Successfully Activated');
  }
  showInActiveStatus() {
    this.toastService.success('Successfully InActivated');
  }
  closeModal() {
    this.modalDisplay = 'none';
  }
  showSuccess1() {
    this.toastService.success('Deleted Employee data Deleted');
  }
}
