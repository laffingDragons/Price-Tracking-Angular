import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Chart } from 'chart.js';
import { AppService } from './../app.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  public chart: any;
  names: any;
  select: any;
  rate: any;
  usdGraph: { label: string; data: number[]; lineTension: number; fill: boolean; borderColor: string; backgroundColor: string; pointBorderColor: string; pointBackgroundColor: string; pointRadius: number; pointHoverRadius: number; pointHitRadius: number; pointBorderWidth: number; pointStyle: string; };
  gbpGraph: { label: string; data: number[]; lineTension: number; fill: boolean; borderColor: string; backgroundColor: string; pointBorderColor: string; pointBackgroundColor: string; pointRadius: number; pointHoverRadius: number; pointHitRadius: number; pointBorderWidth: number; };
  mxnGraph: { label: string; data: number[]; lineTension: number; fill: boolean; borderColor: string; backgroundColor: string; pointBorderColor: string; pointBackgroundColor: string; pointRadius: number; pointHoverRadius: number; pointHitRadius: number; pointBorderWidth: number; };
  aedGraph: { label: string; data: number[]; lineTension: number; fill: boolean; borderColor: string; backgroundColor: string; pointBorderColor: string; pointBackgroundColor: string; pointRadius: number; pointHoverRadius: number; pointHitRadius: number; pointBorderWidth: number; };

  


  constructor(public appService: AppService, public router: Router, public _route: ActivatedRoute, public snackBar: MatSnackBar, ) { }

  ngOnInit() {

    this.getAllProducts()


    this.usdGraph = {
      label: "USD",
      data: [0.012, 0.015, 0.04, 0.9, 0.7, 0.2],
      lineTension: 0.3,
      fill: false,
      borderColor: 'red',
      backgroundColor: 'transparent',
      pointBorderColor: 'red',
      pointBackgroundColor: 'lightgreen',
      pointRadius: 5,
      pointHoverRadius: 15,
      pointHitRadius: 30,
      pointBorderWidth: 2,
      pointStyle: 'rect'
    };

     this.gbpGraph = {
      label: "GBP",
      data: [0.12, 0.15, 0.4, 0.09, 0.17, 0.42],
      lineTension: 0.3,
      fill: false,
      borderColor: 'purple',
      backgroundColor: 'transparent',
      pointBorderColor: 'purple',
      pointBackgroundColor: 'lightgreen',
      pointRadius: 5,
      pointHoverRadius: 15,
      pointHitRadius: 30,
      pointBorderWidth: 2
    };

     this.mxnGraph = {
      label: "MXN",
      data: [1.1, 1.4, 1.7, 1.0, 1.1, 1.2],
      lineTension: 0.3,
      fill: false,
      borderColor: 'cyan',
      backgroundColor: 'transparent',
      pointBorderColor: 'cyan',
      pointBackgroundColor: 'lightgreen',
      pointRadius: 5,
      pointHoverRadius: 15,
      pointHitRadius: 30,
      pointBorderWidth: 2
    };

     this.aedGraph = {
      label: "AED",
      data: [1, 0.4, 0.7, 1, 1, 1.2],
      lineTension: 0.3,
      fill: false,
      borderColor: 'yellow',
      backgroundColor: 'transparent',
      pointBorderColor: 'yellow',
      pointBackgroundColor: 'lightgreen',
      pointRadius: 5,
      pointHoverRadius: 15,
      pointHitRadius: 30,
      pointBorderWidth: 2
    };

  }



  initChart() {

  

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],

        datasets: [this.usdGraph, this.gbpGraph, this.mxnGraph, this.aedGraph],

      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  getAllProducts() {

    this.appService.getAllProduct().subscribe(data => {

      if (data['status'] == 200) {

        this.names = data['data']

      } else {

        this.snackBar.open(`${data['message']}`, "Dismiss", {
          duration: 5000,
        });

      }

    }, (err) => {

      this.snackBar.open(`some error occured`, "Dismiss", {
        duration: 5000,
      });

      setTimeout(() => {
        this.router.navigate(['/500'])
      }, 500);

    });

  }


  checkRate(){

    this.rate = this.select

    this.initChart()
    
  }

}
