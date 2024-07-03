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
export class ReportsService {

  constructor(private http:HttpClient) { }

  
  // getBranchPerformanceData(){
  //   return this.http.get(environment.getBranchPerformanceReportDataUrl);
  // }
  getBranchPerformanceData(){
    return this.http.get(environment.apiurl+"");
  }
  // getRegionPerformanceData(){
  //   return this.http.get(environment.getRegionPerformanceReportDataUrl);
  // }
  getRegionPerformanceData(){
    return this.http.get(environment.apiurl+"");
  }

  // getVacantChitsData(){
  //   return this.http.get(environment.getVacantChitsDataUrl)
  // }
  getVacantChitsData(){
    return this.http.get(environment.apiurl+"")
  }
}
