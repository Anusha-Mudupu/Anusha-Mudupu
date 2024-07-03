/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { Branch, User, UserList } from 'src/app/chits-class';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, FormArray } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { ThemeService } from 'src/app/layouts/rightsidebar/theme.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { LeadService } from 'src/app/lead.service';
@Component({
  selector: 'app-upadateagent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './upadateagent.component.html',
  styleUrl: './upadateagent.component.scss'
})
export class UpadateagentComponent {
  public display = "none";
  public searchText: any = "";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  public Userlist1: any;
  public userlist: UserList[] = [];
  public userData: any;
  public userId: any;
  public updateUserForm: any;


  public sortKey: string = '';
  public reverse: boolean = false;
  public Agent = 'Agent'
  public id: any;
  public hideIdField: boolean = true;
  public selectedItem: any;
  public submitted: boolean = false;
  public agentList1: any;
  public agentList: any;
  public baranchList: Branch[] = [];
  data: any;
  verticalData1: any;
  lookupConstants: any;
  constructor(private leadService: LeadService,private masterService: MastersService, private userService: UserService, private http: HttpClient,
    private FormBuilder: FormBuilder, public toastService: ToastrService, private activated: ActivatedRoute, private router: Router) {
    // this.id = data.id;

    // console.log("Edit user", this.id);
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id', this.id);

    });

    this.userService.getByAgentId(this.id).subscribe((data) => {
      this.userId = data.data
      console.log("Edit userid", this.userId);
    })


    this.updateUserForm = this.FormBuilder.group({
     
      // roles: this.FormBuilder.array([('Agent')]),
     
      name: ['', Validators.compose([Validators.required])],

      phno: ['', Validators.compose([Validators.required])],
      pwd: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required])],
      userId: ['', Validators.compose([Validators.required])],
      subsourceid: [''],
      
      isDeleted: true,
      isActive: true,
      agentCode:"",
      businessCode: "chits"
    
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
    this.leadService.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

      // Filter data based on lookupCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.lookupCode === "BusinessVertical");

     

      // Access lookupConstants array from verticalData
      if (this.verticalData1.length > 0) {
        this.lookupConstants = this.verticalData1[0].lookupConstants;
        console.log("lookupConstants", this.lookupConstants);
        // Now you can use lookupConstants array as needed
      }
    })

    this.userService.getUserList().subscribe((data: any) => {
      console.log(data);
      this.agentList1 = data;

      console.log(this.agentList1.data);
      this.agentList = this.agentList1.data.filter((user: any) => {
        return user.roles.includes('Agent'); // Filter only users with 'Agent' role
      });

      console.log("this.agentList", this.agentList);
    });

    this.masterService.getBranchListData().subscribe((data: any) => {
      this.baranchList = data
    })
  }

  toggleIdField(): void {
    this.hideIdField = !this.hideIdField;
  }

  userClick(id: number) {
    console.log("id", id)
    this.display1 = "block";
    this.selectedItem = this.agentList.find((item: any) => item.id == id);
    console.log(" upadate Agent this.selectedItem", this.selectedItem.id);
    this.id = this.selectedItem.id

  }
  getByuserId() {
    this.userService.getByUserId(this.id).subscribe((data) => {
      this.userId = data
    })
  }

  closeDialog(): void {
    // You can pass any result to indicate the reason for closure
    // this.dialogRef.close();
    this.router.navigate(['chits/AgentList'])
  }
  onSubmit() {
    this.submitted = true;
    console.log("data");
    
    const formValue = this.updateUserForm.value;
    
    // Ensure subsourceid is converted to a number if it exists
    if (formValue.subsourceid) {
        formValue.subsourceid = Number(formValue.subsourceid);
        if (isNaN(formValue.subsourceid)) {
            console.error('subsourceid is not a valid number');
            return;
        }
    } else {
        formValue.subsourceid = null;
    }

    // If the form is valid, proceed with submission
    if (this.updateUserForm.valid) {
        this.userService.updateAgent(this.id, formValue).subscribe(
            (res: any) => {
                console.log('submitted form', formValue);
                this.showSuccess();
                this.router.navigate(['chits/AgentList']);
            },
            errorMsg => {
                console.error('Error occurred:', errorMsg);
                this.showError();
            }
        );
    } else {
        console.error('Form is not valid');
    }
}

  showSuccess() {
    this.toastService.success('Updated Agent Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
  get f() { return this.updateUserForm.controls; }
}
