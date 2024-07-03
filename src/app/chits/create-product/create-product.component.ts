/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MastersService } from '../Services/masters.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, MatSnackBarModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  display: any;
  createProductForm: any;
  submitted: boolean = false;
  constructor(private masterService: MastersService, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar, public toastService: ToastrService, private activated: ActivatedRoute, private router: Router) {
    this.createProductForm = this.FormBuilder.group({
      groupCode:'chits',
      name: ['', Validators.compose([Validators.required])],
      chitValue: ['', Validators.compose([Validators.required])],
      durationMonths: ['', Validators.compose([Validators.required])],
      minInstallment: ['', Validators.compose([Validators.required])],
      maxInstallment: ['', Validators.compose([Validators.required])],
      minBidPayable: ['', Validators.compose([Validators.required])],
      maxBidPayable: ['', Validators.compose([Validators.required])],
      lastUpdatedBy: '',
      lastUpdatedOn: "2024-06-20T10:17:21.294Z",
      isDeleted: true,
      isActive: true,
      id: 0
    });
  }
 onCloseHandled() {
    this.router.navigate(['/chits/AgentProducts'])
  }
  saveProduct() {
    this.submitted = true;
    this.masterService.createProduct(this.createProductForm.value).subscribe((data: any) => {
      console.log('saved product', this.createProductForm.value);
      this.showSuccess();
      this.router.navigate(['/chits/AgentProducts'])
      setTimeout(() => {
        this.display = "none";
      }, 2000)
      console.log(' product created Successfully');
    }, error => {
      this.showError();
    });
  }
  isFormEmpty(formValue: any): boolean {
  for (const controlName in formValue) {
      if (formValue.hasOwnProperty(controlName) && formValue[controlName]) {
        return false;
      }
    }
    return true;
  }

  showSuccess() {
    this.toastService.success(' Product Created Successfully');
  }
  showError() {
    this.toastService.error('Something is Wrong')
  }
}
