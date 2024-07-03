/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  // getUserListData(){
  //   return this.http.get(environment.getUserListDataUrl);
  // }
  getUserListData(){
    return this.http.get(environment.apiurl+"api/Account/user");
  }
  // getAgentListData(){
  //   return this.http.get(environment.getAgentListDataUrl);
  // }
  getAgentListData(){
    return this.http.get(environment.apiurl+"");
  }
}
