/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from 'ngx-editor';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormArray } from '@angular/forms';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-userpermission',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './userpermission.component.html',
  styleUrl: './userpermission.component.scss'
})
export class UserpermissionComponent implements OnInit {

  userPermission: any;
  userId: any;
  users: any;
  id: any;
  id1 = 2;
  roleId: any;
  usersdata: any;
  ChitsRole: any;
  ChitsRoles: any;
  realEstateRole: any;
  realEstateRoles: any;
  Checkbox: any;
  display4 = 'none';
  rolename: any;
  data: any = [];
  updateUserForm:any;
  rolesform:any;
  filteredRolesData: any;
  create:any;
  roles: any;
  rolenames: any;
  RolesData: any;
  getPerm:any;
  selectedVertical: string = 'Chits';


  // num:any='78e64c2a-dc5b-4909-99d4-61831742da8d'
  // roleName:any;
  constructor(private activated: ActivatedRoute, private toastService: ToastrService,
    private router: Router, private fb: FormBuilder, private userService: UserService,) {
      this.activated.paramMap.subscribe(params => {
        this.id = params.get('id');
        console.log('id', this.id);
   
      });
      this.userService.getByUserId(this.id).subscribe((data) => {
        this.userId = data.data;
        this.roles=this.userId.accountRoles
       
        console.log("this.roles", this.roles);
      })
      // const data = this.data.map((roleName: string) => ({ roleName }));

      // //     console.log("data", data);
      //   this.userService.postUserRole(this.id,data).subscribe((data) => {
      //     this.userId = data
      //     console.log("postUserRole", this.userId);
      //   })
    this.rolesform = this.fb.group({
     
      roles:'',

    })
    this.updateUserForm = this.fb.group({
      
      id: ['',([Validators.required])],
     
        
    });
 
  }
  ngOnInit(): void {
    this.getPermission();
    this.userService.getUserList().subscribe((data: any) => {
      console.log("Edit user list", data);
      this.users = data;

      console.log(this.users.data);
      this.userPermission = this.users.data
      this.users.data.forEach((user: any) => {
        console.log("User id:", user.id);
        this.roleId=user.id;
        console.log("this.roleId",this.roleId);


      });
    })
    this.userService.getChitsRoles().subscribe((data) => {
      console.log("user Roles", data.data);
      this.ChitsRole = data.data
    })
    this.userService.getRealEstate().subscribe((data) => {
      console.log("user Roles", data.data);
      this.realEstateRole = data.data
    })
    this.userService.getByPermission(this.id).subscribe((data)=>{
      this.getPerm=data.data;
      this.getPerm.array.forEach((add:any) => {
        add.status=true
        
      });
      console.log("get Permission", this.getPerm)
    })
  }

 


  cancel() {
    this.router.navigate(['chits/userlist1'])
  }
  // addrole(){
  //   this.userService.postUserRole(this.id).subscribe((data)=>{
  //     console.log("created User Role",data)
  //   })
  // }
 
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

addrole() {
    debugger
  const data = this.data.map((roleName: string) => ({ roleName }));

  //     console.log("data", data);
    this.userService.postUserRole(this.roleId,data).subscribe((data) => {
      console.log("user permission",data)
      this.router.navigate(['/chits/userlist1'])
      this.showSuccess();
      
    }, error => {

      this.showError();
    });
  }

  


  showSuccess() {
    this.toastService.success(' Created Associated Role Successfully');
  }
  showError() {

    this.toastService.error('Something is Wrong')
  }

  getPermission() {
    this.userService.getMaster1().subscribe((data) => {
      this.usersdata = data
      console.log("get permission", data)
      this.roleId = data.id

    })
  }
  openPassword() {
    this.display4 = "block";
  }
  closePassword() {
    this.display4 = "none"
  }
  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedVertical = target.value;
}
}


