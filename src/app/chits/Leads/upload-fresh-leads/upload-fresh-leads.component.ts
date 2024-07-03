/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-fresh-leads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-fresh-leads.component.html',
  styleUrl: './upload-fresh-leads.component.scss'
})
export class UploadFreshLeadsComponent implements OnInit{
  role:any;
  verticalId:any;
  ngOnInit(): void {
    this.role = localStorage.getItem('Rolename');
    console.log("this.role for chits", this.role)
    this.verticalId = localStorage.getItem('vericalid');
    console.log("this.role for chits", this.verticalId);
  
  }

}
