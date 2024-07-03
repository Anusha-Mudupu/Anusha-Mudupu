/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// import { UserService } from 'src/app/user.service';
import { MastersService } from '../Services/masters.service';
import { AgentProducts, Branch } from 'src/app/chits-class';
import { MatDialog } from '@angular/material/dialog';
import { UpdateBranchComponent } from '../update-branch/update-branch.component';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, MatSnackBarModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  updateProductForm:any;
  
  id:any;
  productDataById:any;
  constructor(private masterService: MastersService, private FormBuilder: FormBuilder, private _snackBar: MatSnackBar,  public toastService: ToastrService,private activated:ActivatedRoute,private router:Router){
    this.activated.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id', this.id);

    });
  this.updateProductForm=this.FormBuilder.group({
     id:this.id,
    vertical:[1],
    name: ['', Validators.compose([Validators.required])],
    chitValue:['', Validators.compose([Validators.required])],
    tenureInMonths:['', Validators.compose([Validators.required])],
    minInstallment:['', Validators.compose([Validators.required])],
    maxInstallment:['', Validators.compose([Validators.required])],
    minBidPayable: ['', Validators.compose([Validators.required])],
    maxBidPayable:['', Validators.compose([Validators.required])],
    loginUserId: ['', Validators.compose([Validators.required])]
  });
}
ngOnInit(){
  this.masterService.getProductById(this.id).subscribe((data:any)=>{
    this.productDataById=data;
   
    console.log('productDataById', this.productDataById);
 });
}

updateProduct(){
  
  console.log('updateProduct',this.updateProductForm.value)
  const data=this.updateProductForm.value
  this.masterService.updateProduct(this.id,data).subscribe((res:any)=>{
     console.log('productUpdated successfully',this.updateProductForm.value);
     this.showSuccess();
     this.router.navigate(['/chits/AgentProducts'])
     setTimeout(() => {
      }, 2000)
  },error=>{
    this.showError();
  });
}

onCloseHandled(){
  this.router.navigate(['/chits/AgentProducts']);
}

showSuccess() {
  this.toastService.success(' Product Updated Successfully');
}
showError() {
  this.toastService.error('Something is Wrong')
 }
}
