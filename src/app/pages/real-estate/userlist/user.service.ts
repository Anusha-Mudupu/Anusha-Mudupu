/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User, UserList } from 'src/app/chits-class';
import { MastersService } from 'src/app/chits/Services/masters.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private masterService:MastersService) { }
  // getUserList() {
  //   return this.http.get(environment.getUserListDataUrl);
  // }
  getUserList() {
    // return this.http.get<any>(environment.apiurl+"api/accounts/users");
    return this.http.get<any>(environment.apiurl+"api/accounts/user");
  }
  getAdministrator(){

  }
  getManager(){
  return this.http.get<any>(environment.apiurl+"api/employees/managers")
  }
  getEmployeeList(){
    const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
    return this.http.get<any>(`${environment.apiurl}api/employees/${RealestatebusinessCode}`);
  }
  // createUser(UserList:any): Observable<any> {
  //   return this.http.post<any>(environment.postUser, UserList);
  // }
  // createUser(User: any): Observable<any> {

  //   return this.http.post<any>(environment.postUserUrl, User);
  // }
  createUser(User: any): Observable<any> {

    return this.http.post<any>(environment.apiurl+"api/auth/register",User);
  }
  // UpdateUser(id: number, user: any): Observable<any> {

  //   return this.http.put<any>(environment.UpdateUserUrl + id, user)
  // } 
  UpdateUser(id: number, user: any): Observable<any> {

    return this.http.put<any>(environment.apiurl+"api/Account/"+id, user)
  }
 
  updateAgent(id: number, body: any) {
    return this.http.put<any>(`${environment.apiurl}api/agents/id?id=${id}`, body);
  }
  // getByUserId(id: number) {
  //   return this.http.get<any>(environment.getByUserId + id)
  // } 
  getByUserId(id: any) {
    return this.http.get<any>(environment.apiurl+"api/accounts/user/"+id)
  }
  // userDelete(id: number) {
  //   return this.http.delete<any>(environment.deleteUser + id)
  // }
  userDelete(id: number) {
    return this.http.delete<any>(environment.apiurl+"api/accounts/"+ id)
  }
  // getMaster1() {
  //   return this.http.get<any>(environment.getMaster1)
  // }
  getMaster1() {
    return this.http.get<any>(environment.apiurl+"api/Master/type?type=1")
  }
  // getChitsRoles() {
  //   return this.http.get<any>(environment.getRoleChits)
  // } 
  getChitsRoles() {
    return this.http.get<any>(environment.apiurl+"api/Roles/vertical/1")
  }
  // getRealEstate() {
  //   return this.http.get<any>(environment.getRealEstateChits)
  // }
  getRealEstate() {
    return this.http.get<any>(environment.apiurl+"api/Roles/vertical/2")
  }
  // postUserRole(id: number, data: any) {
  //   return this.http.post<any>(environment.postUserRole + id, data)
  // } 
  postUserRole(id: number, data: any) {
    return this.http.post<any>(environment.apiurl+"api/Roles/user/"+ id, data)
  }
  // getByPermission(id: number) {
  //   return this.http.get<any>(environment.getbyPermission + id)
  // }
  getByPermission(id: number) {
    return this.http.get<any>(environment.apiurl+"api/Roles/user/"+ id)
  }

  // resetPassword(body: any) {
  //   return this.http.post<any>(environment.resetPasswordUrl, body);
  // }
  resetPassword(body: any) {
    return this.http.post<any>(environment.apiurl+"api/auth/reset-password",body);
  }

  // changePassword(body: any) {
  //   return this.http.post<any>(environment.changePasswordUrl, body)
  // }
  changePassword(body: any) {
    return this.http.post<any>(environment.apiurl+"api/Auth/change-password",body)
  }
  // statusActive(id: any, user: any) {
  //   return this.http.post<any>(environment.satusactive + id, user)
  // }
  statusActive(id: any, user: any) {
    return this.http.post<any>(environment.apiurl+"api/accounts/activate/"+id, user)
  }
  // statusInactive(id: any, user: any) {
  //   return this.http.post<any>(environment.statusDeactive + id, user)
  // }
  statusInactive(id: any, user: any) {
    return this.http.post<any>(environment.apiurl+"api/accounts/deactivate/"+ id, user)
  }
  // getRoleAll() {
  //   return this.http.get<any>(environment.allroles)
  // }
  getRoleAll() {
    return this.http.get<any>(environment.apiurl+"api/Roles/vertical/0")
  }
  getAgentList(){
  return this.http.get<any>(environment.apiurl+"api/agents")
  }
  postAgentList(body:any){
    return this.http.post<any>(environment.apiurl+"api/agents",body)
  }
  getByAgentId(id: any): Observable<any> {
    const url = `${environment.apiurl}api/agents/id?id=${id}`;
    return this.http.get<any>(url);
  }
}
