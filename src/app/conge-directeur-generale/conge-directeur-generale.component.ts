import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../auth/AdminInfo';
import { Client } from '../auth/ClientInfo';
import { Conge1 } from '../auth/Conge';
import { DetailsUserConge } from '../auth/DetailsUserConge';
import { CongeService } from '../conge.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-conge-directeur-generale',
  templateUrl: './conge-directeur-generale.component.html',
  styleUrls: ['./conge-directeur-generale.component.css']
})
export class CongeDirecteurGeneraleComponent implements OnInit {

  constructor(private serviceConge : CongeService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }
  info : any ;
 
  Conge : Conge1[];
  add1: number = -1;
  DetailsUserConge: DetailsUserConge;
  firstname : string;
  lastname : string;
  matricule: string;
   tache: string;
   department: string;
   phone: string;
   matriculeBossdep:  string;
   matriculeRemplaceur: string;
  CongeModal : Conge1;
  idConge : number;
  validationtest : boolean ;
  validationPrimaire: boolean;
  validationFinale: boolean = false;
  AvisPrimaireSaisie: string;

  shown: boolean = true;
  hidden: boolean = false;
  /////////////////////////////////

  dateDebut : Date ;
  dateFin: Date;
  type : string;
 dateSaisie: Date;
 avisPrimaire: string;
 avisFinale: string;
 attenteConge: boolean;
  

 MatriculeOwnerVP: string

 fullname: string; 
 A: Admin;
 

 //////////////////

 public show:boolean = false;
  public buttonName:any = 'Show';




  ngOnInit(): void {
   
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities() };


      this.getCongeDirecteur();
   

  }


  Next(index){
    this.add1 = +index
   }

   public getCongeDirecteur(): void {
    this.serviceConge.GetCongesForDirecGen().subscribe(
      (response: Conge1[]) => {
        this.Conge = response;
        console.log(this.Conge)
        
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public ValidationPrimaireChefDep(): void {
    this.serviceConge.ValidationPrimaireChefDep(this.idConge,this.info.username).subscribe(
      (response:void) => {
       console.log("id conge inside ValidationPrimaireChefDep : "+ this.idConge );
             },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  /*hneeeeee*/
/************************************************************************ */
vueDetails(){
  let selecteduser = this.Conge[this.add1]
  let data = selecteduser.idConge;
 // console.log(idConge);
   console.log(data);
   this.serviceConge.getDetailsUserByIdConge(data).subscribe(
    (response: DetailsUserConge) => {
      this.add1 = -1;
      this.DetailsUserConge = response;
      console.log(this.DetailsUserConge.firstname)
      this.firstname = this.DetailsUserConge.firstname;
      this.lastname = this.DetailsUserConge.lastname;
      this.matricule = this.DetailsUserConge.matricule;
      this.tache = this.DetailsUserConge.tache;
      this.department = this.DetailsUserConge.department;
      this.phone = this.DetailsUserConge.phone;
      this.matriculeBossdep = this.DetailsUserConge.matriculeBossdep;
      this.matriculeRemplaceur = this.DetailsUserConge.matriculeRemplaceur;
      this.idConge=data;
   
    },
    (error: HttpErrorResponse) => {
      alert(error.message);

    }
   )
   this.serviceConge.getCongeByIdConge(data).subscribe(
    (response: Conge1) => {
     
      this.CongeModal = response;
      console.log( this.CongeModal);
      this.dateDebut = this.CongeModal.dateDebut;
      this.dateFin = this.CongeModal.dateFin;
     this.type = this.CongeModal.type;
     this.dateSaisie = this.CongeModal.dateSaisie;
     this.avisPrimaire = this.CongeModal.avisPrimaire;
     this.avisFinale = this.CongeModal.avisFinale;
     this.MatriculeOwnerVP = this.CongeModal.matriculeOwnerVP;
     this.validationPrimaire = this.CongeModal.validationPrimaire;
     this.validationFinale = this.CongeModal.validationFinale;
     this.attenteConge = this.CongeModal.attente;

     console.log("type: "+ this.type);
     console.log("MatriculeOwnerVP: "+ this.MatriculeOwnerVP);

     this.getusernameUserByMatricule(this.MatriculeOwnerVP);

     
    },
    (error: HttpErrorResponse) => {
      alert(error.message);

    }
   )

   
}

public getusernameUserByMatricule(MatriculeOwnerVP: string): void{
  console.log("inside get ... ");
  console.log("matricule" + MatriculeOwnerVP);
this.serviceConge.getusernameUserByMatriculeForDirecteur(MatriculeOwnerVP).subscribe(
  (response: Admin) => {
    console.log("this.MatriculeOwnerVP")
    console.log(MatriculeOwnerVP)
    this.A = response
    console.log("this.fullname");
    console.log(this.A);
    this.fullname = this.A.firstNameUser + " "+ this.A.lastNameUser;
    console.log("this.fullname");
    console.log(this.fullname);

  },
  (error: HttpErrorResponse) => {
    alert(error.message);

  }

 )}





reloadPage() {
  //this.router.navigate(['/account']) ;
  window.location.reload();
  
}


AnnuleValidationPrimaireChefDep(){
  console.log(this.AvisPrimaireSaisie);
  this.serviceConge.AnnuleValidationPrimaireChefDep(this.idConge,this.info.username,this.AvisPrimaireSaisie).subscribe(
    (response:void) => {
      console.log("id conge inside ValidationPrimaireChefDep : "+ this.idConge );
      console.log("avis inside ValidationPrimaireChefDep : "+ this.AvisPrimaireSaisie );
            },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }

  )
}


Refuser() {
  this.shown = false;
  this.hidden = true;  }





}