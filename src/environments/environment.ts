/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  // production: false,
   production: true,
 
  // apiURL : 'http://202.53.15.13:9013/api/AjaxAPI',
 

  defaultauth: 'fakebackend',
  firebaseConfig: {
    apiKey: "AIzaSyCqS9cSPrDCNSQ-Ku2kZf5DBWjPPv7hvcA",
    authDomain: "test-demo-774f8.firebaseapp.com",
    databaseURL: "https://test-demo-774f8-default-rtdb.firebaseio.com",
    projectId: "test-demo-774f8",
    storageBucket: "test-demo-774f8.appspot.com",
    messagingSenderId: "916438010670",
    appId: "1:916438010670:web:c70cf404da6c0fe7b048bf",
    measurementId: "G-1N6FB2GG55"
  },
  // apiurl:"http://13.201.200.0/crm-api/",
  apiurl:"http://13.201.200.0/kapil-crm-api/",
  // apiurl:"http://13.201.200.0/KapilCrmApi/"
  // apiurl:"http://13.201.200.0/masters/getstatus",
  leadStatus:"http://13.201.200.0/kapilCrmApi/GetStatus",

  
};
export const environment1 = {
  production: true,
  apiURL: 'assets/appsettings.json'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
