/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrService } from 'ngx-toastr';
import { getByRoles, getNavigation } from 'src/app/chits-class';

import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { LeadService } from 'src/app/lead.service';


@Component({
  selector: 'app-editrole',
  standalone: true,
  imports: [CommonModule, ModalModule, NgSelectModule, TabsModule, FormsModule,
    ReactiveFormsModule, MatDialogModule],
  templateUrl: './editrole.component.html',
  styleUrl: './editrole.component.scss'
})
export class EditroleComponent {

  public roleName: string = '';
  public description: string = '';
  public checked: any;
  private getById: any = getByRoles;
  public name: any;
   getbyidpermissions: any;
  public create: any;
  public read: any;
  public write: any;
  public delete: any;
  public verticaldata:any;
  public allon: any;
  public getNavigation: getNavigation[] = [];


  constructor(private _router: Router, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar,

    private leadService: LeadService,
    private userService: UsersService, private msterService: MastersService, private toastService: ToastrService,
    private dialog: MatDialog, private approute: ActivatedRoute) { }

  ngOnInit(): void {
    debugger

    //Getting Id from route
    this.name = this.approute.snapshot.params['name'];

    //getByIdroles method
    this.leadService.getByIdRoles(this.name).subscribe((data: any) => {
      debugger

      this.getById = data.data;
      console.log("this.getById",)
      this.roleName = this.getById.roleName,
        this.description = this.getById.description
      this.verticalid = this.getById.verticalId

    })
    //business vertical
    this.leadService.getVerticalDropdown().subscribe((data: any) => {
      this.verticaldata = [{ id: 0, name: 'All' }, ...data];
    });
    this.leadService.getbyidpermissions(this.name).subscribe((data: any) => {
      debugger

      this.getbyidpermissions = data.data;
      console.log("this.getbyidpermissions", this.getbyidpermissions)
      this.getbyidpermissions = this.getbyidpermissions.filter((permission: any) => permission.navigation !== null);

      const allTrue = this.getbyidpermissions.every((item: any) => item.create && item.read && item.write && item.delete);

      // Set this.allon to true if all items meet the condition
      if (allTrue) {
        this.allon = true;
      }

      this.getbyidpermissions.forEach((item: any) => {
        item.allon = item.create && item.read && item.write && item.delete;
      });
    })

  }


  navigation() {
    this.verticalid = parseInt(this.verticalid)
    this.leadService.getNavigations(this.verticalid).subscribe((data: any) => {
     
      this.getNavigation = data;

    })
  }


  verticalid: any;
  //updating the role
  editrole() {
    console.log("roel", this.roleName)

    var data = {
      roleName: this.roleName,
      oldroleName: this.name,
      description: this.description,
      verticalId: parseInt(this.verticalid)

    }
    debugger
    this.leadService.updateRole(data).subscribe((result: any) => {
      debugger

      var data = [{
        roleName: this.roleName,
        description: this.description,
        verticalId: parseInt(this.verticalid),
        rolePermissions: this.getbyidpermissions


      }]
      debugger

      this.leadService.savePermissions(data).subscribe((result: any) => {
        debugger

        //Success message
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

  toggleRow(item: any, event: any) {
    const isChecked = event.target.checked;
    // Set all properties to the checked status of the toggle in the first cell
    item.create = isChecked;
    item.read = isChecked;
    item.write = isChecked;
    item.delete = isChecked;
    item.admin = isChecked;
  }
  updateToggleRow(item: any) {
    // Check if all individual permissions are checked
    const allChecked = item.read && item.write && item.create && item.delete;
    debugger
    // Set the toggle status based on the individual permissions
    if (allChecked == true) {
      item.admin = allChecked;

    }
    else {
      item.admin = false
    }

  }
  //Toggle methods
  updateread(item: any, id: any, event: any) {
    debugger
    this.read = event.target.checked;
    this.updateToggleRow(item)
  }

  updatewrite(item: any, id: any, event: any) {
    debugger
    this.write = event.target.checked;
    this.updateToggleRow(item)

  }
  updatecreate(item: any, id: any, event: any) {
    debugger
    this.create = event.target.checked;
    this.updateToggleRow(item)

  }
  updatedelete(item: any, id: any, event: any) {
    debugger
    this.delete = event.target.checked;
    this.updateToggleRow(item)

  }

  showSuccess() {
    this.toastService.success(' Role Updated Successfully');
  }
  showError() {
    debugger
    this.toastService.error('Something is Wrong')
  }

  cancel() {

    this._router.navigate(['chits/manage'])

  }


  toggleCheckbox(item: any) {
    item.checked = !item.checked;
  }
}

