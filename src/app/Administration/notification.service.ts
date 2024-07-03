/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MastersService } from '../chits/Services/masters.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient,private masterService:MastersService) { }
   
  

getNotification(){
  const ChitsbusinessCode = this.masterService.getChitsBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notifications`);

}
getNotificationDataById(id:any){
  const ChitsbusinessCode = this.masterService.getChitsBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notifications/`+id);
 }
 updateNotification(id:any,data:any){
  const ChitsbusinessCode = this.masterService.getChitsBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notifications/`+id,data);
}
deleteNotification(id: number) {
   const ChitsbusinessCode = this.masterService.getChitsBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notifications/`+id);
}
getRealestateNotification(){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notifications`);

}
getRealestateNotificationDataById(id:any){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notifications/`+id);
 }
 updateRealestateNotification(id:any,data:any){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notifications/`+id,data);
}
deleteRealEstateNotification(id: number) {
   const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
  return this.http.get<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notifications/`+id);
}



// Settings urls

getNotificationSettings(){
  return this.http.get(environment.apiurl+"api/notificationsettings/settings")
}

getNotificationsettingsById(id:any){
const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
return this.http.get<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/whatsapp/`+ id);
}
getSmsNotificationsettingsById(id:any){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
return this.http.get<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/sms/`+ id);
}

createWhatsappNotificationsSettings(body:any){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
return this.http.post<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/whatsapp`,body);
}
createSmsNotificationSetting(body:any){
const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
return this.http.post<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/sms`,body);
}
updateNotificationSettings(id:any,data:any){http://13.201.200.0/kapil-crm-api/api/chits/notification-settings/sms/1
  return this.http.put(environment.apiurl+"api/NotificationSettings/settings/"+id,data);
}
updateSMSNotificationSettings(id:any,body:any){
const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
return this.http.put<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/sms/`+ id,body);
}
updatewhatsappNotificationSettings(id:any,body:any){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
  return this.http.put<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/whatsapp/`+ id,body);
  }
deleteSMsNotificationSettings(id:any){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
  return this.http.delete<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/sms/`+ id);
  }
deleteWhatsappNotificationSettings(id:any){
  const RealestatebusinessCode = this.masterService.getRealEstateBusinessCode();
  return this.http.delete<any>(`${environment.apiurl}api/${RealestatebusinessCode}/notification-settings/whatsapp/`+ id);
  }
getEmailNotificationSetting(ChitsbusinessCode:any){
  // return this.http.get<any>(environment.apiurl+"api/emailsettings/settings/email")
  return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notification-settings/email`);
}
getSmsNotificationSetting(ChitsbusinessCode:any){
return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notification-settings/sms`);

}
getWhatsappNotificationSetting(ChitsbusinessCode:any){
return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notification-settings/whatsapp`);
}
updateEmailNotificationsettings(ChitsbusinessCode:any,id:any,body:any){
  // return this.http.put(environment.apiurl+"api/EmailSettings/settings/email/"+id,data);
  return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notification-settings/email/` + id,body);
}
getByIdEmailNotificationSettings(ChitsbusinessCode:any,id:any){
return this.http.get<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notification-settings/email/`+ id);
  
  // return this.http.get(environment.apiurl+"api/EmailSettings/settings/email/"+id);
}
createEmailnotificationsettings(ChitsbusinessCode:any,body:any){
return this.http.post<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notification-settings/email`,body);
  // return this.http.post(environment.apiurl+"api/EmailSettings/settings/email",body )
}
deleteEmailnotificationsetting(ChitsbusinessCode:any,id:any){http://13.201.200.0/kapil-crm-api/api/chits/notification-settings/email/1
  // return this.http.delete(environment.apiurl+"api/EmailSettings/settings/email/"+id)
  return this.http.delete<any>(`${environment.apiurl}api/${ChitsbusinessCode}/notification-settings/email/`+ id);
}
}
