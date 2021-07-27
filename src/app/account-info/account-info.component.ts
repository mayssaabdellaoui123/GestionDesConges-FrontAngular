import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../auth/ClientInfo';
import { ClientService } from '../client.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {
  employee : Client;
  editEmployee : Client;
  edit : boolean = false ; 
  info : any ;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;

  constructor(private route : Router , private serviceClient : ClientService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()};
    this.getClient();
  }

  public getClient(): void {
    this.serviceClient.getClientByUsername(this.info.username).subscribe(
      (response: Client) => {
        this.employee = response;
        console.log(this.employee);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public Onedit() : void {
    this.edit=true;
    this.editEmployee=this.employee;
  }

  public resetEdit() : void {
    this.edit = false; 
  }

  public updateClient(employee: Client): void {
    this.serviceClient.updateClient(employee).subscribe(
      (response: Client) => {
        console.log(response);
        this.edit=false;
        this.getClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(employee);
      }
    );
  }
}
