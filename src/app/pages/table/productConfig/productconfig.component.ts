/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Observable } from 'rxjs';

// Sweet Alert
import Swal from 'sweetalert2';

import { ProductConfig, paginationproduct, dataattribute, existingProduct, FuzzyProduct } from './data';
import { NgbdProductSortableHeader, productSortEvent } from './productconfig-sortable.directive';
import { ProductConfigModel } from './productconfig.model';
import { ProductService } from './productconfig.service';

@Component({
  selector: 'app-productconfig',
  templateUrl: './productconfig.component.html',
  styleUrls: ['./productconfig.component.scss'],
  providers: [ProductService, DecimalPipe]
})
export class ProductConfigComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  submitted = false;
  productConfigForm!: UntypedFormGroup;
  ProductConfigData!: ProductConfigModel[];
  checkedProduct: any;
  masterSelected!: boolean;
  ProductConfigDatas: any;

  paginationDatas: any;
  attributedata: any;
  existingData: any;
  fuzzyData: any;

  existingTerm: any;
  fuzzyTerm: any;
  dataterm: any;
  term: any;

  // Table data
  ProductConfigProduct!: Observable<ProductConfigModel[]>;
  total: Observable<number>;
  @ViewChildren(NgbdProductSortableHeader) headers!: QueryList<NgbdProductSortableHeader>;
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  @ViewChild('deleteModal', { static: false }) deleteModal?: ModalDirective;
  constructor(public service: ProductService, private formBuilder: UntypedFormBuilder, private pipe: DecimalPipe) {
    this.ProductConfigProduct = service.roles$;
    this.total = service.total$;
  }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Tables' },
      { label: 'productConfig', active: true }
    ];

    /**
   * Form Validation
   */
    this.productConfigForm = this.formBuilder.group({
      ids: [''],
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      product: ['', [Validators.required]],
    });


    /**
     * fetches data
     */
    this.ProductConfigProduct.subscribe(x => {
      this.ProductConfigDatas = Object.assign([], x);
    });
    this.attributedata = dataattribute
    this.existingData = existingProduct
    this.fuzzyData = FuzzyProduct
    this.paginationDatas = paginationproduct

    this.paginationDatas = paginationproduct.slice(0, 3);
    this.ProductConfigDatas = ProductConfig.slice(0, 8);
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.ProductConfigDatas = ProductConfig.slice(startItem, endItem);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.paginationDatas = paginationproduct.slice(startItem, endItem);
  }

  /**
   * Form data get
   */
  get form() {
    return this.productConfigForm.controls;
  }

  /**
  * Save saveProductConfig
  */
  saveProductConfig() {
    if (this.productConfigForm.valid) {
      if (this.productConfigForm.get('ids')?.value) {
        this.ProductConfigDatas = this.ProductConfigDatas.map((data: { id: any; }) => data.id === this.productConfigForm.get('ids')?.value ? { ...data, ...this.productConfigForm.value } : data)
      } else {
        const category = this.productConfigForm.get('category')?.value;
        const type = this.productConfigForm.get('type')?.value;
        const product = this.productConfigForm.get('product')?.value;
        const pValue = this.productConfigForm.get('pValue')?.value;
        const tenure = this.productConfigForm.get('tenure')?.value;
        ProductConfig.push({
          id: this.ProductConfigDatas.length + 1,
          category,
          type,
          product,
          pValue,
          tenure,
          isSelected: false
        });

      }
    }
    this.showModal?.hide()
    setTimeout(() => {
      this.productConfigForm.reset();
    }, 2000);
    this.submitted = true
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.ProductConfigDatas.forEach((x: { state: any; }) => x.state = ev.target.checked)
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.ProductConfigDatas.length; i++) {
      if (this.ProductConfigDatas[i].state == true) {
        result = this.ProductConfigDatas[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
  }
  
  isAllChecked() {
    return this.ProductConfigDatas.every((_: { state: any; }) => _.state);
  }

  /**
  * Confirmation mail model
  */
  deleteRecord() {
    if (this.checkedValGet.length > 0) {
      this.deleteModal?.show();
    } else {
      Swal.fire({ text: 'Please select at least one checkbox', confirmButtonColor: 'rgb(3, 142, 220)' });

    }
  }
  deleteId: any;
  confirm(id: any) {
    this.deleteId = id;
    this.deleteModal?.show();
  }


  /**
  * Multiple Delete
  */
  checkedValGet: any[] = [];

  // Delete Data
  deleteData(id: any) {
    if (id) {
      document.getElementById('a_' + id)?.remove();

    }
    this.checkedValGet.forEach((item: any) => {
      document.getElementById('a_' + item)?.remove();
      this.masterSelected = false;
    });

    this.deleteModal?.hide();
  }

  /**
  * Open modal
  * @param content modal content
  */
  editModal(id: any) {
    this.submitted = false;
    var updateBtn = document.getElementById('add-btn') as HTMLAreaElement;

    updateBtn.innerHTML = "Update";
    this.showModal?.show()
    var productData = this.ProductConfigDatas[id];
    this.productConfigForm.controls['name'].setValue(productData.name);
    this.productConfigForm.controls['type'].setValue(productData.type);
    this.productConfigForm.controls['product'].setValue(productData.product);
    this.productConfigForm.controls['ids'].setValue(productData.id);
  }

  // Sorting
  sortname() {
    this.ProductConfigDatas.sort(function (a: any, b: any) {
      if (a.firstname < b.firstname) { return -1; }
      if (a.firstname > b.firstname) { return 1; }
      return 0;
    })
  }

  /**
* Sort table data
* @param param0 sort the column
*
*/
  onSort({ column, direction }: productSortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.productsortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  searchData(id: any) {
    if (id == '1') {
      if (this.dataterm) {
        this.attributedata = dataattribute.filter((el: any) => el.name.toLowerCase().includes(this.dataterm.toLowerCase()) || el.year.toLowerCase().includes(this.dataterm.toLowerCase()))
      } else {
        this.attributedata = dataattribute
      }
    }
    if (id == '2') {
      if (this.existingTerm) {
        this.existingData = existingProduct.filter((el: any) => el.name.toLowerCase().includes(this.existingTerm.toLowerCase()) || el.content.toLowerCase().includes(this.existingTerm.toLowerCase()))
      } else {
        this.existingData = existingProduct
      }
    }
    if (id == '3') {
      if (this.fuzzyTerm) {
        this.fuzzyData = FuzzyProduct.filter((el: any) => el.name.toLowerCase().includes(this.fuzzyTerm.toLowerCase()))
      } else {
        this.fuzzyData = FuzzyProduct
      }
    }
    if (id == '4') {
      if (this.term) {
        this.paginationDatas = paginationproduct.filter((el: any) => el.name.toLowerCase().includes(this.term.toLowerCase()) || el.type.toLowerCase().includes(this.term.toLowerCase()))
      } else {
        this.paginationDatas = paginationproduct.slice(0, 3);
      }
    }
  }

}
