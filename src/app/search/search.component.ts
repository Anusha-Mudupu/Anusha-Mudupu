/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,RouterOutlet, FormsModule, ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
 
}
