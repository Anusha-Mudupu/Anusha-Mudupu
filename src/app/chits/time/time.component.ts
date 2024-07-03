/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time.component.html',
  styleUrl: './time.component.scss'
})
export class TimeComponent {
  timelineItems = [
    { title: 'Title 1', description: 'Description 1' },
    { title: 'Title 2', description: 'Description 2' },
    { title: 'Title 3', description: 'Description 3' }
  ];
}
