/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from '../chits/order-by.pipe';
@Component({
  selector: 'app-texttable',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule,OrderByPipe],
  templateUrl: './texttable.component.html',
  styleUrl: './texttable.component.scss'
})
export class TexttableComponent {
  searchTerm: string = '';
  filteredItems: Array<{
    name: string;
    flag: string;
    area: number;
    population: number;
  }> = [];

  countries: Array<{
    name: string;
    flag: string;
    area: number;
    population: number;
  }> = []; // Declare countries array

  ngOnInit(): void {
    // Initialize countries array
    this.countries = [
      {
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754,
      },
      {
        name: 'France',
        flag: 'c/c3/Flag_of_France.svg',
        area: 640679,
        population: 64979548,
      },
      {
        name: 'Germany',
        flag: 'b/ba/Flag_of_Germany.svg',
        area: 357114,
        population: 82114224,
      },
      {
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199,
      },
      {
        name: 'Vietnam',
        flag: '2/21/Flag_of_Vietnam.svg',
        area: 331212,
        population: 95540800,
      },
      {
        name: 'Mexico',
        flag: 'f/fc/Flag_of_Mexico.svg',
        area: 1964375,
        population: 129163276,
      },
      {
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463,
      },
      {
        name: 'India',
        flag: '4/41/Flag_of_India.svg',
        area: 3287263,
        population: 1324171354,
      },
    ];
  }

  search(searchTerm: string) {
    this.searchTerm = searchTerm.toLowerCase();
  }

  filterItems(searchTerm: string) {
    this.filteredItems = this.countries.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
