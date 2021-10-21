import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from '../auth/AdminInfo';
import { Client } from '../auth/ClientInfo';
import { User } from '../auth/user';
import { ClientService } from '../client.service';
import { TokenStorgeService } from '../token-storage.service';
import { CongeService } from '../conge.service';

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

  public RoleAdmin: String
  public authoritydepartmentboss: boolean = false;
  public authoritygeneralmanager: boolean = false;
  public authorityresponsable: boolean = false;
  public authorityadministrativeoffice: boolean = false;

  alertAffect = false;
  alertdesaffect = false;

  //////////////

  public remplaceurs:User[];


  constructor(private serviceConge : CongeService, private employeeService: ClientService, private serviceClient2 : ClientService,private serviceClient : AdminService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()};


      if (this.tokenStorage.getToken()) {
        this.roles = this.tokenStorage.getAuthorities();
        this.roles.every(role => {
          if (role === 'ROLE_ADMIN') {
            this.authority = 'admin';
            this.authorityadmin = true;
  
  
            this.employeeService.getRoleByusername(this.info.username).subscribe(
              (response: string) => {
                console.log("response");
                console.log(response);
                this.RoleAdmin = response;
                console.log("response == "+response );
                if (this.RoleAdmin === 'DEPARTMENT_BOSS') {
                  console.log("role admin if");
               this.authoritydepartmentboss = true;


               

      console.log("this.info.username", this.info.username);
      this.retriveRemplaceur(this.info.username);


               return false;
             } else if (this.RoleAdmin  === 'GENERAL_MANAGER') {
               
               this.authoritygeneralmanager = true;
               return false;
             }else if (this.RoleAdmin  === 'RESPONSIBLE') {
              
               this.authorityresponsable = true;
               return false;
             }else if (this.RoleAdmin  === 'ADMINISTRATIVE_OFFICE') {
              
               this.authorityadministrativeoffice = true;
               return false;
             }
             
      
              },
              (error: HttpErrorResponse) => {
                console.log("error");
                alert(error.message);
              }
      
              
            );
      
          
         
  
  
  
  
            return false;
          } else if (role === 'ROLE_CLIENT') {
            this.authority = 'client';
            this.authorityclient = true;
            return false;
          }else if (role === 'ROLE_DELIVERER') {
            this.authority = 'deliverer';
            this.authoritydeliverer = true;
            return false;
          }else if (role === 'ROLE_MANAGER') {
            this.authority = 'manager';
            this.authoritymanager = true;
            return false;
          }
          this.authority = 'user';
          return true;
        });
  
      }








    this.getClient();
  }

  public retriveRemplaceur(username:string): void {
    console.log("username inside : " ,username);
    this.serviceConge.retriveRemplaceur(username).subscribe(
      (response: any) => {
        console.log("username inside : " ,username);
        this.remplaceurs = response;
        console.log("remplaceurs.matricule : " ,this.remplaceurs[0].matricule);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
        this.alertAffect = true;
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
        this.alertdesaffect = true;
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