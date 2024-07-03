/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentProductsComponent } from '../agent-products.component';
import { RouterModule, Routes } from '@angular/router';
import { VacantlistComponent } from '../../vacantlist/vacantlist.component';
import { ChitsDashboardComponent } from '../../chits-dashboard/chits-dashboard.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
@Component({
  selector: 'app-chits',
  standalone: true,
  imports: [CommonModule,AgentProductsComponent,RouterModule,VacantlistComponent,ChitsDashboardComponent,AccordionModule,CollapseModule],
  templateUrl: './chits.component.html',
  styleUrl: './chits.component.scss'
})
export class ChitsComponent implements OnInit{
  isCollapsed = false;
  horizontalCollapsed = false;
  arrowCollapsed = false;
  filterCollapsed = false;
  blockCollapsed = false;
  inlineCollapsed = false;
  multiCollapseExample1 = false;
  multiCollapseExample2 = false;

  breadCrumbItems!: Array<{}>;
  isFirstOpen = false
  keys: string[] = [];
  sourceKeys:any[]=[];
  leadsData: any;
  verticalId:any;
  role:any;
  leadsConsolidate: any = [

    {
      "Manager Name":"Total",
      "Total": "0",
      "Conversion Rate%": "NaN",
      "UC Booked": 0,
      "Booked": 0,
      "Hot": 0,
      "Warm": 0,
      "Cold": 0,
      "Lost": 0,
      "No status": 0,
    }
  ];
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
constructor(){
  this.keys = Object.keys(this.leadsConsolidate[0]);
  console.log('headings',this.keys);

  
}

  ngOnInit(): void {
    this.role = localStorage.getItem('Rolename');
    console.log("this.role for chits", this.role)
    this.verticalId = localStorage.getItem('vericalid');
  }
 
}
