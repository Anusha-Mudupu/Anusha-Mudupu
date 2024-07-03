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
export class RolesService {

  constructor(private http:HttpClient) { }
  // getManageRoleData(){
  //   return this.http.get(environment.getManageRoleDataUrl)
  // }
  getManageRoleData(){
    return this.http.get(environment.apiurl+"");
  }
}
