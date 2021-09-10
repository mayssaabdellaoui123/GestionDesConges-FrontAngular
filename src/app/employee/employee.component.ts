import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Client } from '../auth/ClientInfo';
import { SignUpInfo } from '../auth/SignUpInfo';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public employees: Client[];
  form: any = {};
  private signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = 'Matricule Boss is not found !';
  imageFile
  
  constructor(private employeeService: ClientService,private authService: AuthService) { }

  ngOnInit(
    
  ): void {
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


  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.firstname,
      this.form.lastname,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.phone,
      this.form.address, 
      this.form.gender,
      this.form.workfield,
      this.form.dateofbirth, 
      this.form.matricule
      
      );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      //  this.employeeService.addImage(this.imageFile).subscribe();
        this.getEmployees();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  addImage(event:any){
    this.imageFile = event.target.files[0];
    
    console.log("mayssa");
  }

  reloadPage() {
    //this.router.navigate(['/account']) ;
    window.location.reload();
    
  }

  

}
