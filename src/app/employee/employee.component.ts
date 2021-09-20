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

  public deleteclient: Client;
  public editdeclient: Client;
  
  constructor(private employeeService: ClientService,private authService: AuthService) { }

  // back controller : ClientRessources 

  ngOnInit(
    
  ): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getClients1().subscribe(
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
        this.reloadPage();
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

  
  public onDeleteShelves(clientId: number): void{
    this.employeeService.deleteClient(clientId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
        this.reloadPage();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }

    )
  
    close() ;
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Client[] = [];
    for (const employee of this.employees) {
      if (employee.lastNameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.firstNameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.usernameUser.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.matricule.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.emailAddressUser.toLowerCase().indexOf(key.toLowerCase()) !== -1



      ) {
        results.push(employee);
      }
    }
    this.employees = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }


  public onOpenModal(employee: Client,mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button')
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal')
    if (mode == 'add') {
      button.setAttribute('data-target','#addShelfModal')
    }  
    if (mode == 'edit') {
      this.editdeclient = employee;
      button.setAttribute('data-target','#editEmployeeModal')
    }  
    if (mode == 'delete') {
      this.deleteclient = employee;
      button.setAttribute('data-target','#deleteEmployeeModal')
    }  
    container.appendChild(button);
    button.click();   
}


public onUpdateEmployees(Employee: Client): void{
  this.employeeService.updateClient(Employee).subscribe(
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
      this.getEmployees();
      this.reloadPage();
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
      this.isSignUpFailed = true;
    }

  )  }




  

}
