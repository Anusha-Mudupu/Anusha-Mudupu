/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList } from 'src/app/chits-class';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MastersService } from '../../Services/masters.service';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent implements OnInit{

  display = "none";
  searchText: any = "";
  display1 = "none";
  display2 = "none";
  display3 = "none";
  display4 = "none";
  Userlist1: any;
  userlist: UserList[] = [];
  userData: any;
  userId: any;
  updateUserForm: any;
  getUserData: any;

  sortKey: string = '';
  reverse: boolean = false;
  Agent = 'Agent'
  id: any;
  hideIdField: boolean = true;
  selectedItem: any;
  submitted: boolean = false;
  ChitsRole: any;
  ChitsRoles: any;
  realEstateRole: any;
  realEstateRoles: any;
  Checkbox: any;

  rolename: any;
  data: any = [];

  rolesform: any;
  filteredRolesData: any;
  create: any;
  roles: any;
  rolenames: any;
  RolesData: any;
  getPerm: any;

  employeeCheckboxSelected: boolean = false;
  agentCheckboxSelected: boolean = false;
  filteredChits: any;
  selectedroles: any;
  chitsroles: any;
  selectedRole: any;
  baranchList: any;
  masterData: any;
  selectedVertical: string = 'Chits'
  constructor(private userService: UserService, private http: HttpClient,private masterService:MastersService,
    private fb: FormBuilder, public toastService: ToastrService, private activated: ActivatedRoute, private router: Router){


      this.updateUserForm = this.fb.group({
        code: ['', Validators.compose([Validators.required])],
        firstName: ['', Validators.compose([Validators.required])],
        lastName: ['', Validators.compose([Validators.required])],
        phoneNumber: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],
        id: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        // branchId: ['', Validators.compose([Validators.required])],
        roles: [this.roles],
        agentCode:[''],
  
        userName: ['', Validators.compose([Validators.required])],
        branchId: ['', Validators.compose([Validators.required])],
        panNo:['', Validators.compose([Validators.required])],
        branchName:['', Validators.compose([Validators.required])],
        'Business Vertical': new FormControl(this.selectedVertical),
  
  
      });
      this.updateUserForm.get('roles').setValue(this.selectedroles);
      this.activated.paramMap.subscribe(params => {
        this.id = params.get('id');
        console.log('id', this.id);
})  
this.userService.getByUserId(this.id).subscribe((data) => {
  this.userId = data
  this.selectedroles = this.userId.roles;
  console.log('view userdatabyid', this.userId);
  this.roles=this.userId.roles;
  console.log('view roles', this.roles);

  this.updateUserForm.controls['branchId'].setValue(this.userId.branchId)
  console.log('this.selectedroles', this.selectedroles);
  console.log("this.userId ",this.userId)
 
})
this.userService.getChitsRoles().subscribe((data) => {
  console.log("user Roles", data.data);
  this.ChitsRole = data.data
  this.filteredChits = this.ChitsRole
});
this.userService.getRealEstate().subscribe((data) => {
  console.log("user Roles", data.data);
  this.realEstateRole = data.data
})
  }
  ngOnInit(): void {
  
    this.masterService.getBranchListData().subscribe((data:any)=>{
      this.baranchList=data
     })
     this.userService.getMaster1().subscribe((data)=>{
      console.log("masters",data);
      this.masterData = data
    })
  }
  onCloseHandled() {

    this.router.navigate(['chits/userlist1'])
  }
  isSelectedRole(role: any): boolean {
    return this.roles.includes(role);
  }
  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedVertical = target.value;
  }
  user(){
    this.router.navigate(['chits/userlist1'])
  }
  calculateColumnSize(roleCount: number): number {
    // Determine the number of columns based on the number of roles
    // For example, if there are 3 roles, divide 12 by 3 to get 4 columns
    return Math.floor(12 / roleCount);
}
}
