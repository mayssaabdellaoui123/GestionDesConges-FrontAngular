import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../auth/EmployeInfo';
import { ClientService } from '../client.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-listemployeedep',
  templateUrl: './listemployeedep.component.html',
  styleUrls: ['./listemployeedep.component.css']
})
export class ListemployeedepComponent implements OnInit {
  info : any ;
  listEmployee: Client[];
 

  constructor(private serviceEmployee : ClientService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  ngOnInit(): void {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities() };

   this.getEmployeeByDepartment();
  }

  public getEmployeeByDepartment(): void {
    this.serviceEmployee.getEmployeeByDepartment(this.info.username).subscribe(
      (response:any) => {
       console.log("id conge inside ValidationPrimaireChefDep : "+ this.info.username );
       this.listEmployee = response;

             },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Client[] = [];
    for (const employee of this.listEmployee) {
      if (employee.lastNameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.firstNameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.usernameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.matricule.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.emailAddressUser.toLowerCase().indexOf(key.toLowerCase()) !== -1



      ) {
        results.push(employee);
      }
    }
    this.listEmployee = results;
    if (results.length === 0 || !key) {
      this.getEmployeeByDepartment();
    }
  }



}
