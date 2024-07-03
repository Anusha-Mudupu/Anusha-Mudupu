/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { Branch, BusinessVerticle, User, UserList, role } from 'src/app/chits-class';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MastersService } from '../../Services/masters.service';
@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  public display = "none";
  public searchText: string = "";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  public userList1: any = UserList;
  public userList: UserList[] = [];
  public userData: any;
  public sortKey: string = '';
  private reverse: boolean = false;
  private id: any;
  public hideIdField: boolean = true;
  public selectedItem: any;
  public submitted: boolean = false;
  public formBuilder: any;
  public userPermission: any = User;
  private userId: any;
  public users: any = User;
  public id1 = 2;
  public roleId: any;
  public usersdata: any;
  public chitsRole: role[] = [];
  public chitsRoles: role[] = [];
  public realEstateRole: role[] = [];
  public realEstateRoles: any;
  private rolename: string = '';
  public data: any = [];
  public create: any;
  public roles: any;
  public rolenames: any;
  public RolesData: any;
  private getPerm: any;
  public selectedVertical: string = 'Chits'
  public employeeCheckboxSelected: boolean = false;
  public agentCheckboxSelected: boolean = false;
  public filteredChits: any;
  public baranchList: Branch[] = [];
  public masterData: BusinessVerticle[] = [];
  public allrolesmaster: role[] = [];
  constructor(private activated: ActivatedRoute, private masterService: MastersService,
    private router: Router, private userService: UserService,
    public toastService: ToastrService, private dialog: MatDialog, private http: HttpClient, private fb: FormBuilder) {
    this.userData = this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      branchId: 1,
      roles: this.fb.array(['']),
      panNo: ['', Validators.compose([Validators.required])],
      agentCode: [''],
      code: [''],
      designationId: 0,
      dob: "2024-06-21T06:54:56.191Z",
      doj: "2024-06-21T06:54:56.191Z",
      companyName: "",
      reportingTo: "",
      isActive: true
      // 'Business Vertical': new FormControl(this.selectedVertical),
    })
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id', this.id);

    });
    this.userService.getByUserId(this.id).subscribe((data) => {
      this.userId = data.data;
      this.roles = this.userId.accountRoles

      console.log("this.roles", this.roles);
    })
    this.masterService.getBranchListData().subscribe((data: any) => {
      this.baranchList = data.data;
      console.log("this.baranchList", this.baranchList)
    })


  }
  createRole(role: string): FormGroup {
    return this.fb.group({
    });
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


  ngOnInit(): void {
    this.userService.getUserList().subscribe((data: any) => {
      console.log(data);
      this.userList1 = data;

      console.log(this.userList1.data);
      this.userList = this.userList1.data
      this.userList1.data.forEach((user: any) => {
        console.log("User id:", user.id);


      });
    })
    this.getPermission();
    this.userService.getUserList().subscribe((data: any) => {
      console.log("Edit user list", data);
      this.users = data;

      console.log(this.users.data);
      this.userPermission = this.users.data
      this.users.data.forEach((user: any) => {
        console.log("User id:", user.id);
        this.roleId = user.id;
        console.log("this.roleId", this.roleId);


      });
    })
    this.userService.getChitsRoles().subscribe((data) => {
      console.log("user Roles", data.data);
      this.chitsRole = data.data
      this.filteredChits = this.chitsRole
    })
    this.userService.getRealEstate().subscribe((data) => {
      console.log("user Roles", data.data);
      this.realEstateRole = data.data
    })
    this.userService.getRoleAll().subscribe((data) => {
      console.log("all roles", data);
      this.allrolesmaster = data.data

    })
    this.userService.getByPermission(this.id).subscribe((data) => {
      this.getPerm = data.data;
      this.getPerm.array.forEach((add: any) => {
        add.status = true

      });
      console.log("get Permission", this.getPerm)
    })
    this.userService.getMaster1().subscribe((data) => {
      console.log("masters", data);
      this.masterData = data
    })
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
    this.selectedItem = this.userList.find(item => item.id == id);
    console.log("this.selectedItem", this.selectedItem.id);
    this.id = this.selectedItem.id

  }


  onSubmit() {
    console.log("Create user Data", this.userData.value)
    this.submitted = true;
    console.log("data")
    this.userService.createUser(this.userData.value).subscribe((data: any) => {
      console.log("user data", data);
      this.router.navigate(['/chits/userlist1'])
      this.showSuccess()
    }, error => {
      this.showError()
    })
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
  cancel() {
    this.router.navigate(['chits/userlist1'])
  }

  updatecreate(id: any, event: any) {
    const isChecked = event.target.checked;

    const rolesFormArray = this.userData.get('roles') as FormArray;

    if (isChecked) {
      rolesFormArray.push(this.fb.control(id));
    } else {
      const index = rolesFormArray.controls.findIndex(x => x.value === id);
      rolesFormArray.removeAt(index);
    }

    if (id === 'Employee') {
      this.employeeCheckboxSelected = isChecked;
    } else if (id === 'Agent') {
      this.agentCheckboxSelected = isChecked;
    }

    // Enable/disable input boxes based on checkbox selection
    if (this.employeeCheckboxSelected && this.agentCheckboxSelected) {
      // Enable both input boxes
      this.enableEmployeeAndAgentInputs();
    } else {
      // Disable both input boxes
      this.disableEmployeeAndAgentInputs();
    }

    this.create = isChecked;
    this.rolename = id;
    this.data.push(this.rolename);

    // Log each item separately
    this.data.forEach((item: any) => {
      console.log("rolename:", item);
    });
  }
  addrole() {

    const data = this.data.map((roleName: string) => ({ roleName }));
    this.userService.postUserRole(this.roleId, data).subscribe((data) => {
      this.router.navigate(['/chits/userlist1'])

    }, error => {

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
  enableEmployeeAndAgentInputs() {
    // Enable Employee and Agent input boxes
    const employeeInput = document.getElementById('employeeInput') as HTMLInputElement;
    const agentInput = document.getElementById('agentInput') as HTMLInputElement;

    if (employeeInput) {
      employeeInput.disabled = false;
    }
    if (agentInput) {
      agentInput.disabled = false;
    }
  }

  disableEmployeeAndAgentInputs() {
    // Disable Employee and Agent input boxes
    const employeeInput = document.getElementById('employeeInput') as HTMLInputElement;
    const agentInput = document.getElementById('agentInput') as HTMLInputElement;

    if (employeeInput) {
      employeeInput.disabled = true;
    }
    if (agentInput) {
      agentInput.disabled = true;
    }
  }
  user() {
    this.router.navigate(['/chits/userlist1'])
  }
  calculateColumnSize(roleCount: number): number {
    // Determine the number of columns based on the number of roles
    // For example, if there are 3 roles, divide 12 by 3 to get 4 columns
    return Math.floor(12 / roleCount);
  }
}
