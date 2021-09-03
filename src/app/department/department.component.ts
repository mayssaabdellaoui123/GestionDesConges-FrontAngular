import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Department } from '../auth/Department';
import { DepartmentServiceService } from '../department-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public Department: Department[];
  form: any = {};
  private department: Department;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = 'Email is not Valid !';

  constructor(private DepartmentService: DepartmentServiceService,private authService: AuthService) { }

  ngOnInit(): void {
    this.getDepartment();
  }

  public getDepartment(): void {
    this.DepartmentService.getDepartment().subscribe(
      (response: Department[]) => {
        this.Department = response;
        console.log(this.Department);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }


  onSubmit() {
    console.log(this.form);

    this.department = new Department(
      this.form.nomDepartement,
      this.form.matriculeBoss
      
      );

    this.DepartmentService.addClient(this.department).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.getDepartment();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
