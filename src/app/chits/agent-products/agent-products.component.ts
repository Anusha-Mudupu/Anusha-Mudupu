/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentProducts } from 'src/app/chits-class';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { MastersService } from '../Services/masters.service';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

import { PaginationModule } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-agent-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderByPipe, NgxPaginationModule, PaginationModule],
  templateUrl: './agent-products.component.html',
  styleUrl: './agent-products.component.scss'
})
export class AgentProductsComponent implements OnInit {
  selectedItem: any;
  id: string = '';
  constructor(private masterService: MastersService, private dialog: MatDialog, private router: Router, public toastService: ToastrService,) {

  }
  display = "none";

  AgentProducts: any;
  searchText: string = "";
  filteredEmployees: AgentProducts[] = []
  agentProductsData: any;
  page: number = 1;
  count: number = 0;
  tableSize = 10;
  tableSizes: any = [5, 10, 15, 20];
  sortedProductList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'chitValue'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  searchTermChitValue: any;
  searchTermtenureInMonths: any;
  searchTermMinInstals: any;
  searchTermMaxInstall: any;
  searchTermMinMBid: any;
  searchTermMaxBid: any;
  AgentProductsList: any;
  role:any;
  verticalId:any;
  showAddButton:boolean=true;
  showActions:boolean=true;
  showbreadcrumbs:boolean=false;
  showadminBredcrumbs:boolean=true;
  showAllClear:boolean = true
  ngOnInit(): void {
    this.role = localStorage.getItem('Rolename');
    console.log("this.role for chits", this.role)
    this.verticalId = localStorage.getItem('vericalid');
    console.log("this.role for chits", this.verticalId);
    
    this.masterService.getAgentProductsData().subscribe((data: any) => {
      console.log("Agent Products", data);
      this.AgentProducts = data.data;
      this.sortedProductList = this.AgentProducts.slice();
      this.sortUserList();
    })
    if(this.role == "Agent"){
      this.showAddButton=false;
      this.showActions= false;
      this.showbreadcrumbs=true;
      this.showadminBredcrumbs = false;
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.AgentProducts
  }
  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.AgentProducts
  }
  openModal() {
    // this.display = "block";
    // const dialogRef = this.dialog.open(CreateProductComponent, { height: '500px', width: '600px', })
    //   .afterClosed().subscribe((result: any) => { this.ngOnInit() });
    this.router.navigate(['/chits/createproduct']);

  }
  onCloseHandled() {
    this.display = "none";
  }


  sortState = { columnIndex: -1, ascending: true };

  sortTable(column: any) {
    if (this.sortColumn === column) {
      // If same column is clicked again, toggle sort order
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      // If different column is clicked, set new sort column and reset sort order to ascending
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.sortUserList();
  }

  sortUserList() {
    this.sortedProductList.sort((a, b) => {
      let aValue = a[this.sortColumn];
      let bValue = b[this.sortColumn];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        // Case-insensitive sorting for string values
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      if (this.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }
  EditProduct(id: any) {
    this.selectedItem = this.AgentProducts.find((item: any) => item.id === id);
    console.log('item clicked', this.selectedItem);
    this.id = this.selectedItem.id
    console.log('selected id', this.id)

    this.router.navigate(['/chits/update-product', id])

  }
  openDelete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        debugger
        this.masterService.deleteProduct(id).subscribe((res: any) => {
          debugger;
          Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: 'rgb(3, 142, 220)', icon: 'success', });
          this.ngOnInit();
        }, error => {


          this.toastService.error('Something is Wrong')

        });
      } else if (
        // Read more about handling dismissals
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: 'rgb(3, 142, 220)',
          showCancelButton: true,
        })
      }
    });
  }


  clearAllSearchFields() {
    this.searchTermChitValue = '';
    this.searchTermtenureInMonths = '';
    this.searchTermMinInstals = '';
    this.searchTermMaxInstall = '';
    this.searchTermMinMBid = '';
    this.searchTermMaxBid = '';
   
    this.filterLeads();  
  }

  filterLeads() {

    this.agentProductsData = this.AgentProducts.filter((lead: any) =>

      this.filterBychitValue(lead)&&
      this.filterBytenureInMonths(lead) &&
      this.filterBymaxinstallment(lead) &&
      this.filterBymininstallment(lead) &&
      this.filterBymaxpaybale(lead) &&
      this.filterByminbidpayable(lead)

    );


    this.sortedProductList = this.agentProductsData.slice();

    this.sortUserList()
  }



  filterBychitValue(lead: any): boolean {
    if (!this.searchTermChitValue) {
        return true; // No chit value search term, pass all leads
    }
    const searchTermAsNumber = parseInt(this.searchTermChitValue, 10); // Convert search term to a number
    return lead && lead.chitValue && parseInt(lead.chitValue, 10) === searchTermAsNumber;
}

filterBytenureInMonths(lead: any): boolean {
    if (!this.searchTermtenureInMonths) {
        return true; // No tenure in months search term, pass all leads
    }
    const searchTermAsNumber = parseInt(this.searchTermtenureInMonths, 10); // Convert search term to a number
    return lead && lead.tenureInMonths && parseInt(lead.tenureInMonths, 10) === searchTermAsNumber;
}

filterBymininstallment(lead: any): boolean {
    if (!this.searchTermMinInstals) {
        return true; // No min installment search term, pass all leads
    }
    const searchTermAsNumber = parseInt(this.searchTermMinInstals, 10); // Convert search term to a number
    return lead && lead.minInstallment && parseInt(lead.minInstallment, 10) === searchTermAsNumber;
}

filterBymaxinstallment(lead: any): boolean {
    if (!this.searchTermMaxInstall) {
        return true; // No max installment search term, pass all leads
    }
    const searchTermAsNumber = parseInt(this.searchTermMaxInstall, 10); // Convert search term to a number
    return lead && lead.maxInstallment && parseInt(lead.maxInstallment, 10) === searchTermAsNumber;
}

filterByminbidpayable(lead: any): boolean {
    if (!this.searchTermMinMBid) {
        return true; // No min bid payable search term, pass all leads
    }
    const searchTermAsNumber = parseInt(this.searchTermMinMBid, 10); // Convert search term to a number
    return lead && lead.minBidPayable && parseInt(lead.minBidPayable, 10) === searchTermAsNumber;
}

filterBymaxpaybale(lead: any): boolean {
    if (!this.searchTermMaxBid) {
        return true; // No max bid payable search term, pass all leads
    }
    const searchTermAsNumber = parseInt(this.searchTermMaxBid, 10); // Convert search term to a number
    return lead && lead.maxBidPayable && parseInt(lead.maxBidPayable, 10) === searchTermAsNumber;
}

}
