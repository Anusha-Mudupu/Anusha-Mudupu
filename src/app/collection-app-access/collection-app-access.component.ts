// /*
//  *   Copyright (c) 2024 Dmantz Technologies private limited
//  *   All rights reserved.
//  */
// /*
//  *   Copyright (c) 2024 Dmantz Technologies private limited
//  *   All rights reserved.
//  */
// import { Component, OnInit } from '@angular/core';
// import { environment1 } from 'src/environments/environment';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { groupBy, mergeMap, toArray } from 'rxjs/operators';
// // import { formatDate, DatePipe } from '@angular/common';
// // import { LeadService } from 'src/app/Services/lead.service';
// // import {  CollectionAppService } from 'src/app/Services/collection-app.service';
// import { ToastrService } from 'ngx-toastr';
// import { FormBuilder, FormGroup, Validators, NgForm, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
// import { LeadService } from '../lead.service';
// import { CollectionAppService } from '../collection-app.service';
// // import { ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-collection-app-access',
//   templateUrl: './collection-app-access.component.html',
//   // styles: [],
//   standalone: true,
//   imports:[ 
//     FormsModule,
//     ReactiveFormsModule

//   ]
// })
// export class CollectionAppAccessComponent implements OnInit {
//   today = new Date();
//   OverDuesdate:any=[];
//   allSelected:boolean=false;
//   showSelectuser!: boolean ;
//   Role: any;
//   Employeetree: any;
//   employeetreedata: any;
//   public show: boolean = false;
//   public Fromshow: boolean = false;
//   public Toshow: boolean = false;
//   public selectedKeys = ['Select Employee'];
//   Assignto: any;

//   public onToggle(): void {
//     this.show = !this.show;
//   }
//   public FromonToggle(): void {
//     this.Fromshow = !this.Fromshow;
//   }
//   public ToonToggle(): void {
//     this.Toshow = !this.Toshow;
//   }
//   Employeeid: any;
//   SeletedEmployeeId: any;
//   Employeesbasedonlogin: any;
//   Employeesbasedonlogintemp: any;
//   postsaleleadsdate:any;
//   ReAssigned:any=[];
//   allSelectedReAssigned:boolean=false;
//   toEmployeetree:any=[];
//   ReAssignedform!: FormGroup;
//   dataVisible: boolean = false;
//   constructor(private http: HttpClient,  private leadservice: LeadService, private _CollectionApp:CollectionAppService, private toastr: ToastrService, private formbuilder: FormBuilder) { }

//   ngOnInit() {
//     this.Role = sessionStorage.getItem('Role');
//     if (this.Role == 'Executive') {
//       this.showSelectuser = false;
//     } else {
//       this.showSelectuser = true;
//     }
//     this.ReAssignedform = this.formbuilder.group({
//       Fromemployeeid: ['', Validators.required],
//       Toemployeeid: ['', Validators.required],
//     })
//     this.GetEmployees();
//     this.getOverDuedata();
//     //this.GetPostsalerunningLeads();
//   }
//   showData() {
  
//       console.log('Button clicked!');
  
//     this.dataVisible = !this.dataVisible;
//   }
//   GetEmployees(){
//     let urldata = environment1.apiURL;
//     let UserId = sessionStorage.getItem('userid');
//     this.Employeeid = sessionStorage.getItem('Employeeid');
//     let httpHeaders = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Cache-Control': 'no-cache'
//     });
//     let HttpParams = { 'UserId': UserId }
//     let options = {
//       headers: httpHeaders,
//       params: HttpParams
//     };
//     this.http.get(urldata).pipe(
//       mergeMap((json:any) => this.http.get(json[0]['apiHostUrl'] + '/GetEmployeesbasedOnLogin'))).subscribe(json => {
//         let kk = json;
//         this.Employeesbasedonlogin = json;
//         if (this.Employeesbasedonlogin == "") { this.Employeesbasedonlogin = []; }
//         else {
//           this.Employeesbasedonlogin = JSON.parse(this.Employeesbasedonlogin);
//           // this.Employeesbasedonlogintemp.push({ ExecutiveID: 1011, ExecutiveName: "All Users", Ischecked: false, ManagerCode: "" });
//           // for (let x = 0; x < this.Employeesbasedonlogin.length; x++) {
//           //   this.Employeesbasedonlogintemp.push(this.Employeesbasedonlogin[x]);
//           // }
//         }
//         //this.selectedKeys = ['Select User'];
       
//       });
//     this.leadservice.getemployeetreedata('type', 101).subscribe((result: any) => {
//       let tempresult = [];
//       tempresult = JSON.parse(result);

//       // if (sessionStorage.getItem('Employeeid') == '1011') {
//       //   let xyz = { "employeeid": 1011, "employeename": "All Employee", "reportingto": null }
//       //   tempresult.splice(0, 0, xyz)
//       // }
//       result = JSON.stringify([...tempresult]);
//       let resultdata = result as string
//       this.Employeetree = JSON.parse(resultdata);
//       this.employeetreedata = this.Employeetree;
//     });
//   }
//   GetPostsalerunningLeads(){
//     debugger
//     this.postsaleleadsdate=[];
//     this._CollectionApp.GetPostsalerunningLeads().subscribe((result: any) => {
//       this.postsaleleadsdate = JSON.parse(result);
    
//     });
//   }
//   getOverDuedata(){
//     debugger
//     this.OverDuesdate=[];
//     let urldata = environment1.apiURL;
//     let httpHeaders = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Cache-Control': 'no-cache'
//     });
//     // let HttpParams = { 'FromDate': this.datepipe.transform(new Date(), "yyyy-MM-dd"),'pDueType':'All' }
//     let options = {
//       headers: httpHeaders,
//       // params: HttpParams
//     };
//     this.http.get(urldata).pipe(
//       mergeMap((json:any) => this.http.get(json[0]['CollectionAppUrl'] + '/Loans/Reports/GetOverDuesSummary'))).subscribe((json: any) => {
//         this.postsaleleadsdate=[];
//         this._CollectionApp.GetPostsalerunningLeads().subscribe((result: any) => {
//           this.OverDuesdate= json;
//           this.OverDuesdate.filter(function (datap:any) {
//             datap.selectOverDues=false;
//             datap.alreadyexist=false;
//         })
//         this.allSelected=false;
//           this.postsaleleadsdate = JSON.parse(result);
//           for (let i = 0; this.postsaleleadsdate.length>i;i++) {
//             let a=this.postsaleleadsdate[i]['referenceno'];
//             const index = this.OverDuesdate.findIndex((user:any) => user.pApplicationid ==a); 
//             this.OverDuesdate.splice(index, 1); 
            
//           }
//         });

   
//       });
//   }
//   public handleSelection(index:any): void {
//     this.selectedKeys = index.dataItem.employeename;
//     // this.Employeeid = index.dataItem.employeeid;
//     this.Assignto = index.dataItem.employeeid;
//     this.show = false;
//   }
//   selectAll($event: any, dataItem:any, rowIndex:any){
//     if ($event.target.checked) {
//       this.allSelected = true;
//       this.OverDuesdate.filter(function (datap:any) {
//         datap.selectOverDues=true;

//     })
//     }
//     else{
//       this.allSelected = false;
//       this.OverDuesdate.filter(function (datap:any) {
//         datap.selectOverDues=false;

//     })
//     }
//   }
//   checktoAssign($event: any,data:any,rowIndex:any){

//     if ($event.target.checked) {
//       this.OverDuesdate[rowIndex].selectOverDues=true;
//       this.allSelected = true;

//     }
//     else{
//       this.OverDuesdate[rowIndex].selectOverDues=false;
//     }
//   }
//   checktReAssigned($event: any,data:any,rowIndex:any){
// debugger
//     if ($event.target.checked) {
//       this.ReAssigned[rowIndex].selectReAssigned=true;
//       this.allSelected = true;

//     }
//     else{
//       this.ReAssigned[rowIndex].selectReAssigned=false;
//     }
//   }
//   LeadAssign(){
//     debugger
//     if( this.Assignto==undefined){
// this.toastr.info('Please Select Employee to assign Leads')
// return
//     }
//     let selectOverDuesdata = this.OverDuesdate.filter((OverDuesArray:any) => OverDuesArray.selectOverDues == true);
// let savedata=[];
//     for (let i = 0; i < selectOverDuesdata.length; i++) {
//       let a={ Customername:selectOverDuesdata[i]['pApplicantName'],fullname:selectOverDuesdata[i]['pApplicantName'],contactno:selectOverDuesdata[i]['pContactNumber'],countrycode: "+91",country: "India", title: "Mr.",Customerid:selectOverDuesdata[i]['pApplicationid'],assignto:this.Assignto,dealvalue :selectOverDuesdata[i]['pTotalOverDue'],query:'Due Amount : '+selectOverDuesdata[i]['pTotalOverDue']+' For Loan Id :'+selectOverDuesdata[i]['pApplicationid'],referenceno:selectOverDuesdata[i]['pApplicationid'],createdby :sessionStorage.getItem('Employeeid')}
//        savedata.push(a);
//     }
//     let data = JSON.stringify(savedata);
//     this._CollectionApp.PostLeadEntrySave(data).subscribe((result: any) => {
//       this.toastr.success('Sucessfully selected leads assigned..');
//       this.getOverDuedata();
//     });
   
//   }
//   Fromemployeetree(event:any){
// debugger
// // this.text = event.target.value;

// let employeename = event.target.options[event.target.selectedIndex].text
// this.ReAssigned=[];
// this.ReAssigned=this.postsaleleadsdate.filter((Arraydata:any) => Arraydata.employeename == employeename);
// this.toEmployeetree=this.Employeetree.filter((Arraydata:any) => Arraydata.employeename != employeename);
// this.allSelectedReAssigned = true;
// this.ReAssigned.filter(function (datap:any) {
//   datap.selectReAssigned=true;
// })
//   }
//   selectAllReAssigned($event: any, dataItem:any, rowIndex:any){
//     if ($event.target.checked) {
//       this.allSelectedReAssigned = true;
//       this.ReAssigned.filter(function (datap:any) {
//         datap.selectReAssigned=true;

//     })
//     }
//     else{
//       this.allSelectedReAssigned = false;
//       this.ReAssigned.filter(function (datap:any) {
//         datap.selectReAssigned=false;

//     })
//     }
//   }
//   ReAssigneddata(){
// debugger
// if (this.ReAssignedform.controls['Fromemployeeid'].value=='') {
//   this.toastr.warning("Please Select 'From' Employee");
//   return;
// }
// if (this.ReAssignedform.controls['Toemployeeid'].value=='') {
//   this.toastr.warning(" Please Select 'To' Employee");
//   return;
// }
// let ReAssignedtruedata = this.ReAssigned.filter((Arraydata:any) => Arraydata.selectReAssigned == true);
//   if(ReAssignedtruedata.length==0){
//     this.toastr.warning("Please Select Atleast One Lead");
//   }
//   let Leadtemparray=[];
//    for (let i = 0; i < ReAssignedtruedata.length; i++) {
//     Leadtemparray.push(Number(ReAssignedtruedata[i]["leadid"]));
//      }
// let leadReAssigneddata={
//   "Statusid":1,
//   "Fromemployeeid": Number(this.ReAssignedform.controls['Fromemployeeid'].value),
//     "Assignto": Number(this.ReAssignedform.controls['Toemployeeid'].value),
//     "leads":Leadtemparray.toString(),
//     "enterby": Number(sessionStorage.getItem('Employeeid'))
// }

// let a=  JSON.stringify(leadReAssigneddata);
// this._CollectionApp.PostsaleassignleadsSave(a).subscribe((result: any) => {
//   let a= JSON.parse(result);
//   this.ReAssigned='';
//   this.ReAssignedform.controls['Fromemployeeid'].setValue('');
//   this.ReAssignedform.controls['Toemployeeid'].setValue('');
//   this.toEmployeetree=[];
//   this.allSelectedReAssigned = false;
//   this.toastr.success('Sucessfully Re-Assigned');
// this.GetPostsalerunningLeads();
// });
//   }
// }

// // public Int32 Statusid { get; set; }
// //         public Int32 Assignto { get; set; }
// //         public string leads { get; set; }
// //         public Int32 Reportingto { get; set; }
// // Postsaleassignleads
// // public string enterby { get; set; }