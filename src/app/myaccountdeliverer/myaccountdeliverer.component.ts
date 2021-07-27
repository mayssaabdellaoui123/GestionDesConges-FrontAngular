import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Deliverer } from '../auth/DelivererInfo';
import { DelivererService } from '../deliverer.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-myaccountdeliverer',
  templateUrl: './myaccountdeliverer.component.html',
  styleUrls: ['./myaccountdeliverer.component.css']
})
export class MyaccountdelivererComponent implements OnInit {
  employee : Deliverer;
  editEmployee : Deliverer;
  edit : boolean = false ; 
  info : any ;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;

  constructor(private serviceClient : DelivererService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()};
    this.getClient();
  }

  public getClient(): void {
    this.serviceClient.getDelivererByUsername(this.info.username).subscribe(
      (response: Deliverer) => {
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

  public updateClient(employee: Deliverer): void {
    this.serviceClient.updateClient(employee).subscribe(
      (response: Deliverer) => {
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