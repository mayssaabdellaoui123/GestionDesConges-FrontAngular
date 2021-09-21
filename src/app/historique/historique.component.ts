import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { historique } from '../auth/Historique';
import { ClientService } from '../client.service';
import { HistoriqueService } from '../historique.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  public Historique: historique[];
  public NbrHistorique :number;

////////////////////////////////////

private roles: string[];
public authority: string;
public authorityAdmin: string;
public authoritymanager : boolean = false ;
public authorityadmin : boolean = false ;
public authorityclient : boolean = false ;
public authoritydeliverer : boolean = false ;
public username : any;
public RoleAdmin: String
public authoritydepartmentboss: boolean = false;
public authoritygeneralmanager: boolean = false;
public authorityresponsable: boolean = false;
public authorityadministrativeoffice: boolean = false;
public usernameuser: string;
info : any ; 



///////////////////////////////////////

  constructor(private HistoryService: HistoriqueService,private route : Router , private tokenStorage: TokenStorgeService , private token:TokenStorgeService , private employeeService: ClientService) { }

  importance:string;
  action:string;

  ngOnInit(): void {


    this.importance='ALL';
    this.action='ALL';

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
                console.log("role admin if")
             this.authoritydepartmentboss = true;
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

      };

    ////////////////////////////////////
    //this.getHistoryByType() ;

    //this.getHistoryByAction();

    this.RetiveHistoriqueByFiltreAndAll();

    this.getNombreHistorique();
  }


  public RetiveHistoriqueByFiltre(type:string ,action:string): void {
    this.HistoryService.RetiveHistoriqueByFiltre(type,action).subscribe(
      (response: historique[]) => {

        
        this.Historique = response;

        console.log("hello");
        console.log(this.Historique);

       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public RetiveHistoriqueByFiltreAndAll():void{
    if(this.importance==='ALL' && this.action==='ALL'){
      this.getHistory();
    }
    else if(this.importance==='ALL'){
      console.log("inside RetiveHistoriqueByFiltreAndAll")
      console.log(this.Historique);

      this.RetiveHistoriqueByAction(this.action);
    }
    else if(this.action==='ALL') {
      this.getHistoryByType();
    }
    else{this.RetiveHistoriqueByFiltre(this.importance,this.action);}

  }

  public getHistoryByAction():void{
    if(this.action==='ALL'){
      this.getHistory();
    }
    else {
      this.RetiveHistoriqueByAction(this.action)
    }

  }


  public getHistoryByType():void{
    if(this.importance==='ALL'){
      this.getHistory();
    }
    else if (this.importance==='IMPORTANT'){
      this.getHistoryByTypeImportant();
    }
    else if (this.importance==='NOT_IMPORTANT'){
      this.getHistoryByTypeNotImportant();
    }
  }


  public getHistory(): void {
    this.HistoryService.getHistories().subscribe(
      (response: historique[]) => {

        
        this.Historique = response;
        console.log(this.Historique);

        console.log("hello");
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  reloadPage() {
    //this.router.navigate(['/account']) ;
    window.location.reload();
    
  }
  public getHistoryByTypeImportant(): void {
    this.HistoryService.RetiveHistoriqueByType("IMPORTANT").subscribe(
      (response: historique[]) => {

        
        this.Historique = response;
        console.log("IMPORTANT HISTORY");
        console.log(this.Historique);

        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public getHistoryByTypeNotImportant(): void {
    this.HistoryService.RetiveHistoriqueByType("NOT_IMPORTANT").subscribe(
      (response: historique[]) => {

        
        this.Historique = response;
        console.log("NOT_IMPORTANT HISTORY");
        console.log(this.Historique);

        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public getNombreHistorique(): void {
    this.HistoryService.getNombreHistorique().subscribe(
      (response:number) => {

        
        this.NbrHistorique = response;
       
        console.log("NbrHistorique");
       
        console.log(this.NbrHistorique);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }





  public RetiveHistoriqueByAction(action:string): void {
    this.HistoryService.RetiveHistoriqueByAction(action).subscribe(
      (response: historique[]) => {

        
        this.Historique = response;
        console.log("Action HISTORY");
        console.log(this.Historique);

        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }


  public RetiveHistoriqueByOwner(): void {
    this.HistoryService.RetiveHistoriqueByOwner(this.info.username).subscribe(
      (response: historique[]) => {

        
        this.Historique = response;
        console.log("Action HISTORY");
        console.log(this.Historique);

        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }










}
