/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersService } from 'src/app/chits/Services/masters.service';

import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { LeadService } from 'src/app/chits/Services/lead.service';
@Component({
  selector: 'app-admin-source',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-source.component.html',
  styleUrl: './admin-source.component.scss'
})
export class AdminSourceComponent implements OnInit {
  public display = "none";
  public display1 = "none";
  public display2 = "none";
  public display3 = "none";
  public display4 = "none";
  verticalData: any;
  selectedIndex: number | null = null;

  selectedBusiness: string | null = null;
  sourceData: any;

  constructor(private toastService: ToastrService, private masterService: MastersService, private leadService: LeadService) {
    this.masterService.getBusinessVerticalData().subscribe((data: any) => {
      this.verticalData = data;
      console.log(" this.verticalData", this.verticalData)
    })
  }
  sourceItems: any[] = [
    {
      name: 'Source Item 1',
      subItems: [
        { name: 'Sub Source Item 1' },
        { name: 'Sub Source Item 2' },
        { name: 'Sub Source Item 3' }
      ]
    },
    {
      name: 'Source Item 2',
      subItems: [
        { name: 'Sub Source Item 3' },
        { name: 'Sub Source Item 4' },
        { name: 'Sub Source Item 5' }
      ]
    },
    {
      name: 'Source Item 3',
      subItems: [
        { name: 'Sub Source Item 5' },
        { name: 'Sub Source Item 6' },
        { name: 'Sub Source Item 7' }
      ]
    }
  ];
  // data = [
  //   {
  //     sno: 1,
  //     Business: "Chits",
  //     Source: "Source-1",
  //     Name: "source item-1",
  //     Sequence: "sdvgbh",
  //     subData: [
  //       { subSource: "Sub source chits item-1", subSequence: "chits sdvgbh" },
  //       { subSource: "Sub source chits item-2", subSequence: "chits sdvgbh" }
  //     ]
  //   },
  //   {
  //     sno: 2,
  //     Business: "Real estate",
  //     Source: "Source-2",
  //     Name: "source item-2",
  //     Sequence: "sdvgbh",
  //     subData: [
  //       { subSource: "Sub Real estate source item-1", subSequence: "Real estate sdvgbh" },
  //       { subSource: "Sub Real estate source item-2", subSequence: "Real estate sdvgbh" }
  //     ]
  //   }
  // ];



  selectedSourceItem: any = this.sourceItems[0]; // Set source item 1 as default selected item
  ngOnInit(): void {

    this.leadService.getLeadSource().subscribe((data: any) => {
      this.sourceData = data.data;
    })



    this.highlightSelectedSourceItem();
  }
  toggleSubItems(sourceItem: any) {
    this.selectedSourceItem = sourceItem;
    this.highlightSelectedSourceItem();
  }
  highlightSelectedSourceItem() {
    const items = document.querySelectorAll('.source-item');
    items.forEach(item => {
      item.classList.remove('highlighted');
    });
    const selectedItem = document.getElementById(this.selectedSourceItem.name);
    if (selectedItem) {
      selectedItem.classList.add('highlighted');
    }
  }



  selectItem(index: number): void {
    if (this.selectedIndex === index) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = index;
    }
  }
  toggleBusiness(business: string) {
    this.selectedBusiness = this.selectedBusiness === business ? business : business;
  }
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
  onCloseHandled1() {
    this.display1 = "none";
  }
  openEditPicklist() {
    this.display1 = "block";

  }
  onClosed() {
    this.display2 = "none";
  }
  onPickListValues() {
    this.display3 = "none";
  }
  onCreatePickListValues() {
    this.display3 = "block";
  }
  oncloseUpdatePickListValues() {
    this.display4 = "none";
  }
  onUpadtePicklistValues() {
    this.display4 = "block";

  }
  deleteForm() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {

        Swal.fire({
          title: 'Deleted!',
          text: 'Email Data has been deleted.',
          icon: 'success',
          confirmButtonColor: 'rgb(3, 142, 220)',
        });

      }
    }, error => {
      this.toastService.error('Something went wrong while deleting the email.');
    });
  }



  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }


}
