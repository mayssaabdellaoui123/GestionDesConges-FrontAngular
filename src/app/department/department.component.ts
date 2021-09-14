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
  public deletedepartment: Department;
  public editdepartment: Department;

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

    this.DepartmentService.addDepartment(this.department).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.getDepartment();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  public onUpdateDepartments(Department: Department): void{
    this.DepartmentService.updateDepartment(Department).subscribe(
      /*(response: Department) => {
        console.log(response);
        this.getDepartment();
        this.reloadPage();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }*/

      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.getDepartment();
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }

    )  }


    public onOpenModal(department: Department,mode: string): void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button')
      button.type='button';
      button.style.display='none';
      button.setAttribute('data-toggle','modal')
      if (mode == 'add') {
        button.setAttribute('data-target','#addShelfModal')
      }  
      if (mode == 'edit') {
        this.editdepartment = department;
        button.setAttribute('data-target','#editDepartmentModal')
      }  
      if (mode == 'delete') {
        this.deletedepartment = department;
        button.setAttribute('data-target','#deleteDepartmentModal')
      }  
      container.appendChild(button);
      button.click();   
  }




  public onDeleteShelves(DepartmentId: number): void{
    this.DepartmentService.deleteDepartment(DepartmentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getDepartment();
        this.reloadPage();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }

    )
  
    close() ;
  }


  


    reloadPage() {
      //this.router.navigate(['/account']) ;
      window.location.reload();
      
    }


}
