/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SortColumn, SortDirection } from '../../table/listjs/listjs-sortable.directive';
import { Subject } from 'rxjs';


interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  // startIndex: number;
  // endIndex: number;
  totalRecords: number;
}
@Injectable({
  providedIn: 'root'
})
export class LeadscreenService {
  APIURL: string='';
  private _search$ = new Subject<void>();


  private _state: State = {
    page: 1,
    pageSize: 8,
    searchTerm: '',
    sortColumn: '',
    sortDirection: '',
    // startIndex: 0,
    // endIndex: 9,
    totalRecords: 0
  };


  
  constructor(private http: HttpClient) {this.APIURL = environment.apiurl }
 

  
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }
  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  getAllLeadsData(){
    debugger
    return this.http.get(this.APIURL+"api/Lead");
  }
  getrealestateleaddata(verticalId:any){
    debugger
    return this.http.get(this.APIURL+"api/Lead/vertical/"+verticalId);
  }
  getproduct(){
    debugger
    return this.http.get(this.APIURL+"api/Product/re");
  }
  getroles(){
    debugger
    return this.http.get(this.APIURL+"api/Roles");
  }
  // getverticaldropdown(){
  //   return this.http.get(environment.getvertical);  
  // }
  getverticaldropdown(){
    return this.http.get(this.APIURL+"api/Master/type?type=1");  
  }
  getbyidroles(name:any){
    debugger
    return this.http.get(this.APIURL+"api/Roles/"+name);
  }
  getbyidpermissions(name:any){
    debugger
    return this.http.get(this.APIURL+"api/Roles/permissions/"+name);
  }
  leaddelete(id:any){
    debugger
    return this.http.get(this.APIURL+"api/Lead/"+id);
  }
  getallusers(){
    debugger
    return this.http.get(this.APIURL+"api/Account/user");
  }
  
  getfollowupbyid(leadId:any){
    debugger
    return this.http.get(this.APIURL+"api/Followup/lead/"+leadId);
  }
 
  // createLead(LeadForm:any){
  //   return this.http.post(environment.createLeadUrl,LeadForm);
  // }
  saveLead(LeadForm:any){
    debugger
    return this.http.post(this.APIURL+"api/Lead",LeadForm);
  }
  saverole(data:any){
    debugger
    return this.http.post(this.APIURL+"api/Roles",data);
  }
  savepermissions(data:any){
    debugger
    return this.http.post(this.APIURL+"api/Roles/permissions",data);
  }
 updaterole(data:any){
    debugger
    return this.http.put(this.APIURL+"api/Roles",data);
  }
  getnavigations(verticalId:any){
    debugger
    return this.http.get(this.APIURL+"api/Roles/navigation/"+verticalId);

  }
 deleterole(data:any){
    debugger
    return this.http.delete(this.APIURL+"api/Roles",data);
  }
  assignlead(data:any){
    debugger
    return this.http.post(this.APIURL+"api/Lead/assign",data);
  }
  productadd(data:any){
    debugger
    return this.http.post(this.APIURL+"api/Product/re",data);
  }

  catergory(){
    debugger
    return this.http.get(this.APIURL+"api/Master/type?type=9");
  }
  subcatergory(){
    debugger
    return this.http.get(this.APIURL+"api/Master/type?type=10");
  }
  
  
}
