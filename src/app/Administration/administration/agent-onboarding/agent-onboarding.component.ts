/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenwiseService } from 'src/app/chits/screenwise.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Branch } from 'src/app/chits-class';
import { MastersService } from 'src/app/chits/Services/masters.service';

@Component({
  selector: 'app-agent-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './agent-onboarding.component.html',
  styleUrl: './agent-onboarding.component.scss'
})
export class AgentOnboardingComponent implements OnInit {
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
  public baranchList: Branch[] = [];
  constructor(private masterService: MastersService,private screenWise: ScreenwiseService, private FormBuilder: FormBuilder, private userService: UserService,
     private router: Router, public toastService: ToastrService,){
      this.agentform = this.FormBuilder.group({
         firstName: ['', Validators.compose([Validators.required])],
        lastName: ['', Validators.compose([Validators.required])],
        phoneNumber: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])],
        // id: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        branchId: ['', Validators.compose([Validators.required])],
        roles: this.FormBuilder.array([('Agent')]),
        userName: ['', Validators.compose([Validators.required])],
        panNo: ['', Validators.compose([Validators.required])],
        agentCode: [''],
        code: [''],
      })
  }
  ngOnInit(): void {
    this.masterService.getBranchListData().subscribe((data: any) => {
      this.baranchList = data;
      console.log("this.baranchList", this.baranchList)
    })
  }
  onSubmit() {

    this.submitted = true;
    console.log("data")
    //  if (this.userData.valid) {
    this.userService.createUser(this.agentform.value).subscribe((data: any) => {
      console.log("user data", data);
      // this.userData.reset();
      //  alert('User added Successflly');
      this.showSuccess();
    

    }, error => {
      // alert('Something Went Wrong');
      this.showError();
    })
 }
 showSuccess() {
  this.toastService.success(' Agent Created Successfully');
}
showError() {
  this.toastService.error('Something is Wrong')
}
}
