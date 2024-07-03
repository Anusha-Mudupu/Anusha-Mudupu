/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserList } from 'src/app/chits-class';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { UserService } from './user.service';
import { ThemeService } from 'src/app/layouts/rightsidebar/theme.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent implements OnInit {
  display = "none";
  searchText: any = "";
  display1 = "none";
  display2 = "none";
  display3 = "none";
  display4 = "none";
  Userlist1: any;
  userlist: UserList[] = [];
  userData: any;
  updateUserForm: any;
  getUserData: any;
  // userData: any = {
  //   firstName: '',
  //   lastName: '',
  //   phoneNumber: '',
  //   email: '',
  //   password: '',
  //   roles: ['Agent']
  // };
  sortKey: string = '';
  reverse: boolean = false;
  Agent = 'Agent'
  id: any;
  hideIdField: boolean = true;
  selectedItem: any;
  submitted: boolean = false;
  constructor(private userService: UserService, private http: HttpClient, private fb: FormBuilder) {
    this.userData = this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required])],
      email: '',
      // roles:new FormArray([],Validators.required)
    })
    this.updateUserForm = this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      email: '',
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
    // this.userService.getUserList().subscribe((data: any) => {
    //   console.log(data);
    //   this.Userlist1 = data;

    //   console.log(this.Userlist1.data);
    //   this.userlist = this.Userlist1.data
    //   this.Userlist1.data.forEach((user: any) => {
    //     console.log("User id:", user.id);


    //   });
    // })
  }
  toggleIdField(): void {
    this.hideIdField = !this.hideIdField;
  }
  userClick(id: number) {
    console.log("id", id)
    this.display1 = "block";
    this.selectedItem = this.userlist.find(item => item.id == id);
    console.log("this.selectedItem", this.selectedItem.id);
    this.id = this.selectedItem.id

  }
  UpdateUserList() {

  }
  onSubmit(updateUserForm: any) {
    console.log("data")
    if (this.updateUserForm.valid) {
      this.userService.UpdateUser(this.id, this.updateUserForm.value).subscribe((res: any) => {
        console.log('submitted form', this.updateUserForm.value);
        alert('User Updated Successflly');
      }, errorMsg => {
        window.alert('Something Went Wrong');
      });
    }
    alert("successfully updated!")
    this.display1 = "none";
  }
  submitForm(userData: any) {
    this.submitted = true;
    console.log("data")
    if (this.userData.valid) {
      this.userService.createUser(this.userData.value).subscribe((data: any) => {
        console.log("user data", data);
        alert('User added Successflly');
        // this.onCloseHandled()
      }, errorMsg => {
        window.alert('Something Went Wrong');
      })
    }

  }

  openModal() {
    this.display = "block";
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
  openDelete() {
    this.display2 = "block";
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

  sortTable(columnIndex: any) {
    const table = document.getElementById("sortable-table") as HTMLTableElement;
    const rows = Array.from(table.rows).slice(1); // Exclude the header row

    // Toggle sorting direction if it's the same column
    if (this.sortState.columnIndex === columnIndex) {
      this.sortState.ascending = !this.sortState.ascending;
    } else {
      this.sortState.columnIndex = columnIndex;
      this.sortState.ascending = true;
    }

    rows.sort((a, b) => {
      const aValue = a.cells[columnIndex]?.textContent?.trim() || '';
      const bValue = b.cells[columnIndex]?.textContent?.trim() || '';

      const compareResult = aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });

      return this.sortState.ascending ? compareResult : -compareResult;
    });

    // Clear the existing table rows
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";

    // Append the sorted rows to the table
    rows.forEach(row => tbody.appendChild(row));

    // Update sorting indicators
    this.updateSortingIndicators();
  }

  updateSortingIndicators() {
    const table = document.getElementById("sortable-table") as HTMLTableElement;
    const headers = table.getElementsByTagName('th');

    for (let i = 0; i < headers.length; i++) {
      const sortIcon = headers[i].getElementsByClassName('sort-icon')[0] as HTMLElement;
      sortIcon.innerHTML = ""; // Clear previous icons

      if (i === this.sortState.columnIndex) {
        if (this.sortState.ascending) {
          sortIcon.className = 'sort-icon asc';
        } else {
          sortIcon.className = 'sort-icon desc';
        }
      }
    }
  }














}
