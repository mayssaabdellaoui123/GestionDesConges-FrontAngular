import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/user';
import { ClientService } from '../client.service';
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

  
    info : any ; 
    constructor(private route : Router , private tokenStorage: TokenStorgeService , private token:TokenStorgeService , private employeeService: ClientService) { }
    
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
      this.employeeService.getRoleByusername(this.username).subscribe(
        (response: String) => {
          this.RoleAdmin = response;
          console.log(this.RoleAdmin );
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );


          if (this.RoleAdmin === 'DEPARTMENT_BOSS') {
            this.authorityAdmin = 'department boss';
            this.authoritydepartmentboss = true;
            return false;
          } else if (this.RoleAdmin  === 'GENERAL_MANAGER') {
            this.authority = 'general manager';
            this.authoritygeneralmanager = true;
            return false;
          }else if (this.RoleAdmin  === 'RESPONSIBLE') {
            this.authority = 'responsible';
            this.authorityresponsable = true;
            return false;
          }else if (this.RoleAdmin  === 'ADMINISTRATIVE_OFFICE') {
            this.authority = 'administrative office ';
            this.authorityadministrativeoffice = true;
            return false;
          }
          
        ;


    }

   

    
  }
  
  logout() {
    this.token.signOut();
    this.route.navigateByUrl("home")
    .then(() => {
    window.location.reload();
  }); 
  }

  

  
}

