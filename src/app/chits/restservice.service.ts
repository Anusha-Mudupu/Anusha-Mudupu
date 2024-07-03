/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from '../chits-class';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  User: UserList[]=[
    {
    "Name":"C001",
    "Role":"Jan-Campaign",
    "Username":"10/12/2023",
    "Email":"11/1/2023",
    "MobileNo":"Ramesh Varma",
    "ReportsTo":"G.RAGHAV",
    "Branch":"Anantapur2",
    "Status":"Active"
    },
    {
      "Name":"C002",
      "Role":"Feb-Campaign",
      "Username":"8/10/2023",
      "Email":"10/1/2024",
      "MobileNo":"Shanthi Kumar",
      "ReportsTo":"G.RAGHAV",
      "Branch":"Anantapur2",
      "Status":"Active"
      },
      {
        "Name":"C003",
        "Role":"March-Campaign",
        "Username":"10/1/2024",
        "Email":"21/2/2024",
        "MobileNo":"Raghav",
        "ReportsTo":"G.RAGHAV",
        "Branch":"Anantapur2",
        "Status":"Active"
        }
  ]
  constructor(private http:HttpClient) { }
  getUser(): Observable<UserList[]> {
    // You can return the userList directly since it's already an array
    return new Observable(observer => {
      observer.next(this.User);
      observer.complete();
    });
  }
}
