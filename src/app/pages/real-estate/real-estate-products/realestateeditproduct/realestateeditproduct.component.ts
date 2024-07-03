/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { LeadService } from 'src/app/lead.service';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { Products } from 'src/app/chits-class';

@Component({
  selector: 'app-realestateeditproduct',
  standalone: true,
  imports: [CommonModule, ModalModule, NgSelectModule, TabsModule, FormsModule,
    ReactiveFormsModule, MatDialogModule, NgxPaginationModule],
  templateUrl: './realestateeditproduct.component.html',
  styleUrl: './realestateeditproduct.component.scss'
})
export class RealestateeditproductComponent {
  public leadsData: any;

  public listJsForm!: FormGroup;
  public submitted = false;
  public usersData: any;
  public ProductsData: Products[] = [];
  public display: any;
  public SourceData: any;
  public Sourcesubcategorydata: any;
  public agentid: any;
  public sourceid: any;
  public productForm!: FormGroup;
  // genderData: any;
  // public educationData: any;
  public breadCrumbItems!: Array<{}>;
  public isMenuOpen: boolean = true; // Set it to true initially, assuming the menu is open by default
  public message: any;
  public id: any;
  public getproduct: any;
  public categorydata: any;
  public subcategorydata: any;



  constructor(private _router: Router, private fb: FormBuilder, private _snackBar: MatSnackBar,

    private leadservice: LeadService,
    private userService: UsersService, private msterService: MastersService, private toastService: ToastrService,
    private dialog: MatDialog, private approute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.approute.snapshot.params['id'];
    //Form
    this.productForm = this.fb.group({
      id: this.id,
      name: ['',],
      amountPayable: [''],
      unitSize: ['',],
      rsdAmount: [''],

      minimumMonthlyRent: [''],
      area: [''],
      value: [''],
      categoryId: [''],
      subCategoryId: ['2'],
      vertical: 2

    });

    this.leadservice.catergory().subscribe((data: any) => {
      this.categorydata = data;
    });
    this.leadservice.subcatergory().subscribe((data: any) => {
      this.subcategorydata = data;
    });

    //Getby id Products
    this.leadservice.getbyidproduct(this.id).subscribe((data: any) => {
      this.getproduct = data;
      debugger
      this.productForm.controls['name'].setValue(data.name);
      this.productForm.controls['amountPayable'].setValue(data.amountPayable);
      this.productForm.controls['unitSize'].setValue(data.unitSize);
      this.productForm.controls['rsdAmount'].setValue(data.rsdAmount);
      this.productForm.controls['minimumMonthlyRent'].setValue(data.minimumMonthlyRent);
      this.productForm.controls['area'].setValue(data.area);
      this.productForm.controls['value'].setValue(data.value);
      this.productForm.controls['categoryId'].setValue(data.categoryId);
      this.productForm.controls['subCategoryId'].setValue(data.subCategoryId);
      this.id = data.id;
      console.log('leads data', this.leadsData);
    })
  }

  //Update Product Method
  onSubmit() {
    this.submitted = true;
    debugger;
    const content = this.productForm.getRawValue();
    this.leadservice.editproduct(this.id, content).subscribe((res: any) => {
      debugger;
      console.log('Lead added successfully');
      console.log(res);

      this.showSuccess();
      this._router.navigate(['/real-estate/products'])


      this.display = "none";
    }, error => {
      debugger;

      this.showError();
    });
  }
  showSuccess() {
    this.toastService.success(' Product Updated Successfully');
  }
  showError() {
    debugger
    this.toastService.error('Something is Wrong')
  }
  close() {
    debugger
    this._router.navigate(['/real-estate/products'])
  }

  /**
   * Form data get
   */
  get form() {
    return this.listJsForm.controls;
  }

}
