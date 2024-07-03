/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { User, UserList } from 'src/app/chits-class';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { ThemeService } from 'src/app/layouts/rightsidebar/theme.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MastersService } from 'src/app/chits/Services/masters.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  public display = "none";
  public searchText: string = "";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  public Userlist1: any;
  public userlist: UserList[] = [];
  public userData: any;
  public sortKey: string = '';
  public reverse: boolean = false;
  public Agent = 'Agent'
  public id: any;
  public hideIdField: boolean = true;
  public selectedItem: any;
  public submitted: boolean = false;
  public formBuilder: any;
  public designation: any;
  employeeList: any;
  constructor(private userService: UserService,
    public toastService: ToastrService, private masterService: MastersService,
    private router: Router, private http: HttpClient, private FormBuilder: FormBuilder) {
    this.userData = this.FormBuilder.group({
      code: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      // id: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      branchId: ['', Validators.compose([Validators.required])],
      roles: this.FormBuilder.array([('Employee')]),
      userName: ['', Validators.compose([Validators.required])],
      designationId: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
      doj: ['', Validators.compose([Validators.required])],
      reportingTo: ['', Validators.compose([Validators.required])],
      companyName: ['', Validators.compose([Validators.required])]

    })

  }
  createRole(role: string): FormGroup {
    return this.FormBuilder.group({

      // roleName:[role,Validators.compose([Validators.required])]
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
    this.userService.getUserList().subscribe((data: any) => {
      console.log(data);
      this.Userlist1 = data;

      console.log(this.Userlist1.data);
      this.userlist = this.Userlist1.data
      this.employeeList = this.Userlist1.data.filter((user: any) => {
        return user.roles.includes('Employee');
  
      });
      this.Userlist1.data.forEach((user: any) => {
        console.log("User id:", user.id);


      });
    })
   
    this.masterService.getDesignationListData().subscribe((data: any) => {
      this.designation = data;
      console.log('designation', this.designation);
    });
  }
  get rolesArray() {
    return this.userData.get('roles') as FormArray;
  }

  addRole() {
    this.rolesArray.push(this.formBuilder.control(''));
  }

  removeRole(index: number) {
    this.rolesArray.removeAt(index);
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


  onSubmit() {

    this.submitted = true;
    console.log("data")
    //  if (this.userData.valid) {
    this.userService.createUser(this.userData.value).subscribe((data: any) => {
      console.log("user data", data);
      // this.userData.reset();
      //  alert('User added Successflly');
      this.showSuccess()
      this.router.navigate(['chits/Employee'])
      // this.onCloseHandled()

    }, error => {
      // alert('Something Went Wrong');
      this.showError()
    })

    //  }

    //  } 




  }
  showSuccess() {
    this.toastService.success(' Employee Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  get f() { return this.userData.controls; }
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
  closeDialog(): void {
    this.router.navigate(['chits/Employee'])
    // You can pass any result to indicate the reason for closure

  }
}
