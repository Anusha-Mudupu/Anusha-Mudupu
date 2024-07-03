/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rolegroupmanagement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rolegroupmanagement.component.html',
  styleUrl: './rolegroupmanagement.component.scss'
})
export class RolegroupmanagementComponent {
  display = "none";
  display1="none";
  ngOnInit(): void {
    
  }
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
}
