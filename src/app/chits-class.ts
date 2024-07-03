/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
export class VaccantList {
  "BranchName": string;
  "ChitValue": number;
  "ChitPeriod": number;
  "SubscriptionAmount": number;
  "ActionNumber": number;
  "VaccantValue": number;
  "NoofVaccantTickets": number;
}
export class AgentProducts {
  "Business_Unit": any;
  "chitValue": any;
  "tenureInMonths": any;
  "minInstallment": any;
  "maxInstallment": any;
  "minBidPayable": any;
  "maxBidPayable": any;
  "name": any;
}
export class UserList {
  // "Name":any;
  // "Role":any;
  // "Email":any;
  // "Username":any;
  // "MobileNo":any;
  // "ReportsTo":any;
  // "Branch":any;
  // "Status":any;
  "id": number;
  "firstName": string;
  "lastName": string;
  "phoneNumber": number;
  "email": any;
  "roles": any;
}
export class User {
  "id": string;
  "userName": string;
  "firstName": string;
  "lastName": string;
  "phoneNumber": string
  "email": string;
  "code": string;
  "branchId": number;
  "branchName": string;
  "isActive": any;
  "designationId": any
  "dob": string;
  "doj": string;
  "companyName": string
  "reportingTo": string;
  "verticalId": any;
  "panNo": any;
  "agentCode": any
  "roles": [
    "Agent"
  ];
  "accountRoles": any;

}
export class Lead {
  "id": any;
  "leadName": string;
  "contactNo": string;
  "emailId": string;
  "address": string;
  "enquiredDate": string;
  "sourceId": string;
  "sourceSubCategoryId": string;
  "assignTo": string;
  "leadDate": string;
  "loginUserId": any;
  "productId": number;
  "productName": string;
  "employeeName": string;
  "branchId": any;
  "branchName": string;
  "status": number;
  "statusName": string;
  "verticalId": any;
}
export class RealAgentProducts {
  "Name": any;
  "UnitsSize": any;
  "Amountpayble": any;
  "RSDAmount": any;
  "MinumumMontlyRent": any;
}
export class productslists {
  "Total Contacts": any;
  "Total Leads": any;
  "Converted Leads": any;

  "Business Value": any;
  "Pipeline": any;

}
export class Products {
  "id": number;
  "vertical": number;
  "name": string
  "chitValue": number;
  "tenureInMonths": number
  "minInstallment": number
  "maxInstallment": number
  "minBidPayable": number
  "maxBidPayable": number
  "loginUserId": string
}
export class Region {
  "name": string;
  "code": string;
  "zone": any;

  "branches": [];
  "users": [];
  "id": number;
  "createdBy": any;
  "createdOn": string;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
  "zoneNavigation": zoneNavigation[]
}
export class Designation {
  "name": string
  "code": string;
  "reportsTo": string;
  "reportingName": string
  "users": [];
  "id": number;
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
}
export class RegionPerformance {
  "Branch_Name": any;
  "Total_Contacts": any;
  "Total_Leads": any;
  "Win": any;
  "Business_Value": any;
  "Pipeline": any;
}
export class BusinessVerticle {
  "name":string;
  "code":string;
  "status": any;
  "order":any;
  "contactLeads":any;
  "contacts":any;
  "masterAgentProducts":any;
  "masterProducts":any;
  "id":number;
  "createdBy":any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn":any;
  "isDeleted":any;
}
export class ProductionType {
  "Business_Verticle": String;
  "Name": String;
  "Code": any;
  "status": String
}



export class Zone {
  "name": string;
  "code": string;
  "branches": [];
  "regions": [];
  "users": [];
  "id": number
  "createdBy": any;
  "createdOn": string;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
  "vchzonename":any

}
export class zoneNavigation {
  "name": string;
  "code": string;
  "branches": any;
  "regions": any;
  "users": any;
  "id": number;
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": 0
}

export class Branch {
  "id": number;
  "brid": any;
  "name": string;
  "code": string;
  "status": string;
  "zone": number;
  "region": number;
  "zoneName": string;
  "regionName": string;
  "loginUserId": any
}
export class LeadDetail {

  "slno": number;
  "LeadDate": String;
  "LeadName": string;
  "ContactNo": number;
  "EmailId": string;
  "Source": string;
  "SubSource": string;
  "Query": string;
  "NextFollowupDate": string;
  "NextFollowupThrough": string;
  "Status": string;
  "AssignTo": string;

}
// export class roledata {
//   "roleName": string;
//   "description": string;
//   "id": number;
//   "verticalId": number;
// }


export class Education {

  "name": string;
  "code": string;
  "id": number;
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": string;
  "modifiedOn": any;
  "isDeleted": number;

}
export class Gender {

  "name": string;
  "id": number;
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;

}

export class Profession {
  "name": string;
  "code": string;
  "id": number;
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number
}

export class Status {
  "title": string;
  "active": any;
  "id": number;
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
}

export class Source {
  "name": string;
  "code": string;
  "id": number;
  "createdBy": any;
  "createdOn": string;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
}

export class SubCatergory {
  "sId": number;
  "name": string;
  "active": any;
  "id": number;
  "createdBy": any;
  "createdOn": string;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
}

export class Followup {
  "leadid": number;
  "followupDate": any;
  "followupType": number;
  "followUpStatus": number;
  "nextFollowupType": number;
  "nextFollowUpDate": string;
  "referenceFollowUpId": any;
  "remarks": string;
  "followupBy": any;
  "customerDealvalue": number;
  "comment": string
  "followupTypeName": string
  "nextFollowupTypeName": string
}

export class FollowUpThrough {
  "title": string;
  "active": any;
  "id": number;
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
}


export class roledata {
  "roleName": string;
  "description": string;
  "id": number;
  "verticalId": number;
  "code": any;
  "rolePermissions": any;
}


export class getNavigation {
  "admin": any
  "create": any
  "delete": any
  "group": any

  "Masters": string
  "id": number
  "isActive": any

  "name": string
  "navigation": string;

  "navigationId": number

  "read": any

  "sequence": number

  "write": any

}
export class verticalData {
  "id": number
  "name": string
}

export class getByRoles {
  "code": any;

  "description": string
  "oldRoleName": any

  "roleName": string

  "rolePermissions": any

  "verticalId": number

  "verticalName": any;

}
export class role {
  "roleName": string
}


export class Catergory {
  "name": string;
  "code": string;
  "id": number
  "createdBy": any;
  "createdOn": any;
  "modifiedBy": any;
  "modifiedOn": any;
  "isDeleted": number;
}
export class floorRegistarion {
  "SNo": number;
  "Details": string;
  "Payables": string;
  "Paid": string;
  "Difference": string;
  "LastpaidDate": string;
}
export class BookingsMPR {
  "Manager": string;
  "TOTAL": string;
  "Mar2024": string;
  "Feb2024": string;
  "Jan2024": string;
  "Dec2023": string;
  "Nov2023": string;

  "Oct2023": string;
  "Sep2023": string;
  "Aug2023": string;
  "July2023": string;
  "Jun2023": string;
  "May2023": string;
  "Apr2024": string;
  "Mar2023": string;
  "UptoFeb2023": string;
}
export class calender {
  "Year": number;
  "Units": number;
  "Sft": number;
  "Amount": string;

}
export class Quarter {
  "": string;
  "Q1": number;
  "Q2": number;
  "Q3": number;
  "Q4": number;
  "Total": number;

}
export class registration {
  "": string;
  "Jan-2024": number;
  "Feb-2024": number;
  "March-2024": number;
  "Q1-Total": number;
  "Apr-2024": number;
  "May-2024": number;
  "June-2024": number;
  "Q2-Total": number;
  "July-2024": number;
  "Aug-2024": number;
  "Sep-2024": number;
  "Q3-Total": number;
  "Oct-2024": number;
  "Nov-2024": number;
  "Dec-2024": number;
  "Q4-Total": number;


}
export class subscribers {

  "ChitFund": string;
  "BusinessValue": string;
  "Name": string;
  "Phone": number;
  "EnrollDate": string;
  "Branch": string;
  "Group": string;
  "TNO": number
}
export class mybusiness{
  
    "ChitFund":string;
    "BusinessValue":string;
    "Name":string;
    "Phone":number;
    "EnrollDate":string;
    "Branch":string;
    "Group":string;
    "TNO":number
    "AdAmount":string;
    "DueAmount":string;
   
 
}