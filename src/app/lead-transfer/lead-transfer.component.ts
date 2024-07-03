/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { UserService } from 'src/app/pages/real-estate/userlist/user.service';
import { CommonModule } from '@angular/common';
import { LeadService } from '../chits/Services/lead.service';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-lead-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './lead-transfer.component.html',
  styleUrl: './lead-transfer.component.scss'
})
export class LeadTransferComponent {
  Userlist1: any;
  employeeList: any;
  chitsLeadData: any;
  checkedValGet: any[] = [];

  breadCrumbItems!: Array<{}>;
  productForm!: UntypedFormGroup;
  submitted = false;
  products: any;
  masterSelected!: boolean;
  endItem: any
  // Table data
  allproducts: any;
  filteredProducts: any;
  leadTransferForm: any;
  constructor(private userService: UserService, private leadService: LeadService, private formBuilder: UntypedFormBuilder, public store: Store,) {
   
  }
  ngOnInit() {
    this.userService.getUserList().subscribe((data: any) => {
      console.log(data);
      this.Userlist1 = data;

      console.log(this.Userlist1.data);

      console.log(this.Userlist1.data);

      this.employeeList = this.Userlist1.data.filter((user: any) => {
        return user.roles.includes('Employee');

      });
      console.log('employeelist', this.employeeList);


    });
    this.leadService.getAllLeadsData().subscribe((data: any) => {
      this.chitsLeadData = data;
    });
    this.leadTransferForm = this.formBuilder.group({
      fromId: [''],
      toId: [''],
      leadId: 0,
      leadIds: [
        0
      ],
      transferDate: "2024-05-15T11:27:42.708Z"
    })
  }

  onCategoryChange(event: any) {

    const selectedCategoryId = event.target.value;

    this.filteredProducts = this.chitsLeadData.filter((item: any) => {
      return item.assignTo === selectedCategoryId;
    });
  
    console.log('Filtered products:', this.filteredProducts);





  }



















  // File Remove
  // removeFile(event: any) {
  //   this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  // }



  /**
  * Save product
  */
  // saveProduct() {
  //   if (this.productForm.valid) {
  //     if (this.productForm.get('id')?.value) {
  //       const updatedData = this.productForm.value;
  //       this.store.dispatch(updateproductLists({ updatedData }));
  //     }
  //     else {
  //       this.productForm.controls['id'].setValue(this.products.length + 1)
  //       const currentDate = new Date();
  //       const formattedDate = this.datePipe.transform(currentDate, 'dd MMM, yyyy');
  //       this.productForm.controls['publish'].setValue(formattedDate);
  //       const newData = {
  //         orders: '0',
  //         ...this.productForm.value,
  //       }
  //       this.store.dispatch(addproductsList({ newData }));
  //     }

  //     this.showModal?.hide()
  //     setTimeout(() => {
  //       this.productForm.reset();
  //     }, 2000);
  //     this.submitted = true
  //   }
  // }
  // deleteddata
  // deleteData(id: any) {
  //   this.deleteRecordModal?.hide();
  //   if (id) {
  //     this.store.dispatch(deleteproductsList({ id: this.deleteId.toString() }));
  //   }
  //   this.store.dispatch(deleteproductsList({ id: this.checkedValGet.toString() }));
  //   this.deleteRecordModal?.hide();
  //   this.masterSelected = false
  // }



  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.filteredProducts = this.filteredProducts.map((x: { states: any }) => ({ ...x, states: ev.target.checked }));

    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.filteredProducts.length; i++) {
      if (this.filteredProducts[i].states == true) {
        result = this.filteredProducts[i].id;
        checkedVal.push(result);
        console.log('all checked', result);
      }
    }

    this.checkedValGet = checkedVal;
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.filteredProducts.length; i++) {
      if (this.filteredProducts[i].states == true) {
        result = this.filteredProducts[i].id;
        checkedVal.push(result);
        console.log('individual check', result);
      }
    }
    this.checkedValGet = checkedVal
    
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }


  // // Delete Product
  // removeItem(id: any) {
  //   this.deleteId = id
  //   this.deleteRecordModal?.show()
  // }



  saveLeadTransfer(){
    this.leadService.leadTransfer(this.leadTransferForm.value).subscribe((result:any)=>{
      console.log('result',result)
    })
  }

}















