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
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent {
  public display = "none";
  public searchText: string = "";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  public Userlist1: any;
  public userlist: UserList[] = [];

  public userId: any;
  public updateUserForm: any;
  public getUserData: any;

  public sortKey: string = '';
  public reverse: boolean = false;
  public Agent = 'Agent'
  public id: any;
  public hideIdField: boolean = true;
  public selectedItem: any;
  public submitted: boolean = false;
  employeeList: any;
  constructor(private userService: UserService, private http: HttpClient,
    private FormBuilder: FormBuilder, public toastService: ToastrService, private activated: ActivatedRoute, private router: Router) {
    // this.id = data.id;

    // console.log("Edit user", this.id);
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id', this.id);

    });
    this.userService.getByUserId(this.id).subscribe((data) => {
      this.userId = data.data
      console.log("Edit userid", this.userId);
      this.updateUserForm.controls['reportingTo'].setValue(this.userId.reportingTo)
    })


    this.updateUserForm = this.FormBuilder.group({
      code: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      // password: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      branchId: ['', Validators.compose([Validators.required])],
      roles: this.FormBuilder.array([('Employee')]),
      userName: ['', Validators.compose([Validators.required])],
      branchName: ['', Validators.compose([Validators.required])],
      reportingTo: ['', Validators.compose([Validators.required])],

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
      console.log("Edit user list", data);
      this.Userlist1 = data;

      console.log(this.Userlist1.data);
      this.userlist = this.Userlist1.data;
      this.employeeList = this.Userlist1.data.filter((user: any) => {
        return user.roles.includes('Employee');
  
      });
     
      
      this.Userlist1.data.forEach((user: any) => {
        console.log("User id:", user.id);


      });
    })
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
  getByuserId() {
    this.userService.getByUserId(this.id).subscribe((data) => {
      this.userId = data;
     
    })
  }
  closeDialog(): void {
    // You can pass any result to indicate the reason for closure
    // this.dialogRef.close();
  }
  onSubmit() {
    this.submitted = true;

    console.log("data")
    // if (this.updateUserForm.valid) {
    this.userService.UpdateUser(this.id, this.updateUserForm.value).subscribe((res: any) => {
      console.log('submitted form', this.updateUserForm.value);
      // alert('User Updated Successflly');
      this.showSuccess()
      this.router.navigate(['chits/Employee'])
      // this.dialogRef.close();
    },
      errorMsg => {
        // window.alert('Something Went Wrong');
        this.showError()
      }
    );

    // }

  }
  showSuccess() {
    this.toastService.success('Updated Employee Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  get f() { return this.updateUserForm.controls; }
  onCloseHandled() {

    this.router.navigate(['chits/Employee'])
  }
}
