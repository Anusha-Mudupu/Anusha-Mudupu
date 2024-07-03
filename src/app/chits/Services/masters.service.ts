/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'src/app/chits-class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MastersService {

  constructor(private http: HttpClient) { }
  ChitsbusinessCode = 'chits';
  RealEstatebusinessCode = "real-estate";
  apartMentCategoryId = 5;
  commericailcategoryId = 3;
  commericialSpaceCategoryId=7;
  setChitsBusinessCode(code: any): void {
    this.ChitsbusinessCode = code;
  }

  getChitsBusinessCode(): any {
    return this.ChitsbusinessCode;
  }

  setRealEstateBusinessCode(code: any): void {
    this.RealEstatebusinessCode = code;
  }

  getRealEstateBusinessCode(): any {
    return this.RealEstatebusinessCode;
  }

  getApartMentCategoryId() {
    return this.apartMentCategoryId
  }
  getCommericialCategoryId() {
    return this.commericailcategoryId
  }
  getAgentProductsData() {
    return this.http.get(environment.apiurl + "api/chits/products");
  }
  getRealEstateproducts() {
    debugger
    return this.http.get(environment.apiurl + "api/real-estate/products");
  }
  getAllProdutcsData() {
    return this.http.get(environment.apiurl + "");

  }
  getProductConfigData() {
    return this.http.get(environment.apiurl + "");
  }
  getRequestCategoryData() {
    return this.http.get(environment.apiurl + "");
  }
  getSourceDataUrl() {
    return this.http.get(environment.apiurl + "api/Master/type?type=8");
  }
  getstatus() {
    return this.http.get(environment.apiurl + "api/Master/type?type=17");
  }
  getFollowUpThrough() {
    return this.http.get(environment.apiurl + "api/Master/type?type=18");
  }
  getSourcesubcategoryDataUrl() {
    return this.http.get(environment.apiurl + "api/Master/type?type=16");
  }
  getBranchListData() {
    return this.http.get<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/branches`);
  }
  createBranch(branch: Branch) {
    return this.http.post<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/branches`, branch);
  }
  getBranchById(id: Branch) {
    return this.http.get<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/branches/` + id);
  }
  updateBranchById(id: any, branch: any) {
    return this.http.put<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/branches/` + id, branch);
  }
  deleteBranchById(id: any) {
    return this.http.delete<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/branches/` + id);
  }
  getrealEstateBranchListData() {
    return this.http.get<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/branches`);
  }
  createRealestateBranch(branch: Branch) {
    return this.http.post<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/branches`, branch);
  }
  getRealestateBranchById(id: Branch) {
    return this.http.get<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/branches/` + id);
  }
  updateRealestaeBranchById(id: any, branch: any) {
    return this.http.put<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/branches/` + id, branch);
  }
  deleteRealestateBranchById(id: any) {
    return this.http.delete<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/branches/` + id);
  }


  getZoneListData() {
    // return this.http.get(environment.apiurl + "api/masters/zones");
    return this.http.get<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/zones`);
  }


  deleteZoneListData(id: number) {
    // return this.http.delete(environment.apiurl + "api/masters/zones/" + id);
    return this.http.delete<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/zones/` + id);
  }

  editZoneListData(id: number, body: any) {
    // return this.http.put(environment.apiurl + "api/masters/zones/" + id, zone);
    return this.http.put<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/zones/` + id, body);
  }

  getZoneById(id: number) {
    // return this.http.get(environment.apiurl + "api/masters/zones/" + id);
    return this.http.get<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/zones/` + id);
  }

  createZoneListData(body: any) {
    // return this.http.post(environment.apiurl + "api/masters/zones", zone);
    return this.http.post<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/zones`, body);
  }
  getrealZoneListData() {
    return this.http.get<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/zones`);
  }
  createRealEsateZoneListData(body: any) {

    return this.http.post<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/zones`, body);
  }
  deleteRealestaeZoneListData(id: number) {
    // return this.http.delete(environment.apiurl + "api/masters/zones/" + id);
    return this.http.delete<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/zones/` + id);
  }

  editRealestateZoneListData(id: number, body: any) {
    // return this.http.put(environment.apiurl + "api/masters/zones/" + id, zone);
    return this.http.put<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/zones/` + id, body);
  }

  getRealestateZoneById(id: number) {
    // return this.http.get(environment.apiurl + "api/masters/zones/" + id);
    return this.http.get<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/zones/` + id);
  }

  getDesignationListData() {
    return this.http.get<any>(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/designations`);
  }
  createDesignationList(body: any) {
    return this.http.post(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/designations`, body);
  }

  getDesignationById(id: number) {
    return this.http.get(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/designations/` + id)
  }

  editDesignationData(id: number, body: any) {
    return this.http.put(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/designations/` + id, body)
  }

  deleteDesignationData(id: number) {
    return this.http.delete(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/designations/` + id);
  }
  getRealEstateDesignationListData() {
    return this.http.get<any>(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/designations`);
  }
  createRealEstateDesignationList(body: any) {
    return this.http.post(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/designations`, body);
  }

  getRealEstateDesignationById(id: number) {
    return this.http.get(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/designations/` + id)
  }

  editRealestaeDesignationData(id: number, body: any) {
    return this.http.put(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/designations/` + id, body)
  }

  deleterealestaeDesignationData(id: number) {
    return this.http.delete(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/designations/` + id);
  }
  //Chits
  getRegionListData() {
    // return this.http.get(environment.apiurl + "api/masters/regions");

    return this.http.get(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/regions`);
  }

  createRegion(body: any) {
    return this.http.post(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/regions`, body);

  }
  getRegionDataById(id: any) {
    return this.http.get(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/regions/` + id);
  }
  updateRegionData(id: any, body: any) {
    return this.http.put(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/regions/` + id, body);
  }

  deleteRegion(id: any) {
    return this.http.delete(`${environment.apiurl}api/${this.ChitsbusinessCode}/masters/regions/` + id);
  }
  //Real Estate
  getRealestateRegionListData() {
    return this.http.get(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/regions`);
  }

  createRealestateRegion(body: any) {
    return this.http.post(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/regions`, body);

  }
  getRealestateRegionDataById(id: any) {
    return this.http.get(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/regions/` + id);
  }
  updaterealestateRegionData(id: any, body: any) {
    return this.http.put(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/regions/` + id, body);
  }

  deleterealestateRegion(id: any) {
    return this.http.delete(`${environment.apiurl}api/${this.RealEstatebusinessCode}/masters/regions/` + id);
  }


  getAgentBenefitsData() {
    return this.http.get(environment.apiurl + "");
  }

  getBusinessVerticalData() {
    return this.http.get(environment.apiurl + "api/Master/type?type=1");
  }
  createProduct(body: any) {
    return this.http.post(environment.apiurl + "api/chits/products", body);
  }

  getProductById(id: any) {
    return this.http.get(environment.apiurl + "api/chits/products/" + id);
  }
  updateProduct(id: any, body: any) {
    return this.http.put(environment.apiurl + "api/chits/products/" + id, body);
  }

  deleteProduct(id: any) {
    return this.http.delete(environment.apiurl + "api/chits/products/" + id);
  }


  getCategoryData() {
    return this.http.get(environment.apiurl + "api/Master/type?type=9");
  }
}
