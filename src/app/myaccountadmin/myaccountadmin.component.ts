import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../auth/AdminInfo';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-myaccountadmin',
  templateUrl: './myaccountadmin.component.html',
  styleUrls: ['./myaccountadmin.component.css']
})
export class MyaccountadminComponent implements OnInit {

  employee : Admin;
  editEmployee : Admin;
  edit : boolean = false ; 
  info : any ;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;

  constructor(private serviceClient : AdminService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()};
    this.getClient();
  }

  public getClient(): void {
    this.serviceClient.getAdminByUsername(this.info.username).subscribe(
      (response: Admin) => {
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

  public updateClient(employee: Admin): void {
    this.serviceClient.updateClient(employee).subscribe(
      (response: Admin) => {
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