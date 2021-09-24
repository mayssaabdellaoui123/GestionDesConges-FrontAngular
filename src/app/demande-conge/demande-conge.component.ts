import { Component, OnInit } from '@angular/core';
import { Conge } from '../auth/Conge';
import { CongeService } from '../conge.service';
import { AuthService } from '../auth.service';
import { TokenStorgeService } from '../token-storage.service';


@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {



  info : any ; 
  form: any = {};

  private conge: Conge;

  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = 'Email is not Valid !';


  constructor(private token:TokenStorgeService ,private CongeService: CongeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
   
      authorities: this.token.getAuthorities()
    };

     
   
  }

  


  onSubmit(){
    console.log(this.form);
    this.conge = new Conge(
      this.form.type,
      this.form.dateDebut,
      this.form.dateFin,
      );

      /*this.CongeService.addConge(this.conge).subscribe(*/
        this.CongeService.addCongeEtAffectation(this.conge,this.info.username).subscribe(
        data => {
          console.log("inside add Conge")
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
          //this.getDepartment();
  
          this.reloadPage();
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
        }
      );

  }

  


  reloadPage() {
    //this.router.navigate(['/account']) ;
    window.location.reload();
    
  }




  public AffectEmployeConge(idConge: number,matricule: string): void{
    this.CongeService.AffectEmployeConge(idConge,matricule).subscribe(
      
      data => {
        console.log("AffectEmployeConge");
        console.log(data);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
  
    )  }








  }
