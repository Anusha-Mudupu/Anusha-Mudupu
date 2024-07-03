/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { object } from '@amcharts/amcharts5';
import { floorRegistarion } from 'src/app/chits-class';
import { TabsModule } from 'ngx-bootstrap/tabs';
import * as Highcharts from 'highcharts';
import Heatmap from 'highcharts/modules/heatmap';
import { HighchartsChartComponent } from 'highcharts-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Margin } from '@syncfusion/ej2-heatmap';
import { NgxPrintElementModule } from 'ngx-print-element';

Heatmap(Highcharts);
@Component({
  selector: 'app-floor-wise-registration',
  standalone: true,
  imports: [CommonModule ,  NgxPaginationModule, PaginationModule , TabsModule,NgApexchartsModule,NgxPrintElementModule],
  templateUrl: './floor-wise-registration.component.html',
  styleUrl: './floor-wise-registration.component.scss'
})
export class FloorWiseRegistrationComponent implements OnInit{
  public config = {
    printMode: 'template-popup',
    popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: '',
    templateString: '',
    stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    styles: ['td { border: 1px solid black; color: green; }', 'table { border: 1px solid black; }', 'header, table, footer { margin: auto; text-align: center; }']
  }
  basicHeatmapChart: any;
  multipleSeriesChart: any;
  colorRangeChart: any;
  rangeWithoutShadesChart: any;
  businessData: floorRegistarion[] =[];
  manager: any[] = [
    {
      "SNo": 1,
      "Details": "Sale Consideration (Basic Price)",
      "Payables": "43,20,000",
      "Paid":"43,20,000",
      "Difference": "0",
      "LastpaidDate": '21-OCT-2017',
    },
    {
      "SNo": 2,
      "Details": "Corpus Fund",
      "Payables": "72,000",
      "Paid":"0",
      "Difference": "72,000",
      "LastpaidDate":"21-OCT-2017",
    },
    {
      "SNo": 3,
      "Details": "Legal Document Charges",
      "Payables": "20,000",
      "Paid":"0",
      "Difference": "20,000",
      "LastpaidDate": '21-OCT-2017',
    },

]

constructor() {
  
 
}
  ngOnInit(): void {
    this._rangeWithoutShadesChart('["--tb-info", "--tb-primary"]');
  }
tablepageChanged(event: PageChangedEvent): void {
  this.updatePageData(event.page);
}

updatePageData(page: number): void {
  debugger
  const startItem = (page - 1) * 8;
  const endItem = page * 15;
  this.businessData = this.manager.slice(startItem, endItem);
}
private getChartColorsArray(colors: any) {
  colors = JSON.parse(colors);
  return colors.map(function (value: any) {
    var newValue = value.replace(" ", "");
    if (newValue.indexOf(",") === -1) {
      var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
      if (color) {
        color = color.replace(" ", "");
        return color;
      }
      else return newValue;;
    } else {
      var val = value.split(',');
      if (val.length == 2) {
        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
        return rgbaColor;
      } else {
        return newValue;
      }
    }
  });
}



private generateData(count: number, yrange: { max: number; min: number; }) {
  const series = [];
  for (let i = 1; i <= count; i++) {
    const x = "w" + i.toString();
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x: x, y: y });
  }
  return series;
}

_rangeWithoutShadesChart(colors: any) {
  colors = this.getChartColorsArray(colors);
  this.rangeWithoutShadesChart = {
    series: [
      {
        // name: "Metric1",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric2",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric3",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric4",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric5",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric6",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric7",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric8",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
      {
        // name: "Metric9",
        data: this.generateData(20, { min: 0, max: 90 }),
      },
    ],
    chart: {
      height: 550,
      width: 900,
      type: "heatmap",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      heatmap: {
        enableShades: false,
        colorScale: {
          ranges: [
            { name: 'Raji', from: 1, to: 20, color: "#FF7F50" }, // Green color for 1-20
            { name: 'Anu', from: 21, to: 30, color: "#228B22" }, // Light Blue color for 21-30
            { name: 'Ganni', from: 31, to: 40, color: "red" }, // Red color for 31-40
            { name: 'Noor', from: 41, to: 100, color: "#87CEEB" }, // Sky Blue color for 41-100
          ],
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#fff"],
          },
        },
        // Adjust the following properties to create spacing between the heatmap boxes
        heatmap: {
          gapSize: 15, // Increase this value to increase the gap size
        },
      },
    },
    xaxis: {
      type: "category",
    },
    title: {
      // text: "Rounded (Range without Shades)",
      style: {
        fontWeight: 500,
      },
    },
  };

  const attributeToMonitor = 'data-theme';

  const observer = new MutationObserver(() => {
    this._rangeWithoutShadesChart('["--tb-info", "--tb-primary"]');
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [attributeToMonitor],
  });
}
}
