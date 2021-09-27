import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../auth/AdminInfo';
import { Client } from '../auth/ClientInfo';
import { ClientService } from '../client.service';
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
  public matriculeRemplaceur :string;
  form: any = {};
  formMAt: any={};


  constructor(private serviceClient2 : ClientService,private serviceClient : AdminService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService ) { }

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
        this.editEmployee=this.employee;
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


  public AffectationRemplaceur(): void {
    console.log("this.matriculeRemplaceur ");
    console.log(this.matriculeRemplaceur);
    this.serviceClient2.AffectationRemplaceur( this.matriculeRemplaceur).subscribe(
      (response: Client) => {
        console.log("inside affectation remplaceur ");
        console.log(response);
        this.edit=false;
        this.getClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(Client);
      }
    );
  }


  public DesAffectationRemplaceur(): void {
    console.log("this.matriculeRemplaceur ");
    console.log(this.matriculeRemplaceur);
    this.serviceClient2.DesAffectationRemplaceur( this.matriculeRemplaceur).subscribe(
      (response: Client) => {
        console.log("inside Desaffectation remplaceur ");
        console.log(response);
        this.edit=false;
        this.getClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(Client);
      }
    );
  }



  reloadPage() {
    //this.router.navigate(['/account']) ;
    window.location.reload();
    
  }



}