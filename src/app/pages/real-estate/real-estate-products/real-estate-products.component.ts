/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UntypedFormBuilder, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { UsersService } from 'src/app/chits/Services/users.service';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableRoutingModule } from '../../table/table-routing.module';
import Swal from 'sweetalert2';
import { LeadService } from 'src/app/lead.service';
import { Catergory, Products } from 'src/app/chits-class';
import { MastersService } from 'src/app/chits/Services/masters.service';
import { MenuitemsService } from 'src/app/menuitems.service';

@Component({
  selector: 'app-real-estate-products',
  standalone: true,
  imports: [CommonModule, ModalModule, PaginationModule,
    TableRoutingModule,
    SharedModule,
    NgPipesModule,
    BsDatepickerModule,

    SimplebarAngularModule,
    TabsModule, FormsModule, ReactiveFormsModule, MatDialogModule, NgxPaginationModule],
  templateUrl: './real-estate-products.component.html',
  styleUrl: './real-estate-products.component.scss'
})


export class RealEstateProductsComponent {
  public display = "none";
  public display1 = "none";
  public display2 = "none"
  public productData: any;
  public spinner: boolean = true
  public product: any;
  public rolePermission: any;
  public userDelete: any;
  public userCreate: any;
  public agent: any;
  public userRead: any;
  public userWrite: any;
  public CategoryData:any;
  public selectedVertical: string = 'all';
  sortedProductList: any[] = []; // Array to hold sorted user list
  sortColumn: string = 'categoryName'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  Showproductdropdown: boolean = false;
  searchTermArea: any;
  searchTermAmountPayable: any;
  searchTermProduct: any;
  searchTermProductType: any;
  
  filteredProducts: any;

  isAllSelected: boolean = false;
  currentTypeName: any;
  selectedLabel: any;
  ShowopenPlots = false;
  showvillasApart = false
  role: any;
  showProductType:boolean=true;

  constructor(private _router: Router, private formBuilder: UntypedFormBuilder,
    private leadservice: LeadService, private toastService: ToastrService, private masterService: MastersService,
    private userService: UsersService, private msterService: MastersService, private FormBuilder: FormBuilder,
    private dialog: MatDialog, private menuitemservice: MenuitemsService) {


    //Get products
    this.leadservice.getproduct().subscribe((data: any) => {
      this.productData = data.data;
      this.filteredProducts = this.productData;
      const uniqueCategoryCodes = Array.from(new Set(this.productData.map((product: any) => product.categoryCode)));
      this.CategoryData = uniqueCategoryCodes;

      this.sortUserList()
      this.isAllSelected = true;
      console.log("this.productdata", this.productData);
      console.log("this.filteredProducts", this.filteredProducts)
      this.spinner = false
      // this.sortLeadsByLeadName(); // Call the sorting function
      this.updatePageData(1);
    });

    // this.masterService.getCategoryData().subscribe((data: any) => {
    //   this.CategoryData = data;
    //   console.log("this.CategoryData", this.CategoryData)
    // });


  }
  ngOnInit(): void {
 this.role = localStorage.getItem('Rolename');
    this.menuitemservice.getSelectedLabel().subscribe((label: any) => {
      this.selectedLabel = label;

      console.log('agentSelected Label:', this.selectedLabel);
    });

    // this.leadservice.getproduct().subscribe((data: any) => {
    //   this.productdata = data;
    //   this.filteredcatalogdata = this.productdata.filter((item: any) => {
    //     return this.CategoryData.some((fiteritem: any) => {
    //       return fiteritem.id === item.categoryId
    //     })
    //   })
    //   console.log('this.filtered products',this.filteredcatalogdata)
    // });

    //Checking Role permission
    this.rolePermission = localStorage.getItem('rolepermissionjson');
    if (this.rolePermission == null || this.rolePermission == "null") {
      this.userCreate = "true"
      this.userDelete = "true"
      this.userRead = "true"
      this.userWrite = "true"
    }
    else {
      const getRoles = JSON.parse(this.rolePermission).find((item: any) => item.navigation == "Products")

      if (getRoles == undefined) {
        this.userCreate = "true"
        this.userDelete = "true"
        this.userRead = "true"
        this.userWrite = "true"
      }
      else {
        this.userCreate = getRoles.create
        this.userDelete = getRoles.delete
        this.userRead = getRoles.read
        this.userWrite = getRoles.write
      }
    }
    // this.getFilteredProducts();
  }


  filterData() {

    this.filteredProducts = this.productData.filter((data: any) =>
      this.filterByName(data) &&
      this.filterByProduct(data) &&
      this.filterByAmount(data) &&
      this.filterByArea(data)
    );



  }
  clearAllSearchFields() {
    this.searchTermProductType = '';
    this.searchTermAmountPayable = '';
    this.searchTermArea = '';
    this.searchTermProduct = '';
   
    this.filterData();  
  }
  filterByName(data: any): boolean {
    if (!this.searchTermProductType) {
      return true; // No name search term, pass all leads
    }
    return data && data.categoryName && data.categoryName.toLowerCase().includes(this.searchTermProductType.toLowerCase());
  }
  filterByProduct(data: any): boolean {
    if (!this.searchTermProduct) {
      return true; // No name search term, pass all leads
    }
    return data && data.name && data.name.toLowerCase().includes(this.searchTermProduct.toLowerCase());
  }
  filterByAmount(data: any): boolean {
    if (!this.searchTermAmountPayable) {
      return true; // No name search term, pass all leads
    }
    return data && data.amountPayable && data.amountPayable.toLowerCase().includes(this.searchTermAmountPayable.toLowerCase());
  }
  filterByArea(data: any): boolean {
    if (!this.searchTermArea) {
      return true; // No name search term, pass all leads
    }
    return data && data.area && data.area.toLowerCase().includes(this.searchTermArea.toLowerCase());
  }





  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {

    const startItem = (page - 1) * 8;
    const endItem = page * 15;
    this.product = this.productData.slice(startItem, endItem);
    this.sortedProductList = this.product.slice();

    this.sortUserList()
  }



  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  EditModal() {
    this.display1 = "block";
  }
  onCloseHandled1() {
    this.display1 = "none";
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


  onClosed() {
    this.display2 = "none";
  }

  //Delete Method
  delete(id: any) {
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
        this.leadservice.deleteproduct(id).subscribe((res: any) => {
          debugger;
          this._router.navigate(['/real-estate/products'])

          Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', confirmButtonColor: 'rgb(3, 142, 220)', icon: 'success', });

        }, error => {
          debugger;

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


  openaddscreen() {
    this._router.navigate(['/real-estate/AddProduct'])
  }

  //Edit method
  openEditproduct(id: any) {
    this._router.navigate(['/real-estate/Editproduct', id])
  }

  // onProductTypeSelect(event: Event): void {
  //   // Cast the event.target as HTMLSelectElement to access its properties
  //   const target = event.target as HTMLSelectElement;
  //   const selectedTypeName = target.value; // Access the value from the event target
  //   // Set currentTypeName based on the selected option
  //   this.currentTypeName = selectedTypeName;

  //   // Determine whether "All" option is selected
  //   this.isAllSelected = selectedTypeName === 'All';
  //   // Find the product type that matches the selected typeName
  //   const productType = this.productTypes.find((pt: { typeName: string, products: any[] }) => pt.typeName === selectedTypeName);

  //   // Update the filtered products based on the selected product type
  //   if(productType) {
  //     this.filteredProducts = productType.products;
  //   } else {
  //     // If the selected typeName is not found, clear the filtered products
  //     this.filteredProducts = [];
  //     console.warn(`No matching product type found for selected type name: ${selectedTypeName}`);
  //   }
  // }


  // onClick(){
  //   this.filteredcatalogdata = this.productdata.filter((item: any) => {
  //     return this.CategoryData.some((fiteritem: any) => {
  //       return fiteritem.id === item.categoryId
  //     })
  //   })
  //   console.log('this.filtered products',this.filteredcatalogdata)
  // }



 
  onCategoryChange(event: any) {
  
    const selectedCategoryId = event.target.value;

  
    if (selectedCategoryId === 'all') {
      //  this.showProductType=true;
      this.filteredProducts = this.productData;
      
      this.isAllSelected = true;
      this.sortedProductList = this.filteredProducts.slice();
      this.sortUserList()
    } else {
      this.isAllSelected = false;
      this.filteredProducts = this.productData.filter((item: any) => {
        return item.categoryCode === (selectedCategoryId);
      });
      this.sortedProductList = this.filteredProducts.slice();

      this.sortUserList()
    }

    
    console.log('Filtered products:', this.filteredProducts);
  }



}
