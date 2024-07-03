/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common'; 
import { NgxPrintElementModule } from 'ngx-print-element';
@Component({
  selector: 'app-registrationbtw-dates',
  standalone: true,
  imports: [NgxPaginationModule, PaginationModule,CommonModule,NgxPrintElementModule],
  templateUrl: './registrationbtw-dates.component.html',
  styleUrl: './registrationbtw-dates.component.scss'
})
export class RegistrationbtwDatesComponent {
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }





  leadsData: any;
  leadsConsolidate: any;
  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    debugger
    const startItem = (page - 1) * 8;
    const endItem = page * 15;
    this.leadsData = this.leadsConsolidate.slice(startItem, endItem);
  }
}
