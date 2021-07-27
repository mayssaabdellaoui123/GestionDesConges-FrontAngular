import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../auth/ClientInfo';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public employees: Client[];

  constructor(private employeeService: ClientService){}

  ngOnInit() {
    this.getEmployees();
  } 

  public getEmployees(): void {
    this.employeeService.getClients().subscribe(
      (response: Client[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Client[] = [];
    for (const employee of this.employees) {
      if (employee.lastNameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.firstNameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

}