/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { object } from '@amcharts/amcharts5';
import { BookingsMPR, Quarter, calender } from 'src/app/chits-class';
import { NgxPrintElementModule } from 'ngx-print-element';
@Component({
  selector: 'app-bookings-mpr',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, PaginationModule,NgxPrintElementModule],
  templateUrl: './bookings-mpr.component.html',
  styleUrl: './bookings-mpr.component.scss'
})
export class BookingsMPRComponent {
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  businessData: BookingsMPR[] = [];
  manager: any = [
    {
      "Manager": 'Total',
      "TOTAL": '0',
      "Mar2024": '0',
      "Feb2024": '0',
      "Jan2024": '0',
      "Dec2023": '0',
      "Nov2023": '0',

      "Oct2023": '0',
      "Sep2023": '0',
      "Aug2023": '0',
      "July2023": '0',
      "Jun2023": '0',
      "May2023": '0',
      "Apr2024": '0',
      "Mar2023": '0',
      "UptoFeb2023": '25,000',
    },

  ]
  calender: any = [
    {
      "Year": 2015,
      "Units": 16,
      "Sft": 1920,
      "Amount": "52,55,200",

    },
    {
      "Year": 2016,
      "Units": 74,
      "Sft": 8880,
      "Amount": "2,12,21,091",

    },
    {
      "Year": 2017,
      "Units": 651,
      "Sft": 78120,
      "Amount": "17,39,01,628",

    },
  ]
  Quarter: any = [
    {
      "": "Sft",
      "Q1": 0,
      "Q2": 0,
      "Q3": 0,
      "Q4": 0,
      "Total": 0,

    },
    {
      "": "Units",
      "Q1": 0,
      "Q2": 0,
      "Q3": 0,
      "Q4": 0,
      "Total": 0,

    },

  ]
  registration: any = [
    {
      "": "Sft",
      "Jan-2024": 0,
      "Feb-2024": 0,
      "March-2024": 0,
      "Q1-Total": 0,
      "Apr-2024": 0,
      "May-2024": 0,
      "June-2024": 0,
      "Q2-Total": 0,
      "July-2024": 0,
      "Aug-2024": 0,
      "Sep-2024": 0,
      "Q3-Total": 0,
      "Oct-2024": 0,
      "Nov-2024": 0,
      "Dec-2024": 0,
      "Q4-Total": 0


    },
    {
      "": "Units",
      "Jan-2024": 0,
      "Feb-2024": 0,
      "March-2024": 0,
      "Q1-Total": 0,
      "Apr-2024": 0,
      "May-2024": 0,
      "June-2024": 0,
      "Q2-Total": 0,
      "July-2024": 0,
      "Aug-2024": 0,
      "Sep-2024": 0,
      "Q3-Total": 0,
      "Oct-2024": 0,
      "Nov-2024": 0,
      "Dec-2024": 0,
      "Q4-Total": 0

    },
  ]
  directBusinessKeys: string[];
  bookingCalenderKeys: string[];
  QuarterKeys: string[] = [];
  registrationKeys: string[] = [];


  constructor() {
    this.directBusinessKeys = Object.keys(this.manager[0]);
    this.bookingCalenderKeys = object.keys(this.calender[0]);
    this.QuarterKeys = object.keys(this.Quarter[0]);
    this.registrationKeys = object.keys(this.registration[0])
  }

  tablepageChanged(event: PageChangedEvent): void {
    this.updatePageData(event.page);
  }

  updatePageData(page: number): void {
    debugger
    const startItem = (page - 1) * 8;
    const endItem = page * 15;
    this.businessData = this.manager.slice(startItem, endItem);
  }
}
