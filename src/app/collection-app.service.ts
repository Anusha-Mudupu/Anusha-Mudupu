/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { environment1 } from 'src/environments/environment';
import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CollectionAppService {

  constructor(private _http: HttpClient) { }

  public PostLeadEntrySave(data:any): any {
    // let urldata = environment1.apiURL;

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    // return this._http.get(urldata).pipe(
    //   mergeMap((json:any) => this._http.post(json[0]['apiHostUrl'] + '/PostLeadEntrySave', data, options)));
  }

  public GetPostsaleLeads(){
    // let urldata = environment1.apiURL;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    // let HttpParams = { 'EmployeeId':sessionStorage.getItem('Employeeid') }
    // let options = {
    //   headers: httpHeaders,
    //   params: HttpParams
    // };
    // return this._http.get(urldata).pipe(
    //   mergeMap((json:any) => this._http.get(json[0]['apiHostUrl'] + '/GetPostsaleLeads')));
    // }

    // public GetPostsalerunningLeads(){
    //   let urldata = environment1.apiURL;
   
    // return this._http.get(urldata).pipe(
    //   mergeMap((json:any) => this._http.get(json[0]['apiHostUrl'] + '/GetPostsalerunningLeads')));
    // }

    // public PostsaleassignleadsSave(data:any): any {
    //   let urldata = environment1.apiURL;
  
    //   let httpHeaders = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Cache-Control': 'no-cache'
    //   });
    //   let options = {
    //     headers: httpHeaders
    //   };
    //   return this._http.get(urldata).pipe(
    //     mergeMap((json:any) => this._http.post(json[0]['apiHostUrl'] + '/Postsaleassignleads', data, options)));
   }
}