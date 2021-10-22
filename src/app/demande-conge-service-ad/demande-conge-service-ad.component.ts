import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Client } from '../auth/EmployeInfo';
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
 
  usernameVF: string;


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
 
 //////////////////////

 soldeThisYear: any ;
 soldeYear_1: string  ;
 soldeYear_2: string  ;
 total: string  ;
 nmbrDeJourConge: string ;
 RestDeJourConge: string ;
 datevalidationFinale: Date ;


 datevalidationFinaleString : string;

  TypeValidationFinale : boolean=true;

  dateSaisieString: string; 

  datevalidationPrimaire: Date;
 datevalidationPrimaireString: string;


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

  public ValidationFinalee(): void {
    console.log("id conge inside ValidationFinale 11 : "+ this.AvisFinaleSaisie + " " +this.soldeThisYear);
    console.log("this.info.username inside "+ this.info.username);
    this.serviceConge.ValidationFinale(this.info.username,this.idConge, this.soldeThisYear, this.soldeYear_1,this.soldeYear_2, this.total, this.nmbrDeJourConge, this.RestDeJourConge, this.avisFinale, this.TypeValidationFinale)
      .subscribe(
      (response:void) => {
       console.log("id conge inside ValidationFinale : "+ this.AvisFinaleSaisie + " " +this.soldeThisYear);
             },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  AnnuleValidationFinale(){
    console.log(this.AvisFinaleSaisie);
    this.serviceConge.ValidationFinale(this.info.username,this.idConge, this.soldeThisYear, this.soldeYear_1,this.soldeYear_2, this.total, this.nmbrDeJourConge, this.RestDeJourConge, this.avisFinale, !this.TypeValidationFinale).subscribe(
      (response:void) => {
        console.log("id conge inside AnnuleValidationFinale : "+ this.idConge );
        console.log("avis inside AnnuleValidationFinale : "+ this.AvisFinaleSaisie );
              },
       (error: HttpErrorResponse) => {
         alert(error.message);
       }

    )
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
        console.log("response : ",response);
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

       
       this.datevalidationPrimaire= this.CongeModal.datevalidationPrimaire;

       this.datevalidationPrimaireString = this.datevalidationPrimaire.toString().substring(0,10)+" || "+this.datevalidationPrimaire.toString().substring(11,20);

       this.dateSaisieString = this.dateSaisie.toString().substring(0,10)+" || "+this.dateSaisie.toString().substring(11,20);

      
       this.soldeThisYear=this.CongeModal.soldeThisYear ;
         this.soldeYear_1= this.CongeModal.soldeYear_1  ;
        this.soldeYear_2= this.CongeModal.soldeYear_2  ;
        this.total= this.CongeModal.total  ;
        this.nmbrDeJourConge= this.CongeModal.nmbrDeJourConge ;
        this.RestDeJourConge= this.CongeModal.RestDeJourConge ;
        this.datevalidationFinale= this.CongeModal.datevalidationFinale ;

        this.datevalidationFinaleString= this.datevalidationFinale.toString().substring(0,10);

        this.dateSaisieString = this.dateSaisie.toString().substring(0,10)+" || "+this.dateSaisie.toString().substring(11,20);



        
      this.usernameVF= this.CongeModal.userNameVF;

       console.log("inside congeModal psoldeThisYear: "+ this.soldeThisYear);

       
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

  


  Refuser() {
    this.shown = false;
    this.hidden = true;  }


  




  }

  

