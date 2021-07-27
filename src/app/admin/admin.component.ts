import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Admin } from '../auth/AdminInfo';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public employees: Admin[];
  public editEmployee: Admin;
  public deleteEmployee: Admin;
  public absentEmployee: Admin;
  public admin : Admin;

  constructor(private employeeService: AdminService){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getClients().subscribe(
      (response: Admin[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.employeeService.addClient(addForm.value).subscribe(
      (response: Admin) => {
        console.log(response);
        this.getEmployees();
        alert("Admin added successfuly...");
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateEmloyee(employee: Admin): void {
    this.employeeService.updateClient(employee).subscribe(
      (response: Admin) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => { 
        alert(error.message);
        console.log(employee);
      }
    );
  }

  public onDeleteEmloyee(employeeId: number): void {
    this.employeeService.deleteClient(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addAbsence(employeeId: number) : void {
    this.employeeService.getByID(employeeId).subscribe(
      (response: Admin) => {
        console.log(response);
        this.admin = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
    this.employeeService.addAbsence(employeeId , this.admin ).subscribe(
      (response: Admin) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Admin[] = [];
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

  public onOpenModal(employee: Admin, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    if (mode === 'absence') {
      this.absentEmployee = employee;
      button.setAttribute('data-target', '#absenceEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }}