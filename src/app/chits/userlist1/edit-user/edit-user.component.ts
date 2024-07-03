/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Validators } from '@angular/forms';
import { Branch, BusinessVerticle, User, UserList, role } from 'src/app/chits-class';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { ThemeService } from 'src/app/layouts/rightsidebar/theme.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MastersService } from '../../Services/masters.service';
@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {
  public display = "none";
  public searchText: string = "";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  public userList1: any=User;
  public userList: UserList[] = [];
  // public userData: any;
  public userId: any;
  public updateUserForm: any;
  public getUserData: any;

  private sortKey: string = '';
  private reverse: boolean = false;
  private Agent = 'Agent'
  private id: any;
  private hideIdField: boolean = true;
  public selectedItem: any;
  public submitted: boolean = false;
  public chitsRole: role[] = [];
  public chitsRoles: role[] = [];
  public realEstateRole: role[] = [];
  public realEstateRoles: any;
  //  private Checkbox: any;

  private rolename: string='';
  private data: any = [];

  public rolesform!: FormGroup;
  public filteredRolesData: any;
  public create: any;
  // public roles: any;
  public rolenames: string='';
  public RolesData: any;
  public getPerm: any;

  public employeeCheckboxSelected: boolean = false;
  public agentCheckboxSelected: boolean = false;
  public filteredChits: any;
  public selectedroles: any;
  // public chitsroles: any;
  public selectedRole: any;
  public baranchList: Branch[] = []; 
  public masterData:  BusinessVerticle[] = [];
  public selectedVertical: string = 'Chits';
  public allrolesmaster: role[] = [];
  constructor(private userService: UserService, private http: HttpClient, private masterService: MastersService,
    private fb: FormBuilder, public toastService: ToastrService, private activated: ActivatedRoute, private router: Router) {
    // this.id = data.id;

    // console.log("Edit user", this.id);
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id', this.id);

    });
    this.userService.getByUserId(this.id).subscribe((data) => {
      this.userId = data
      this.selectedroles = this.userId.roles;
      console.log('userdatabyid', this.userId);
      this.updateUserForm.controls['branchId'].setValue(this.userId.branchId)
      console.log('this.selectedroles', this.selectedroles);
      console.log("this.userId ", this.userId)

    })
    this.userService.getChitsRoles().subscribe((data) => {
      console.log("user Roles", data.data);
      this.chitsRole = data.data
      this.filteredChits = this.chitsRole
    });
    this.userService.getRealEstate().subscribe((data) => {
      console.log("user Roles", data.data);
      this.realEstateRole = data.data
    })


    this.updateUserForm = this.fb.group({
      code: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      // branchId: ['', Validators.compose([Validators.required])],
      roles: [this.selectedroles],
      agentCode: [''],

      userName: ['', Validators.compose([Validators.required])],
      branchId: ['', Validators.compose([Validators.required])],
      panNo: ['', Validators.compose([Validators.required])],
      'Business Vertical': new FormControl(this.selectedVertical),


    });
    this.updateUserForm.get('roles').setValue(this.selectedroles);

  }

  sort(key: string) {
    this.sortKey = key;
    this.reverse = !this.reverse;
    this.userList1.sort((a: any, b: any) => {
      const x = a[key];
      const y = b[key];
      return this.reverse ? x.localeCompare(y) : y.localeCompare(x);
    });
  }
  // isSelectedRole(role: any): boolean {
  //   return role.roleName === this.selectedroles[0]; // Assuming selectedroles contains only one role
  // }
  isSelectedRole(role: any): boolean {
    return this.selectedroles.includes(role.roleName);
  }


  updateSelectedRole(role: any): void {
    this.selectedRole = role.roleName;
    // this.selectedRole.push(this.updateUserForm.roles[role.roleName]);
    this.updateUserForm.get('roles').setValue([this.selectedRole]);
  }
  // addOrSubmitRole(role: any): void {
  //   if (!this.selectedroles.includes(role)) {
  //     this.selectedroles.push(role);
  //     this.updateUserForm.get('roles').setValue(this.selectedroles);

  //   }
  // }
  // toggleRole(role: any): void {
  //   const index = this.selectedroles.indexOf(role);
  //   if (index === -1) {
  //     this.selectedroles.push(role.roleName); // Add role if not present;
  //     console.log('added role',this.updateUserForm.value)
  //   } else {
  //     this.selectedroles.splice(index, 1); // Remove role if present
  //   }

  // }
  toggleRole(role: any): void {
    const index = this.selectedroles.indexOf(role.roleName);
    if (index === -1) {
      this.selectedroles.push(role.roleName); // Add role if not present
      console.log('added role', this.updateUserForm.value);
    } else {
      this.selectedroles.splice(index, 1); // Remove role if present
      console.log('removed role', this.updateUserForm.value);
    }
  }
  ngOnInit(): void {

    this.userService.getUserList().subscribe((data: any) => {
      console.log("Edit user list", data);
      this.userList1 = data;

      console.log(this.userList1.data);
      this.userList = this.userList1.data
      this.userList1.data.forEach((user: any) => {
        console.log("User id:", user.id);


      });
    })
    this.masterService.getBranchListData().subscribe((data: any) => {
      this.baranchList = data
    })
    this.userService.getMaster1().subscribe((data) => {
      console.log("masters", data);
      this.masterData = data
    })
    this.userService.getRoleAll().subscribe((data) => {
      console.log("all roles", data);
      this.allrolesmaster = data.data

    })
  }
  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedVertical = target.value;
  }
  toggleIdField(): void {
    this.hideIdField = !this.hideIdField;
  }
  // updatecreate(id:any,event:any) {

  //   this.create = event.target.checked;
  // }
  //   updatecreate(id: any, event: any) {
  //     const isChecked = event.target.checked; 

  //     const rolesFormArray = this.userData.get('roles') as FormArray;

  //     if (isChecked) {
  //       rolesFormArray.push(this.fb.control(id));
  //     } else {
  //       const index = rolesFormArray.controls.findIndex(x => x.value === id);
  //       rolesFormArray.removeAt(index);
  //     }

  //     this.create = isChecked;
  //     this.rolename = id;
  //     this.data.push(this.rolename);
  //     this.data.forEach((item: any) => {
  //         console.log("rolename:", item);
  //     });
  //  }
  userClick(id: number) {
    console.log("id", id)
    this.display1 = "block";
    this.selectedItem = this.userList.find(item => item.id == id);
    console.log("this.selectedItem", this.selectedItem.id);
    this.id = this.selectedItem.id

  }
  updatecreate(id: any, event: any) {

    this.create = event.target.checked;
    this.rolename = id;
    console.log("this.rolename", this.rolename);
    this.data.push(this.rolename);

    // Log each item separately
    this.data.forEach((item: any) => {
      console.log("rolename:", item);
    });
  }

  onSubmit() {

    this.submitted = true;
    console.log("data")
    this.updateUserForm.get('roles').setValue(this.selectedroles);
    this.userService.UpdateUser(this.id, this.updateUserForm.value).subscribe((res: any) => {
      console.log('submitted form', this.updateUserForm.value);

      this.showSuccess()
      this.router.navigate(['chits/userlist1']);

    },
      errorMsg => {

        this.showError()
      }
    );

    // }

  }
  showSuccess() {
    this.toastService.success('Updated User Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  get f() { return this.updateUserForm.controls; }
  onCloseHandled() {

    this.router.navigate(['chits/userlist1'])
  }
  user() {
    this.router.navigate(['chits/userlist1'])
  }
  calculateColumnSize(roleCount: number): number {
    // Determine the number of columns based on the number of roles
    // For example, if there are 3 roles, divide 12 by 3 to get 4 columns
    return Math.floor(12 / roleCount);
  }
}
