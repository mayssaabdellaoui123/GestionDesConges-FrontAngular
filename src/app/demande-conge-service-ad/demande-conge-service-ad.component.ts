import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Client } from '../auth/ClientInfo';
import { Conge1 } from '../auth/Conge';
import { DetailsUserConge } from '../auth/DetailsUserConge';
import { CongeService } from '../conge.service';
import { TokenStorgeService } from '../token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-demande-conge-service-ad',
  templateUrl: './demande-conge-service-ad.component.html',
  styleUrls: ['./demande-conge-service-ad.component.css']
})
export class DemandeCongeServiceADComponent implements OnInit {

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
  AvisFinaleSaisie: string;

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

 attenteFinale:  boolean;
  

 MatriculeOwnerVP: string

 fullname: string; 
 C: Client;
 

 //////////////////

 public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(private serviceConge : CongeService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  ngOnInit(): void {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities() };
      this.GetCongesForSA();
  }

  Next(index){
    this.add1 = +index
   }


  public GetCongesForSA(): void {
    console.log("this.Conge inside SA : ");
    this.serviceConge.GetCongesForSA().subscribe(
      (response: Conge1[]) => {
        this.Conge = response;
        console.log("this.Conge inside SA : ")
        console.log(this.Conge)

        console.log("this.Conge.attenteFinale inside SA : ")
        console.log(this.Conge[0].attenteFinale)
        
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public ValidationFinale(): void {
    console.log("id conge inside ValidationFinale : "+ this.idConge );
    this.serviceConge.ValidationFinale(this.idConge).subscribe(
      (response:void) => {
       console.log("id conge inside ValidationFinale : "+ this.idConge );
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
       this.attenteFinale = this.CongeModal.attenteFinale;

       



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
  this.serviceConge.getusernameUserByMatricule(MatriculeOwnerVP).subscribe(
    (response: Client) => {
      console.log("this.MatriculeOwnerVP")
      console.log(MatriculeOwnerVP)
      this.C = response
      console.log("this.fullname");
      console.log(this.C);
      this.fullname = this.C.firstNameUser + " "+ this.C.lastNameUser;
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

  AnnuleValidationFinale(){
    console.log(this.AvisFinaleSaisie);
    this.serviceConge.AnnuleValidationFinale(this.idConge,this.AvisFinaleSaisie).subscribe(
      (response:void) => {
        console.log("id conge inside AnnuleValidationFinale : "+ this.idConge );
        console.log("avis inside AnnuleValidationFinale : "+ this.AvisFinaleSaisie );
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

  

