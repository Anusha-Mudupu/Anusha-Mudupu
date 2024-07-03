/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';
import { getNavigation } from 'src/app/chits-class';

import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { LeadService } from 'src/app/lead.service';
import { LeadscreenService } from 'src/app/pages/real-estate/leadscreen/leadscreen.service';


@Component({
  selector: 'app-addrole',
  standalone: true,
  imports: [CommonModule, ModalModule, NgSelectModule, TabsModule, FormsModule,
    ReactiveFormsModule, MatDialogModule],
  templateUrl: './addrole.component.html',
  styleUrl: './addrole.component.scss'
})
export class AddroleComponent {

  public roleName: string = '';
  public description: string = ''
  public checked: any;
  public verticalid = "0";
  public getNavigation: getNavigation[] = [];

  public update: any;
  public read: any;
  public write: any;
  public create: any;
  public delete: any;
  public navigationId!: number;
  public navid!: number;
  public getNavigation1: getNavigation[] = [];
  public verticalData: any;
  private admin: any;
  private vertId!: number;
  public verticalData1: any;
  picklistData: any;
  BusinessverticalData: any;
  enumConstants: any;
  data: any;
  constructor(private _router: Router, private appRoute: ActivatedRoute, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar,

    private leadScreenService: LeadscreenService, private leadservice: LeadService,
    private userService: UsersService, private msterService: MastersService, private toastService: ToastrService,
    private dialog: MatDialog,) { }

  ngOnInit(): void {

    this.leadservice.getPicklist().subscribe((data: any) => {
      console.log("picklist", data);
      this.data = data;

      // Filter data based on enumCode being "BusinessVertical"
      this.verticalData1 = data.filter((item: any) => item.enumCode === "BusinessVertical");

      console.log("this.verticalData", this.verticalData);

      // Access enumConstants array from verticalData
      if (this.verticalData1.length > 0) {
        this.enumConstants = this.verticalData1[0].enumConstants;
        console.log("enumConstants", this.enumConstants);
        // Now you can use enumConstants array as needed
      }
    })
    //Getting Id from Param
    this.verticalid = this.appRoute.snapshot.params['verticalid'];

    this.getNavigations()

  }


  //Navigation Dropdown
  getNavigations() {
    this.leadservice.getVerticalDropdown().subscribe((data: any) => {
      this.verticalData = [{ id: 0, name: 'All' }, ...data];
      console.log("verticalData", this.verticalData)
      this.navigation()

    })
  }

  //Get Features
  navigation() {
    this.vertId = parseInt(this.verticalid),
      this.leadservice.getNavigations(this.vertId).subscribe((data: any) => {
        debugger
        this.getNavigation = data;
        console.log("this.getNavigation", this.getNavigation)
        this.getNavigation = this.getNavigation.filter((permission: any) => permission.name !== null);

        this.getNavigation.forEach((permission: any) => {
          permission.navigationId = permission.id,
            console.log("permission.navigationId", permission.navigationId)
          permission.navigation = permission.name,
            permission.create = this.create;
          permission.read = this.read;
          permission.id =
            permission.write = this.write;
          permission.admin = this.admin;
          permission.delete = this.delete;
        });
      })
  }

  createToggleColumn(create: any, event: any) {
    debugger
    this.getNavigation.forEach((item: any) => {
      item[create] = event.target.checked;
    });
  }
  deleteToggleColumn(deletes: any, event: any) {
    debugger
    this.getNavigation.forEach((item: any) => {
      item[deletes] = event.target.checked;
    });
  }
  updateToggleColumn(write: any, event: any) {
    debugger
    this.getNavigation.forEach((item: any) => {
      item[write] = event.target.checked;
    });
  }
  readToggleColumn(read: any, event: any) {
    debugger
    this.getNavigation.forEach((item: any) => {
      item[read] = event.target.checked;
    });
  }


  toggleRow(item: any, event: any) {
    // Set all properties to the checked status of the toggle in the first cell
    item.admin = event.target.checked;
    item.create = event.target.checked;
    item.read = event.target.checked;
    item.write = event.target.checked;
    item.delete = event.target.checked;
  }

  updateToggleRow(item: any) {
    // Check if all individual permissions are checked
    const allChecked = item.read && item.write && item.create && item.delete;
    // debugger
    // Set the toggle status based on the individual permissions

    if (allChecked == true) {
      item.admin = allChecked;

    }
    else {
      item.admin = false
    }

  }




  isAllChecked(item: any): boolean {
    return item.create && item.read && item.write && item.delete;
  }
  updateRead(id: any, event: any) {
    this.navid = id
    debugger
    this.read = event.target.checked;
    this.updateToggleRow(id);

  }
  updateWrite(id: any, event: any) {
    debugger
    this.navid = id

    this.write = event.target.checked;
    this.updateToggleRow(id);

  }
  updateCreate(id: any, event: any) {
    debugger
    this.navid = id

    this.create = event.target.checked;
    this.updateToggleRow(id);

  }
  updateDelete(id: any, event: any) {
    debugger
    this.navid = id

    this.delete = event.target.checked;
    this.updateToggleRow(id);

  }

  check() {
    console.log("Answer", this.getNavigation)
  }


  //Saving Role Permission
  addRole() {
    console.log("roel", this.roleName)
    console.log("roel", this.verticalid)

    var data = {
      roleName: this.roleName,
      description: this.description,
      verticalid: parseInt(this.verticalid)
    }
    debugger

    this.leadservice.saverole(data).subscribe((result: any) => {
      debugger

      var data = [{
        roleName: this.roleName,
        description: this.description,
        verticalid: parseInt(this.verticalid),
        rolePermissions: this.getNavigation
      }]
      this.leadservice.savepermissions(data).subscribe((result: any) => {
        debugger

        //Success Message
        this.showSuccess();
        this._router.navigate(['/chits/manage'])
      }, error => {
        debugger;


        //Error Message
        this.showError();
      });

    }, error => {
      debugger;



      this.showError();
    });

  }
  showSuccess() {
    this.toastService.success('Role Created Successfully');
  }
  showError() {
    debugger
    this.toastService.error('Something is Wrong')
  }

  cancel() {

    this._router.navigate(['chits/manage'])

  }

  items: any[] = [

  ];

  toggleCheckbox(item: any) {
    item.checked = !item.checked;
  }
}
