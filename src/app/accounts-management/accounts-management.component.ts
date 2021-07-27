import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-accounts-management',
  templateUrl: './accounts-management.component.html',
  styleUrls: ['./accounts-management.component.css']
})
export class AccountsManagementComponent implements OnInit {
  goToDeliverer : boolean = false; 
  addManagerClicked : boolean = false; 
  goToAdmin : boolean = false ; 
  constructor(router:Router, private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info : any ; 

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
    }
  }

addManager(){ 
  this.addManagerClicked = true; 
  this.goToAdmin = false ; 
  this.goToDeliverer = false; 

}
GoToDeliverer(){
  this.goToDeliverer = true; 
  this.addManagerClicked=false; 
  this.goToAdmin = false ; 
}
GoToAdmin(){
  this.goToDeliverer = false; 
  this.addManagerClicked=false; 
  this.goToAdmin = true ; 
}
reloadPage() {
  window.location.reload();
}
}
