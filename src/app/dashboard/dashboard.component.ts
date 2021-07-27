import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accounts : boolean = true ; 
  constructor() { }

  ngOnInit(): void {
  }

  onAccounts() : void {
    this.accounts=true;
  }
}
