/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
@Component({
  selector: 'app-request-category',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,OrderByPipe],
  templateUrl: './request-category.component.html',
  styleUrl: './request-category.component.scss'
})
export class RequestCategoryComponent {
  display = "none";
  display1="none";
  display2="none";
  searchText:any=""
  RequestCategory:any=[
    {
     "Order":'1', 
     "Name":'Login',
     "Code":'login',
     "Status":'Active'
    },
    {
      "Order":'2', 
      "Name":'Incorrect Data',
      "Code":'incorrect_data',
      "Status":'Active'
     }
  ]
  ngOnInit(): void {
    
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  EditModal(){
    this.display1 = "block";
  }
  onCloseHandled1(){
    this.display1 = "none";
  }
  onClosed(){
    this.display2="none";
  }
  openDelete(){
    this.display2 = "block";
  }
}
