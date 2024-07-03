/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { IndividualConfig, ActiveToast } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LeadService {
  APIURL: string='';
  private _search$ = new Subject<void>();
  
  constructor(private http: HttpClient) {this.APIURL = environment.apiurl }
  // saveOrUpdatelead() {
  //   var body = {
  //     ...this.formData,
  //     lead: this.LeadList
  //   };
  //   return this.http.post(environment.apiURL + '/LeadSave', body);
  // }
  // getCountryList() {
  //   let urldata = environment.apiURL;
  //   //return this.http.get(environment.apiURL + '/GetManagersAndExecutives').toPromise();
  //   return this.http.get(urldata).pipe(
  //     mergeMap(json => this.http.get(json[0]['GetManagersAndExecutives'] + '/GetDeals'))).toPromise();
  // }
  getDealList() {
    // let urldata = environment1.apiURL;
    //return this.http.get(environment.apiURL + '/GetDeals').toPromise();
    // return this.http.get(urldata).pipe(
    //   mergeMap((json:any) => this.http.get(json[0]['apiHostUrl'] + '/GetDeals'))).toPromise();
  }
  getemployeetreedata( type:any ,roleid:any) {
    // let urldata = environment1.apiURL;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    let HttpParams = { 'EmployeeId': sessionStorage.getItem('Employeeid') , 'type': type, 'roleid': roleid}
    let options = {
      headers: httpHeaders,
      params: HttpParams
    };

    //return this.http.get(environment.apiURL + '/GetEmployeetreedata', options)
    // return this.http.get(urldata).pipe(
    //   mergeMap((json:any) => this.http.get(json[0]['apiHostUrl'] + '/GetEmployeetreedata')));
    //return this.http.get(environment.apiURL+'/GetEmployeetreedata').toPromise();
  }

  GetEmployeesbasedOnLogin(employeeid:any){

    
    // let urldata = environment1.apiURL;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    let HttpParams = { 'EmployeeId': employeeid}
    let options = {
      headers: httpHeaders,
      params: HttpParams
    };
    // return this.http.get(urldata).pipe(
    //   mergeMap((json:any) => this.http.get(json[0]['apiHostUrl'] + '/GetEmployeesbasedOnLogin', options)));
  }

  // getTitleList() {
  //   let urldata = environment.apiURL;
  //   //return this.http.get(environment.apiURL + '/GetManagersAndExecutives').toPromise();
  //   return this.http.get(urldata).pipe(
  //     mergeMap(json => this.http.get(json[0]['apiHostUrl'] + '/GetManagersAndExecutives')));
  // }

  // getAllLeadsData(){
  //   return this.http.get(environment.getAllLeadsData);
  // }
  getAllLeadsData(){
    return this.http.get(this.APIURL+"api/Lead/vertical/1");
  }

  // createLead(LeadForm:any){
  //   return this.http.post(environment.createLeadUrl,LeadForm);
  // } 
  createLead(LeadForm:any){
    return this.http.post(this.APIURL+"api/Lead",LeadForm);
  }
  productadd(productForm:any){
    debugger
    return this.http.post(this.APIURL+"api/Product/re",productForm);
  }
  getbyidproduct(id:any){
    debugger
    return this.http.get(this.APIURL+"api/Product/re/"+id);
  }
  deleteproduct(id:any){
    debugger
    return this.http.delete(this.APIURL+"api/Product/re/"+id);
  }
  editproduct(id:any ,productdata:any){
    debugger
    return this.http.put(this.APIURL+"api/Product/re/"+id, productdata);
  }
 
  savePermissions(data:any){
    debugger
    return this.http.post(this.APIURL+"api/Roles/permissions",data);
  }
  updateRole(data:any){
    debugger
    return this.http.put(this.APIURL+"api/Roles",data);
  }
  getNavigations(verticalId:any){
    debugger
    return this.http.get(this.APIURL+"api/Roles/navigation/"+verticalId);

  }
  getbyidpermissions(name:any){
  
    return this.http.get(this.APIURL+"api/Roles/permissions/"+name);
  }
  getByIdRoles(name:any){
    debugger
    return this.http.get(this.APIURL+"api/Roles/"+name);
  }
  // getVerticalDropdown(){
  //   return this.http.get(environment.getvertical);  
  // }
  getVerticalDropdown(){
    return this.http.get(this.APIURL+"api/Master/type?type=1");  
  }
  getRoles(){
    // debugger
    return this.http.get(this.APIURL+"api/roles");
  }
  // deleteRole(data:any){
    
  //   return this.http.delete(environment.deleteRole + data);
    
    
  // }
  deleteRole(data:any){
    
    return this.http.delete(this.APIURL+"api/Roles/"+data);
    
    
  }
  savepermissions(data:any){
    debugger
    return this.http.post(this.APIURL+"api/Roles/permissions",data);
  }
  saverole(data:any){

    return this.http.post(this.APIURL+"api/roles",data);
  }
  getproduct(){
    debugger
    return this.http.get(this.APIURL+"api/real-estate/products");
  }
  catergory(){
    debugger
    return this.http.get(this.APIURL+"api/Master/type?type=9");
  }
  subcatergory(){
    debugger
    return this.http.get(this.APIURL+"api/Master/type?type=10");
  }
  getPicklist(){
    return this.http.get(this.APIURL+"api/metadata/lookups");
  }


 
}
 