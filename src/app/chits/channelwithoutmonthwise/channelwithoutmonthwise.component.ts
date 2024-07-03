/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule }from '@swimlane/ngx-charts';  // added
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { HeatMap } from '@syncfusion/ej2-heatmap';
import { HeatMapModule, LegendService } from '@syncfusion/ej2-angular-heatmap';
import { NgxPrintElementModule } from 'ngx-print-element';

@Component({
  selector: 'app-channelwithoutmonthwise',
  standalone: true,
  imports: [CommonModule,NgxChartsModule, HeatMapModule,NgxPrintElementModule],
  templateUrl: './channelwithoutmonthwise.component.html',
  styleUrl: './channelwithoutmonthwise.component.scss'
})
export class ChannelwithoutmonthwiseComponent {
//   titleSettings: Object = {
//     text: 'Sales Revenue per Employee (in 1000 US$)',
//     textStyle: {
//         size: '15px',
//         fontWeight: '500',
//         fontStyle: 'Normal'
//     }
// };
//     // Data for heatmap
//      dataSource: Object[] = [
//        [73, 39, 26, 39, 94, 0],
//        [93, 58, 53, 38, 26, 68],
//        [99, 28, 22, 4, 66, 90],
//        [14, 26, 97, 69, 69, 3],
//        [7, 46, 47, 47, 88, 6],
//        [41, 55, 73, 23, 3, 79],
//        [56, 69, 21, 86, 3, 33],
//        [45, 7, 53, 81, 95, 79],
//        [60, 77, 74, 68, 88, 51],
//        [25, 25, 10, 12, 78, 14],
//        [25, 56, 55, 58, 12, 82],
//        [74, 33, 88, 23, 86, 59]
//     ];
//     xAxis: Object = {
//     labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert',
//         'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
// };
// yAxis: Object = {
//     labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
// };
// public legendSettings: Object = {
//     visible:true,
//     position: 'Right',
//     showLabel:true,
//     height:'150px'
// };
// paletteSettings = {
//   palette: [{ color: '#FFA500' }, { color: '#CECEFF' }, { color: '#87CEEB' }, { color: '#FF0000' }]
// };
public config = {
  printMode: 'template-popup',
  popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
  pageTitle: '',
  templateString: '',
  stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
  styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
}

 manager:any=[
    {
       "Manager":'60.k.SUKENDER REDDY',
       "Mar2024":'5,80,000',
      
   },
   {
    "Manager":'15.R.BHAVANI',
    "Mar2024":'5,37,600',
   
  },
  {
    "Manager":'49-B.N.PRADEEP REDDY',
    "Mar2024":'4,75,200',
   
  },
  {
    "Manager":'6.T.PUSHPA',
    "Mar2024":'3,95,600',
    
  },
  {
    "Manager":'TOTAL',
    "Mar2024":'1,998,400',
    
  }
  ]
}
