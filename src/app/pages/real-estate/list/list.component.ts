/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// modal
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { addlistingGridData, deletelistingGridData, fetchlistingGridData, fetchlistinglistData, updatelistingGridData } from 'src/app/store/App-realestate/apprealestate.action';
import { Store } from '@ngrx/store';
import { selectData, selectlistingdata } from 'src/app/store/App-realestate/apprealestate-selector';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { cloneDeep } from 'lodash';
import { Education, Gender, Lead, Products, User, productslists } from 'src/app/chits-class';
import { MenuItem } from 'src/app/layouts/sidebar/menu.model';
import { UsersService } from 'src/app/chits/Services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { MenuitemsService } from 'src/app/menuitems.service';
import { MastersService } from 'src/app/chits/Services/masters.service';

import { ListService } from '../../table/listjs/listjs.service';


import { MENU } from 'src/app/layouts/sidebar/menu';
import { LeadService } from 'src/app/chits/Services/lead.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DecimalPipe]
})

// List Component
export class ListComponent {
  term: any
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  propertyForm!: UntypedFormGroup;
  submitted = false;
  productslist: any
  products: any;
  masterSelected!: boolean;
  files: File[] = [];
  bedroom: any;
  productsdata: any
  endItem: any;


///lead data
public spinner: boolean = false
  public searchText = '';
  public filteredUserList: any;
  public leadsData: Lead[] = [];
  public educationData!: Education;
  public genderData!: Gender;
  public usersData: User[] = [];
  public ProductsData!: Products;
  public LeadForm!: FormGroup;
  public id!: number;
  public leadDataById!: Lead;
  // selectedItem: any;
  public updateLeadForm!: FormGroup;
  public Status = "New";
  public Branch = "Hyderabad";
 

  public verticaldropdown = false;

  public page: number = 1;
  public count: number = 0;
  public tableSize = 10;
  public tableSizes: any = [5, 10, 15, 20]
  public leadsData2: Lead[] = [];
  public headers: any;
  public rolePermission: any;
  public userCreate: any;
  public userDelete: any;
  public userRead: any;
  public userWrite: any;
  searchTermName: any;
  searchTermPhone: any;
  searchTermProducts: any;
  searchTermStatus: any;
  searchTermBranch: any;
  searchTermEmployee: any;



  currentPage: number = 1;
  itemsPerPage: number = 15;
  totalPages: number = 0;
  displayedPages: number[] = [];
  sortedLeadList: any[] = []; // Array to hold sorted user list
  sortColumn: any = 'leadName'; // Default sort column
  sortOrder: string = 'asc';  // Default sort order
  LeadsData: Lead[] = []
  realEstateLeadData: any;
  adminLeadData: any;
  chitsLeadData: any;
  menuItems: MenuItem[] = [];
  showChitsLeadData = false;
  showRealEstateLeadData = false;
  showAdminLeadData = false;
  selectedLabel: any;
  verticalData: any;
  public verticalid: any;
  role: any;
  hideEmployeeName:boolean=false;






  @ViewChild('addProperty', { static: false }) addProperty?: ModalDirective;
  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;
  deleteID: any;

  constructor( private leadservice: LeadService, public store: Store, private router: Router,  private userService: UsersService, private msterService: MastersService,
      public toastService: ToastrService, private menuitemservice: MenuitemsService) {
      this.menuItems = MENU;
      console.log('this.menuitems', this.menuItems);
  
      this.leadservice.getAllLeadsData().subscribe((data: any) => {
        this.chitsLeadData = data;
        console.log('leads data', this.leadsData);
        
  
      });
      this.leadservice.getrealestateleaddata("2").subscribe((data: any) => {
        this.realEstateLeadData = data;
      });
      this.leadservice.getAdminLeadData().subscribe((data: any) => {
        this.adminLeadData = data;
      })
  
      this.leadservice.getVerticalDropdown().subscribe((data: any) => {
        this.verticalData = data;
        console.log("vertical", this.verticalData)
      });
  
      this.menuitemservice.getSelectedLabel().subscribe(label => {
        this.selectedLabel = label;
        // Here you can perform actions based on the selected label
        console.log('Selected Label:', this.selectedLabel);
        // You can trigger data loading or any other logic based on this label
        if (this.selectedLabel === 'Chits' || this.selectedLabel === 'Leads') {
          this.showChitsLeadData = true;
          this.showRealEstateLeadData = false;
          this.showAdminLeadData = false;
          this.verticaldropdown = false;
        }
        else if (this.selectedLabel === 'Real Estate' || this.selectedLabel === '.Leads') {
          this.showRealEstateLeadData = true;
          this.showChitsLeadData = false;
          this.showAdminLeadData = false;
          this.verticaldropdown = false;
        }
        else if (this.selectedLabel === 'Administration') {
          this.showAdminLeadData = true;
          this.showChitsLeadData = false;
          this.showRealEstateLeadData = false;
          this.verticaldropdown = true;
  
        }
  
  
      });
   }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Real Estate', active: true },
      { label: 'Listing List', active: true }
    ];

    // fetch data with store
    setTimeout(() => {
      this.store.dispatch(fetchlistingGridData());
      this.store.select(selectData).subscribe((data) => {
        this.products = data
        this.productsdata = data
        this.products = cloneDeep(this.productsdata.slice(0, 8))
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000)

    // listing list
    this.store.dispatch(fetchlistinglistData());
    this.store.select(selectlistingdata).subscribe((data) => {
      this.productslist = data;
    });

   

  }
  getSelectedData() {
    let filteredData = [];
  
    if (this.verticalid == 1 || this.selectedLabel === 'Chits' || this.selectedLabel === 'Leads') {
      filteredData = this.chitsLeadData || [];
    } else if (this.verticalid == 2 || this.selectedLabel === 'Real Estate' || this.selectedLabel === '.Leads') {
      filteredData = this.realEstateLeadData || [];
    } else if (this.verticalid == 0 || this.selectedLabel === 'Administration') {
      filteredData = this.adminLeadData || [];
    }
    
    // Filter the data here
    
  
    return filteredData;
  }
  
  trackByFn(index: number, item: any): number {
    return item.id; // Use the lead ID as the unique identifier
  }

  // File Upload
  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    previewsContainer: false,
  };

  uploadedFiles: any[] = [];

  // File Upload
  imageURL: any;
  onUploadSuccess(event: any) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
      this.propertyForm.controls['img'].setValue(event[0].dataURL);
    }, 0);
  }

  // File Remove
  removeFile(event: any) {
    this.uploadedFiles.splice(this.uploadedFiles.indexOf(event), 1);
  }

  // Edit Data
  editList(id: any) {
    this.addProperty?.show()
    var modaltitle = document.querySelector('.modal-title') as HTMLAreaElement
    modaltitle.innerHTML = 'Edit Product'
    var modalbtn = document.getElementById('add-btn') as HTMLAreaElement
    modalbtn.innerHTML = 'Update'
    this.propertyForm.patchValue(this.products[id]);
  }

  // Add Property
  saveProperty() {
    if (this.propertyForm.valid) {
      if (this.propertyForm.get('id')?.value) {
        const updatedData = this.propertyForm.value;
        this.store.dispatch(updatelistingGridData({ updatedData }));
      }
      else {
        this.propertyForm.controls['id'].setValue(this.products.length + 1)
        const city = this.propertyForm.get('city')?.value;
        const type = this.propertyForm.get('type')?.value;
        const color = (type == 'Villa' ? type == 'Residency' ? 'danger' : 'success' : 'info')
        const newData = {
          type: type,
          color: color,
          location: city,
          ...this.propertyForm.value,
        }
        this.store.dispatch(addlistingGridData({ newData }));
      }
      this.addProperty?.hide()
      setTimeout(() => {
        this.propertyForm.reset();
      }, 2000);
      this.submitted = true
    }
  }

  // Delete Product
  removeItem(id: any) {
    this.deleteID = id
    this.deleteRecordModal?.show()
  }

  confirmDelete(id: any) {
    if (id) {
      this.store.dispatch(deletelistingGridData({ id: this.deleteID.toString() }));
    }
    this.store.dispatch(deletelistingGridData({ id: this.checkedValGet.toString() }));
    this.deleteRecordModal?.hide();
    this.masterSelected = false;
  }

  checkedValGet: any[] = [];
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.products.forEach((x: { state: any; }) => x.state = ev.target.checked)
  
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].state == true) {
        result = this.products[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }

  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].state == true) {
        result = this.products[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }


  // Sort Data
  direction: any = 'asc';
  onSort(column: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    const sortedArray = [...this.products]; // Create a new array
    sortedArray.sort((a, b) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === 'asc' ? res : -res;
    });
    this.products = sortedArray;
  }
  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  // filterdata
  filterdata() {
    if (this.term) {
      this.products = this.productsdata.filter((es: any) => es.title.toLowerCase().includes(this.term.toLowerCase()))
    } else {
      this.products = this.productsdata.slice(0, 10);
    }
    // noResultElement
    this.updateNoResultDisplay();
  }

  // no result 
  updateNoResultDisplay() {
    const noResultElement = document.querySelector('.noresult') as HTMLElement;

    if (this.term && this.products.length === 0) {
      noResultElement.style.display = 'block';
    } else {
      noResultElement.style.display = 'none';
    }
  }

  // pagechanged
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
    this.products = this.productsdata.slice(startItem, this.endItem);
  }
}
