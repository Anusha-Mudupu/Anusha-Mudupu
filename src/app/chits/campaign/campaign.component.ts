/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserList } from 'src/app/chits-class';
import { FormControl, FormGroup, Validators,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { OrderByPipe } from 'src/app/chits/order-by.pipe'
import { CampaignService } from '../Services/campaign.service';

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [CommonModule,OrderByPipe,ReactiveFormsModule,FormsModule ],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.scss'
})
export class CampaignComponent {
  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
  
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
  searchText: any = '';
  filteredUserList: any;
  filteredItems:any;
  display = "none";
  display1="none";
  display2="none";
  Userlist: any[]=[
    {
    "Name":"C001",
    "Role":"Jan-Campaign",
    "Username":"10/12/2023",
    "Email":"11/1/2023",
    "MobileNo":"Ramesh Varma",
    "ReportsTo":"G.RAGHAV",
    "Branch":"Anantapur2",
    "Status":"Active"
    },
    {
      "Name":"C002",
      "Role":"Feb-Campaign",
      "Username":"8/10/2023",
      "Email":"10/1/2024",
      "MobileNo":"Shanthi Kumar",
      "ReportsTo":"G.RAGHAV",
      "Branch":"Anantapur2",
      "Status":"Active"
      },
      {
        "Name":"C003",
        "Role":"March-Campaign",
        "Username":"10/1/2024",
        "Email":"21/2/2024",
        "MobileNo":"Raghav",
        "ReportsTo":"G.RAGHAV",
        "Branch":"Anantapur2",
        "Status":"Active"
        }
  ]
  // sortKey: string = '';
  // reverse: boolean = false;

  // sort(key: string) {
  //   this.sortKey = key;
  //   this.reverse = !this.reverse;
  //   this.Userlist.sort((a:any, b:any) => {
  //     const x = a[key];
  //     const y = b[key];
  //     return this.reverse ? x.localeCompare(y) : y.localeCompare(x);
  //   });
  // }
  camPainData:any
  constructor(private CampaignService:CampaignService){
    this.filteredUserList = this.Userlist;
  }
  ngOnInit(): void {
  //  this.CampaignService.getCampaignData().subscribe((data:any)=>{
  //   this.camPainData=data;
  //  })
  }
  // search(searchTerm: any) {
  //   this.searchTerm = searchTerm.toLowerCase();
  // }

  // filterItems(searchTerm: any) {
  //   this.filteredItems = this.Userlist.filter((item) =>
  //     item.MobileNo.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }
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
