/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/chits-class';
import { FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { UserService } from 'src/app/pages/real-estate/userlist/user.service'
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrService } from 'ngx-toastr';
import { ScreenwiseService } from '../screenwise.service';
@Component({
  selector: 'app-userlist1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, MatDialogModule, NgxPaginationModule, PaginationModule],
  templateUrl: './userlist1.component.html',
  styleUrl: './userlist1.component.scss'
})
export class Userlist1Component {
  public spinner: boolean = true
  public display = "none";
  public searchText: string = "";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  Userlist1: any;
  public userlist: any;
  public user: any = User
  public userData: any = User
  public updateUserForm: FormGroup;
  private rolePermission: any = [];
  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  public sortKey: string = '';
  public reverse: boolean = false;
  public id: number = 0;
  public hideIdField: boolean = true;
  public selectedItem: any;
  public submitted: boolean = false;
  public page: number = 1;
  public count: number = 0;
  searchTermName: any;
  searchTermRole: any;
  searchTermuserName: any;
  searchTermEmail: any;
  searchTermPhone: any;
  searchTermBranch: any;
  @ViewChild('addProperty', { static: false }) addProperty?: ModalDirective;
  public roles: string[] = [];
  private userDataById: any = User;
  public passwordResetForm: any;
  public modalDisplay: string = 'none';
  public error12: string = '';
  public userId!: number;
  public active: any;
  public selectedItems: any;
  private ids!: number;
  public statusId: any;
  private userActive: any;
  private userInactive: any;
  public selectedUserStatus: boolean = false;
  public selectedId!: number;
  sortedUserList: any[] = [];
  sortColumn: string = 'firstName';
  sortOrder: string = 'asc';
  userListScreen: any;
  UserListActions: any;
  constructor(private userService: UserService, private screenWise: ScreenwiseService, private dialog: MatDialog, private http: HttpClient, private fb: FormBuilder, private router: Router, public toastService: ToastrService) {
    this.userData = this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      id: '',
      email: ['', Validators.compose([Validators.required])],
      branchId: ['', Validators.compose([Validators.required])]
    })
    this.updateUserForm = this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
    });
     this.passwordResetForm = this.fb.group({
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
      this.Userlist1 = data.data;
      console.log(this.Userlist1.data);
      this.userlist = this.Userlist1
      console.log("User List", this.userlist);
      this.sortedUserList = this.userlist.slice();
      console.log("this.sortedUserList", this.sortedUserList)
      this.sortUserList();
      this.Userlist1.forEach((user: any) => {
        console.log("User id:", user.id);
        this.userId = user.id
        console.log("roles", user.roles)
        this.roles = user.roles
        this.updatePageData(1);
      });
    })

    this.rolePermission = localStorage.getItem('rolepermissionjson');
    debugger

    if (this.rolePermission == null || this.rolePermission == "null") {
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead = "true"
      this.userWrite = "true"
    }
    else {
      const getRoles = JSON.parse(this.rolePermission).find((item: any) => item.navigation == "Users")
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
  changeStatus(id: string, status: boolean) {
    console.log("Status ID:", id);
    if (status) {
      this.userService.statusInactive(id, this.userActive).subscribe(response => {
        console.log("Status inactive:", response);
        this.showActiveStatus();
        this.ngOnInit();
      }, error => {
        this.ShowActiveError()
      }
      );
    } else {
      this.userService.statusActive(id, this.userInactive).subscribe(response => {
        console.log("Status active:", response);
        this.showInActiveStatus()
        this.ngOnInit();
      }
        , error => {
          this.ShowActiveError()
        });
    }
  }

  closeModal() {
    this.modalDisplay = 'none';
  }
  openDialog() {
    this.router.navigate(['/chits/createUser'])

  }
openEditForm(id: any) {
    this.router.navigate(['/chits/editUser', id])

  }
  AddPermission(id: any) {
    this.router.navigate(['/chits/userpermission', id])
  }
  toggleIdField(): void {
    this.hideIdField = !this.hideIdField;
  }
  userClick(id: number) {
    console.log("id", id)
    this.display4 = "block";
    this.selectedItem = this.userlist.find((item: any) => item.id == id);
    console.log("this.selectedItem", this.selectedItem.id);
    this.id = this.selectedItem.id;
    console.log("this.id", this.id);
    this.userService.getByUserId(this.id).subscribe((data: any) => {
      this.userDataById = data.data;
      console.log('userDataById', this.userDataById);
      this.passwordResetForm.controls['email'].setValue(this.userDataById.email);
    })

  }

  savePassword() {
    if (this.passwordResetForm.valid) {
      this.userService.resetPassword(this.passwordResetForm.value).subscribe(
        (data: any) => {
          console.log('Password reset successful');
          this.showSuccess();
          this.closePassword();
          this.router.navigate(['chits/userlist1'])
        },
        (error: any) => {
          console.error('Password reset failed:', error);
          this.showError();
        }
      );
    } else {
      this.error12 = 'Passwords do not match.'

    }
  }
tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }
   updatePageData(page: number): void {
    const pageSize = 8;
    const startItem = (page - 1) * pageSize;
    const endItem = startItem + pageSize;
    this.user = this.userlist.slice(startItem, endItem);
  }
  onSubmit() {
    this.submitted = true;
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
  openModal(id: any, userStatus: boolean) {
    this.selectedUserStatus = userStatus;
    console.log("id", id)
    this.modalDisplay = 'block';
    this.selectedItems = this.userlist.find((item: any) => item.id == id);
    console.log("this.selectedItem", this.selectedItems.id);
    this.ids = this.selectedItems.id
    console.log("this.id", this.id);
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
  openDelete(id: number) {
    this.selectedId = id
    this.display2 = "block";
  }
  DeleteList() {
    this.userService.userDelete(this.selectedId).subscribe((data) => {
      console.log("Deleted user data", data);
      this.showSuccess1();
      this.display2 = "none";
      this.ngOnInit();
    });
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
 clearAllSearchFields() {
    this.searchTermName = '';
    this.searchTermRole = '';
    this.searchTermuserName = '';
    this.searchTermEmail = '';
    this.searchTermPhone = '';
    this.searchTermBranch = '';
    this.filterLeads();  // Optionally call your filter method to refresh the displayed data
  }
  filterLeads() {
this.userData = this.userlist.filter((lead: any) =>
      this.filterByName(lead) &&
      this.filterByPhone(lead) &&
      this.filterByEmail(lead) &&
      this.filterByUserName(lead) &&
      this.filterByRole(lead) &&
      this.filterByBranch(lead));
      this.sortedUserList = this.userData.slice();
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
  filterByEmail(lead: any): boolean {
    if (!this.searchTermEmail) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.email && lead.email.toLowerCase().includes(this.searchTermEmail.toLowerCase());
  }
  filterByRole(lead: any): boolean {
    if (!this.searchTermRole) {
      return true; // No phone search term, pass all leads
    }
    return lead && lead.role && lead.role.toLowerCase().includes(this.searchTermRole.toLowerCase());
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
showSuccess() {
    this.toastService.success('Password Successfully Updated');
  }
showError() {
    this.toastService.error('Something is Wrong')
  }
  openViewForm(id: any) {
    this.router.navigate(['/chits/viewUser', id])
}
  showSuccess1() {
    this.toastService.success('Deleted User Deleted');
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
}
