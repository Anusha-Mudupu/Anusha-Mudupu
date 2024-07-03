/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MastersService } from './masters.service';

@Injectable({
  providedIn: 'root'
})
export class LeadService {



  APIURL: string = '';
  getPicklist() {

    return this.http.get(this.APIURL + "api/metadata/lookups")
  }

  getLeadSource() {
    const chitsbussinessCode = this.masterService.getChitsBusinessCode();
    return this.http.get<any>(`${environment.apiurl}api/${chitsbussinessCode}/masters/lead-source`)

  }
  getRealestateLeadSource() {
    const RealEstateBussinessCode = this.masterService.getRealEstateBusinessCode();
    return this.http.get<any>(`${environment.apiurl}api/${RealEstateBussinessCode}/masters/lead-source`)

  }














  // 

  //  productsData=[
  //   {
  //     "id": 1,
  //     "vertical": 1,
  //     "name": "chit-25000",
  //     "ProductName": 25000,
  //     "tenureInMonths": 8,
  //     "minInstallment": 1200,
  //     "maxInstallment": 20002,
  //     "minBidPayable": 16000,
  //     "maxBidPayable": 78901,
  //     "loginUserId": null
  //   },
  //   {
  //     "id": 2,
  //     "vertical": 1,
  //     "name": "chit-25000",
  //     "ProductName": 25000,
  //     "tenureInMonths": 6,
  //     "minInstallment": 1200,
  //     "maxInstallment": 20002,
  //     "minBidPayable": 16000,
  //     "maxBidPayable": 78901,
  //     "loginUserId": null
  //   },
  //   {
  //     "id": 3,
  //     "vertical": 1,
  //     "name": "chit-25000",
  //     "ProductName": 15000,
  //     "tenureInMonths": 18,
  //     "minInstallment": 1200,
  //     "maxInstallment": 20002,
  //     "minBidPayable": 16000,
  //     "maxBidPayable": 78901,
  //     "loginUserId": null
  //   },
  //   {
  //     "id": 4,
  //     "vertical": 1,
  //     "name": "chit-25000",
  //     "ProductName": 10000,
  //     "tenureInMonths": 2,
  //     "minInstallment": 1200,
  //     "maxInstallment": 20002,
  //     "minBidPayable": 16000,
  //     "maxBidPayable": 78901,
  //     "loginUserId": null
  //   },
  //   {
  //     "id": 5,
  //     "vertical": 1,
  //     "name": "chit-25000",
  //     "ProductName": 550000,
  //     "tenureInMonths": 80,
  //     "minInstallment": 1200,
  //     "maxInstallment": 20002,
  //     "minBidPayable": 16000,
  //     "maxBidPayable": 78901,
  //     "loginUserId": null
  //   },
  // ]
  productsData: any;
  private productsByTypeSubject = new BehaviorSubject<any[]>([]);
  productsByType$ = this.productsByTypeSubject.asObservable();

  private chitValuesBySubject = new BehaviorSubject<any[]>([]);
  chitValuesBySubject$ = this.chitValuesBySubject.asObservable();
  constructor(private http: HttpClient, private masterService: MastersService) { this.APIURL = environment.apiurl }
  // getAllLeadsData(){
  //   return this.http.get(environment.getAllLeadsData);
  // }
  getAllLeadsData() {
    const ChitsbusinessCode = this.masterService.getChitsBusinessCode();
    return this.http.get<any>(`${environment.apiurl}api/agents/${ChitsbusinessCode}/leads`);
  }
  getByLeadsId(id: any) {
    const ChitsbusinessCode = this.masterService.getChitsBusinessCode();
    return this.http.get<any>(`${environment.apiurl}api/agents/${ChitsbusinessCode}/leads/` + id);
  }
  leaddelete(id: any) {

    return this.http.delete(environment.apiurl + "api/Lead/" + id);
  }

  getVerticalDropdown() {
    return this.http.get(this.APIURL + "api/Master/type?type=1");
  }
  //  getEducationData(){
  //   return this.http.get(environment.getEducationDataUrl);
  //  }
  getEducationData() {
    return this.http.get(environment.apiurl + "api/Master/type?type=5");
  }
  //  getGenderData(){
  //   return this.http.get(environment.getGenderDataUrl);
  //  }
  getGenderData() {
    return this.http.get(environment.apiurl + "api/Master/type?type=2");
  }

  //  getProfessionData(){
  //   return this.http.get(environment.getProfessionDataUrl);
  //  } 
  getProfessionData() {
    return this.http.get(environment.apiurl + "api/Master/type?type=6");
  }

  // createLead(LeadForm:any){
  //   return this.http.post(environment.createLeadUrl,LeadForm);
  // }
  createLead(LeadForm: any) {
    return this.http.post(environment.apiurl + "api/Lead", LeadForm);
  }
  // savefollowup(LeadForm:any){
  //   return this.http.post(environment.createfollowupUrl,LeadForm);
  // }
  savefollowup(LeadForm: any) {
    return this.http.post(environment.apiurl + "api/Followup", LeadForm);
  }
  // getLeadDataById(id:any){
  //   return this.http.get(environment.getLedaDataByIdUrl + id);
  // }

  getLeadDataById(id: any) {
    return this.http.get(environment.apiurl + "api/Lead/" + id);
  }
  // updateLeadData(id:any ,leadData:any){
  //   return this.http.put(environment.updateLeadByidUrl +id, leadData)
  // }
  updateLeadData(id: any, leadData: any) {
    return this.http.put(environment.apiurl + "api/Lead/" + id, leadData)
  }
  // getStatusData(){
  //   return this.http.get(environment.statusListUrl);
  // }

  getStatusData() {
    return this.http.get(environment.apiurl + "api/Master/type?type=17");
  }
  getfollowupbyid(leadId: any) {
    debugger
    return this.http.get(this.APIURL + "api/Followup/lead/" + leadId);
  }
  getallusers() {
    debugger
    return this.http.get(this.APIURL + "api/Account/user");
  }
  getproduct() {
    debugger
    return this.http.get(this.APIURL + "api/Product/re");
  }
  getrealestateleaddata(verticalId: any) {

    return this.http.get(this.APIURL + "api/Lead/vertical/" + verticalId);
  }
  getContactData() {
    return this.http.get(this.APIURL + "api/Lead");
  }

  getAdminLeadData() {
    return this.http.get(this.APIURL + "api/Lead");
  }

  leadTransfer(body: any) {
    return this.http.post(this.APIURL + "api/Lead/transfer", body);
  }
  getfollowup() {
    return this.http.get(this.APIURL + "api/Followup/user");
  }
  // getUniqueProductTypes(): string[] {
  //   const uniqueProductTypes = new Set<string>();
  //   this.productTypes.forEach(product => uniqueProductTypes.add(product.name));
  //   return Array.from(uniqueProductTypes);
  // }

  // getProductsByType(productType: string): any[] {
  //   return this.productTypes.filter(product => product.name === productType);
  // }
  // getFacingByType(facing:string):any[]{
  //   return this.productTypes.filter(product =>product.facing === facing)
  // }
  getUniqueFacings(products: any[]): string[] {
    const uniqueFacings = new Set<string>();
    products.forEach(product => uniqueFacings.add(product.facing));
    return Array.from(uniqueFacings);
  }

  // updateProductsByType(productType: string) {
  //   const products = this.getProductsByType(productType);
  //   this.productsByTypeSubject.next(products);
  // }
  getProductsData(): any {
    return this.http.get<any>(environment.apiurl + 'api/products/chits');
  }

  getUniqueChitValues(): any {
    return this.getProductsData().pipe(
      map((products: any) => {
        const uniqueChitValues = new Set<any>();
        products.data.forEach((product: any) => uniqueChitValues.add(product.chitValue));
        return Array.from(uniqueChitValues);
      })
    );
  }


  // getUniqueChitValues(): any[] {
  //   const uniqueChitValues = new Set<any>();
  //   this.productsData.forEach((product:any) => uniqueChitValues.add(product.chitValue));
  //   return Array.from(uniqueChitValues);
  // }

  getduration(chitValue: number): any {
    return this.getProductsData().pipe(
      map((products: any) => products.data.filter((product: any) => product.chitValue === chitValue))
    );
  }

  updateMonths(months: any) {
    const tenureMonths = this.getduration(months);
    this.chitValuesBySubject.next(tenureMonths);
  }

  getLeadSatus() {
    return this.http.get(environment.leadStatus);

  }
  getApartment() {
    const categoryId = this.masterService.getApartMentCategoryId();
    return this.http.get<any>(`${environment.apiurl}api/${categoryId}/notifications`);
  }
  getCommercialUnits() {
    const categoryId = this.masterService.getCommericialCategoryId()
    // return this.http.get<any>(`${environment.apiurl}api/${categoryId}/notifications`);
  }
  
}

