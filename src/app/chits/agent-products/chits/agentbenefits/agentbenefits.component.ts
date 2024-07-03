/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentbenefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agentbenefits.component.html',
  styleUrl: './agentbenefits.component.scss'
})
export class AgentbenefitsComponent {
  display = "none";
  DeleteMOdel='none';
  EditMOdel='none';
  agentBenifits:any[]=[
    {
      "Name":"Channel partner Benfits",
      "Description":"Endless possibilities for Channel P...",
      "File":"benefits.pdf"

    },
   
  ]
  sortColumn: string = 'Name'; // Default sort column
  sortOrder: string = 'asc'; 
  sortedAgentBenifitsList: any[] = [];
  role:any;
  verticalId:any;
  showAddButton:boolean=true;
  showActions:boolean=true;
  ngOnInit(): void {
    this.sortedAgentBenifitsList = this.agentBenifits.slice(); 
      console.log("this.sortedUserList",this.sortedAgentBenifitsList);
      this.role = localStorage.getItem('Rolename');
    console.log("this.role for chits", this.role)
    this.verticalId = localStorage.getItem('vericalid');
    console.log("this.role for chits", this.verticalId);
    if(this.role == "Agent"){
      this.showAddButton=false;
      this.showActions= false
    }
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  openDeleteModel(){
    this.DeleteMOdel = "block";
  }
  onClosed() {
    this.DeleteMOdel = "none";
  }

  onEditClose(){
    this.EditMOdel='none';
   }
   onEditModelOpen(){
  this.EditMOdel='block'
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
     this.sortedAgentBenifitsList.sort((a, b) => {
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
}
