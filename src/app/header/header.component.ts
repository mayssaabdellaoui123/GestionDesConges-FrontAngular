import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/user';
import { ClientService } from '../client.service';
import { DepartmentServiceService } from '../department-service.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  public DepartmentNamee: string;
  public MatriculeDepartment: string;

  
    info : any ; 
    classname : string = "active" ;

    toggleClass: string ;

    constructor(private route : Router , private tokenStorage: TokenStorgeService , private token:TokenStorgeService , private employeeService: ClientService, private DepartentService: DepartmentServiceService) { }
    
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

    }


    this.DepartentService.getMatriculeByUsename(this.info.username).subscribe(
      (response: string) => {
        console.log(this.info.username)
        this.MatriculeDepartment = response;
        console.log( this.MatriculeDepartment);
        

        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }




    )

    
       
  }
  
  logout() {
    this.token.signOut();
    this.route.navigateByUrl("home")
    .then(() => {
    window.location.reload();
  }); 
  }

  

  
}

