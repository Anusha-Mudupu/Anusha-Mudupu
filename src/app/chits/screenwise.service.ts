/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScreenwiseService {
  
    screens= [
      {
        "screenName": "Role",
        "actions": ["Dashboard Cards", "Edit", "Delete"]
      },
      {
        "screenName": "UserList",
        "actions": ["Edit","View","Reset Password","Active","Inactive","Delete"]
      },
      {
        "screenName": "Campaigns",
        "actions": ["Edit"]
      },
      {
        "screenName": "AddCampaigns",
        "actions": ["Edit","View","Reset Password","Active","Inactive","Delete"]
      },
     
    ]
  
  
  constructor(private httpClient:HttpClient ) { }
  getScreens(): Observable<any[]> {
    // You can return screens as an Observable
    return new Observable<any[]>(observer => {
      observer.next(this.screens);
      observer.complete();
    });
  }
}
