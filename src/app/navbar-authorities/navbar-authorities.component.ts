import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartService } from '../chart.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-navbar-authorities',
  templateUrl: './navbar-authorities.component.html',
  styleUrls: ['./navbar-authorities.component.css']
})
export class NavbarAuthoritiesComponent implements OnInit {

  show : boolean=false; 
  JAN : number ;
  FEB : number ;
  MAR : number ;
  MAY : number ;
  JUN : number ;
  APR : number ;
  public canvas: any;
  public ctx: any;
  public labels: any = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
  public dataCases: any = {
    chart1: []
  };


  

  constructor(private service : ChartService) { }

  ngOnInit(): void {
    
    this.getJAN();
    this.getFEB();
    this.getMAR();
    this.getAPR();
    this.getMAY();   
    this.getJUN();
    this.onCreate();
  }

  public onButton() : void {
    this.show=true;
    this.dataCases.chart1.push(this.JAN,this.FEB,this.MAR, this.APR , this.MAY , this.JUN)
    this.onCreate();
  }

  public onCreate() : void {
    console.log(this.dataCases);
    this.createLineChart(this.labels, this.dataCases, 'myChart');
  }

  public getJAN() : void{
    this.service.getJAN().subscribe(
      (response: number) => {
        console.log(response);
        this.JAN = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  public getFEB(): void {
    this.service.getFEB().subscribe(
      (response: number) => {
        console.log(response);
        this.FEB = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMAR(): void {
    this.service.getMAR().subscribe(
      (response: number) => {
        console.log(response);
        this.MAR = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAPR(): void {
    this.service.getAPR().subscribe(
      (response: number) => {
        console.log(response);
        this.APR = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getJUN(): void {
    this.service.getJUN().subscribe(
      (response: number) => {
        console.log(response);
        this.JUN = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getMAY(): void {
    this.service.getMAY().subscribe(
      (response: number) => {
        console.log(response);
        this.MAY = response;      
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private createLineChart(labels, dataCases, chartId) {
    this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');

    let chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "number of subscribers",
          data: dataCases.chart1,
          backgroundColor: '#ffbb33',
          borderColor: '#ffbb33',
          fill: false,
          borderWidth: 2
        }]
      },
      options: {
        title: {
          display: true,
          text: "Subscription By Month"
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        
      }
    });
  }

}