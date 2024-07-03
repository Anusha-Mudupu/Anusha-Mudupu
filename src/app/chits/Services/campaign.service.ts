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
export class CampaignService {
  campaignsData = [
    {
      "name": "Campaign1",
      "fromDt": "01-01-2024",
      "todt": "30-06-2024"
    },
    {
      "name": "Campaign2",
      "fromDt": "01-07-2024",
      "todt": "01-01-2025"
    },
    {
      "name": "Campaign3",
      "fromDt": "01-06-2025",
      "todt": "30-06-2026"
    }
  ]
  constructor(private http: HttpClient) { }

  // getCampaignData(){
  //   return this.http.get(environment.getCampaignDataUrl);
  // }

  getCampaignData() {
    return this.http.get(environment.apiurl + "api/corporate-campaigns");

  }
  createCampignData(body: any) {
    return this.http.post(environment.apiurl + "api/corporate-campaigns", body)
  }
  getCampaignDataById(id: any) {
    return this.http.get(environment.apiurl + "api/corporate-campaigns/" + id);
  }
  updateCampaignData(id: any, body: any) {
    return this.http.put(environment.apiurl + "api/corporate-campaigns/" + id, body);
  }
  deleteCamapaignData(id: any) {
    return this.http.delete(environment.apiurl + "api/corporate-campaigns/" + id);
  }
  deleteCampaignMedia(id: any) {

  }
  createCampaignMedia(campaignId: any, body: any) {
    return this.http.post<any>(`${environment.apiurl}api/corporate-campaigns/${campaignId}/media-files`, body);
    // return this.http.post<any>(environment.apiurl+"api/corporate-campaigns/${campaignId}/media-files",body)
  }
  getStaticCampaignData() {
    return this.campaignsData
  }


  // getAgentCampaignsData(){
  //   return this.http.get<any>(environment.apiurl+"api/agents/agentcode/campaigns");
  // }

  // getBycampaigns(id:any){
  //   return this.http.get<any>(environment.apiurl+"api/agents/agentcode/campaigns/" + id);
  // }
  getAgentCampaignsData(agentCode: number) {
    return this.http.get<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns`);
  }

  getByCampaigns(agentCode: number, campaignId: any) {
    return this.http.get<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/${campaignId}`);
  }

  createMycampaigns(agentCode: any, body: any) {
    return this.http.post<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns`, body);
  }
  updateMycampaigns(agentCode: any, campaignId: any, body: any) {
    return this.http.put<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/` + campaignId, body);
  }

  getByIdMediaCampaigns(agentCode: any, campaignId: any, id: any) {
    return this.http.get<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/${campaignId}/media-files/`, id);
  }
  updateMediaCampaigns(agentCode: any, campaignId: any, id: any, body: any) {
    return this.http.put<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/${campaignId}/media-files/` + id, body);
  }
  downloadMediaCampaign() {

  }
  deleteMediaCampaigns(agentCode: any, campaignId: any, id: any) {
    return this.http.delete<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/${campaignId}/media-files/` + id);
  }
  deleteMycampaigns(agentCode: any, campaignId: any) {
    return this.http.delete<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/` + campaignId);
  }
  postMyCampaignMediaFile(agentCode: any, campaignId: any, body: any) {
    return this.http.post<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/${campaignId}/media-files`, body);
  }
  getMyCampaignMediaFile(agentCode: any, campaignId: any) {
    return this.http.get<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/${campaignId}/media-files`);
  }
  runMyCampaign(agentCode: any, campaignId: any, body: any) {
    return this.http.post<any>(`${environment.apiurl}api/agents/${agentCode}/campaigns/${campaignId}/run`, body);
  }

}
