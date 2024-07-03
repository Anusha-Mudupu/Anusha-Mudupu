/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuitemsService {
  private selectedLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  private AgentselectedLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() { }
  setSelectedLabel(label: string): void {
    this.selectedLabelSubject.next(label);
  }

  getSelectedLabel(): Observable<string> {
    return this.selectedLabelSubject.asObservable();
  }
  AgentsetSelectedLabel(label: string): void {
    this.AgentselectedLabelSubject.next(label);
  }

  AgentgetSelectedLabel(): Observable<string> {
    return this.AgentselectedLabelSubject.asObservable();
  }
  
}
