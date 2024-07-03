/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { HttpErrorResponse, HttpClient, HttpHeaders } from "@angular/common/http";
// import { environment1 } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private notifyleadtransaction = new Subject<any>();
  ChannelPartnerdataORSourcedata: any
  private notifyImagePath = new Subject<any>();
  private notify = new Subject<any>();
  private notifyfollowup = new Subject<any>();
  private notifydeal = new Subject<any>();
  private notifyeditchannel = new Subject<any>();
  private notifyeditchannelnew = new Subject<any>();
  private notifyeditchannelnewedit = new Subject<any>();
  private notifydeleteInvite = new Subject<any>();
  private notifychannelpartner = new Subject<any>();
  private notifyInvitenew = new Subject<any>();
  private notifynew = new Subject<any>();
  private notifychannel = new Subject<any>();
  private notifyUpdate = new Subject<any>();
  private notifyChannelUpdate = new Subject<any>();
  private notifyChannelClear = new Subject<any>();
  private notifytodo = new Subject<any>();
  private notifySourceClear = new Subject<any>();
  private notifyFollowuoToClear = new Subject<any>();
  private notifyeditInvite = new Subject<any>();
  private notifyeditAddress = new Subject<any>();
  private notifysuspendteam = new Subject<any>();
  private notifyTransferteam = new Subject<any>();
  private notifyeditguest = new Subject<any>();
  private notifydeleteguest = new Subject<any>();
  private notifysuspendManager = new Subject<any>();
  private notifyadddetails = new Subject<any>();
  private notifytoclearSources = new Subject<any>();
  private notifypopUp = new Subject<any>();


  private notifytoWhocandocomp = new Subject<any>();
  notifytowhocandocomponent$ = this.notifytoWhocandocomp.asObservable();

  notifypopUpObservable$ = this.notifypopUp.asObservable();
  notifyObservableToClearSourcesAfterChannelChecked$ = this.notifytoclearSources.asObservable();
  notifyImageObservable$ = this.notifyImagePath.asObservable();
  notifyObservable$ = this.notify.asObservable();
  notifyleadId$ = this.notifyleadtransaction.asObservable();
  notifyObservablenew$ = this.notifynew.asObservable();
  notifyObservablenewChannel$ = this.notifychannel.asObservable();
  notifyObservablenewUpdateSbusource$ = this.notifyUpdate.asObservable();
  notifyObservablenewChannelUpdateSbusource$ = this.notifyChannelUpdate.asObservable();
  notifyObservablenewChannelClear$ = this.notifyChannelClear.asObservable();
  notifyObservablenewSourtceClear$ = this.notifySourceClear.asObservable();
  notifyObservableFollowupClear$ = this.notifyFollowuoToClear.asObservable();
  notifyObservabledeal$ = this.notifydeal.asObservable();
  notifyObservablechannel$ = this.notifyeditchannel.asObservable();
  notifyObservablechannelnew$ = this.notifyeditchannelnew.asObservable();
  notifyObservablechannelnewedit$ = this.notifyeditchannelnewedit.asObservable();
  notifyObservableInvite$ = this.notifydeleteInvite.asObservable();
  notifyobservableAddressEdit$ = this.notifyeditAddress.asObservable();
  notifyobservableInviteEdit$ = this.notifyeditInvite.asObservable();
  notifyObservableInviteNew$ = this.notifyInvitenew.asObservable();
  notifyObservablensuspendteam$ = this.notifysuspendteam.asObservable();
  notifyObservablenTransferteam$ = this.notifyTransferteam.asObservable();
  notifyObservablentodo$ = this.notifytodo.asObservable();
  notifyObservablenfollowup$ = this.notifyfollowup.asObservable();
  notifyObservablenGuestedit$ = this.notifyeditguest.asObservable();
  notifyObservablenGuestdelete$ = this.notifydeleteguest.asObservable();
  notifyObservablenSuspendManager$ = this.notifysuspendManager.asObservable();
  notifyObservablechannelpartner$ = this.notifychannelpartner.asObservable();
  notifyObservablenadddetails$ = this.notifyadddetails.asObservable();

  constructor(private http: HttpClient, private cookieservice: CookieService) { }
  private data: any = [];

  public notifypopUpObservable(data:any) {

     this.notifypopUp.next(data);

  }

  public NotifyWhocan(data: any) {

    this.notifytoWhocandocomp.next(data)
  }

  public notifImageupdate(data: any) {
    this.notifyImagePath.next(data);
  }

  public notifyToChannelpartner(data:any) {
    this.notifychannelpartner.next(data);
  }

  public notifToFollowup(data:any) {
    this.notifyFollowuoToClear.next(data);
  }


  public notifyOther(data: any) {
    debugger;
    if (data) {
      this.notify.next(data);
    }
  }

  public NotifyToClearSourcesAfterChannelChecked(data:any) {
    this.notifytoclearSources.next(data);
  }

  public notifyOtherfollowup(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  public notifyOtherdeal(data: any) {
    if (data) {
      this.notifydeal.next(data);
    }
  }
  public notifyOtherchannel(data: any) {
    if (data) {
      this.notifyeditchannel.next(data);
    }
  }
  public notifyOtherchannelnew(data: any) {
    if (data) {
      this.notifyeditchannelnew.next(data);
    }
  }
  public notifyOtherchanneledit(data: any) {
    if (data) {
      this.notifyeditchannelnewedit.next(data);
    }
  }
  public notifyOtherInvite(data: any) {
    if (data) {

      this.notifydeleteInvite.next(data);
    }
  }

  public notifyOtherInvitenew(data: any) {
    if (data) {

      this.notifyInvitenew.next(data);
    }
  }

  public notifyOtherInviteEdit(data: any) {
    if (data) {

      this.notifyeditInvite.next(data);
    }
  }
  public notifyOtherInviteAddress(data: any) {
    if (data) {

      this.notifyeditAddress.next(data);
    }
  }



  public notifyOthernew(data: any) {
    if (data) {
      this.notifynew.next(data);
    }
  }
  public notifyOthernewChannel(data: any) {
    if (data) {
      this.notifychannel.next(data);
    }
  }
  public notifyOthernewupdatesubsource(data: any) {
    if (data) {
      this.notifyUpdate.next(data);
    }
  }

  public notifyOthernewChannelupdatesubsource(data: any) {
    if (data) {
      this.notifyChannelUpdate.next(data);
    }
  }

  public notifyOthernewChannelClear(data: any) {
    if (data) {
      this.notifyChannelClear.next(data);
    }
  }


  public notifyOthertodo(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  public notifyOthernewSourceClear(data: any) {
    if (data) {
      this.notifySourceClear.next(data);
    }
  }
  public notifyOtherInvitesuspend(data: any) {
    if (data) {
      this.notifysuspendteam.next(data);
    }
  }

  public notifyOtherInvitesuspendManager(data: any) {
    if (data) {
      this.notifysuspendManager.next(data);
    }
  }



  public notifyOtherInviteTransfer(data: any) {
    if (data) {
      this.notifyTransferteam.next(data);
    }
  }

  public notifyGuestedit(data: any) {
    if (data) {
      this.notifyeditguest.next(data);
    }
  }
  public notifyDeleteGuest(data: any) {
    if (data) {
      this.notifydeleteguest.next(data);
    }
  }

  public notifyaddmoredetails(data: any) {
    if (data) {
      this.notifyadddetails.next(data);
    }
  }

  SetData(data: any) {
    this.data = data;
  }

  getData(): any {

    return this.data;
  }
  SetDataBusiness(data: any) {
    this.data = data;
  }
  getDataBusiness(): any {

    return this.data;
  }
  SetDesignation(data: any) {
    this.data = data;
  }
  getDesignation(): any {

    return this.data;
  }

  public setCheckedchannelData(data:any) {
    this.ChannelPartnerdataORSourcedata = data;
  }

  public getCheckedchannelData() {
    return this.ChannelPartnerdataORSourcedata
  }


  getleadsdata(Employeeid: any) {
    // let urldata = environment1.apiURL;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let HttpParams = { 'EmployeeId': Employeeid }
    let options = {
      headers: httpHeaders,
      params: HttpParams
    };
    // return this.http.get(environment.apiURL + '/', options);
    // return this.http.get(urldata).pipe(
    //   mergeMap((json:any) => this.http.get(json[0]['apiHostUrl'] + '/', options)));
  }

  getleads(Employeeid: any) {
    // let urldata = environment1.apiURL;
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let HttpParams = { 'EmployeeId': Employeeid }
    let options = {
      headers: httpHeaders,
      params: HttpParams
    };
    //return this.http.get(environment.apiURL + '/GetAllLeadsfortransfer', options);
    // return this.http.get(urldata).pipe(
    //   mergeMap((json:any) => this.http.get(json[0]['apiHostUrl'] + '/GetAllLeadsfortransfer', options)));
  }

  public functiontocurrencyformat(value:any) {

    let currencyformat = this.cookieservice.get("savedformat")
    if (currencyformat == "India") {
      //  this.symbol = this.cookieservice.get("symbolofcurrency")
      var result = value.toString().split('.');
      var lastThree = result[0].substring(result[0].length - 3);
      var otherNumbers = result[0].substring(0, result[0].length - 3);
      if (otherNumbers != '')
        lastThree = ',' + lastThree;
      var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      if (result.length > 1) {
        output += "." + result[1];
      }
      // return  this.symbol+"  "+output
      return output
    }
    else {
      // this.symbol = this.cookieservice.get("symbolofcurrency")
      var result = value.toString().split('.');
      var lastThree = result[0].substring(result[0].length - 3);
      var otherNumbers = result[0].substring(0, result[0].length - 3);
      if (otherNumbers != '')
        lastThree = ',' + lastThree;
      var output = otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
      if (result.length > 1) {
        output += "." + result[1];
      }
      //return this.symbol+"  "+output
      return output
    }

  }

  public functiontoRemoveCommas(value:any) {
    let a = value.split(',')
    let b = a.join('')
    let c = b
    return c;
  }





  public notifytransaction(data: any) {
    if (data) {
      this.notifyleadtransaction.next(data);
    }
  }
}
