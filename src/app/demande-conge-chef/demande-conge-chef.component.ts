import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Conge1 } from '../auth/Conge';
import { DetailsUserConge } from '../auth/DetailsUserConge';
import { CongeService } from '../conge.service';
import { TokenStorgeService } from '../token-storage.service';

@Component({
  selector: 'app-demande-conge-chef',
  templateUrl: './demande-conge-chef.component.html',
  styleUrls: ['./demande-conge-chef.component.css']
})
export class DemandeCongeChefComponent implements OnInit {
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
  /////////////////////////////////

  dateDebut : Date ;
  dateFin: Date;
  type : string;
 dateSaisie: Date;
 avisPrimaire: string;
 avisFinale: string;
 
 MatriculeOwnerVP: string


  constructor(private serviceConge : CongeService,private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  ngOnInit(): void {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities() };
      this.getCongeChef();
  }

  Next(index){
    this.add1 = +index
   }


  public getCongeChef(): void {
    this.serviceConge.GetCongesForChefDep(this.info.username).subscribe(
      (response: Conge1[]) => {
        this.Conge = response;
        console.log(this.Conge)
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

/*hneeeeee*/
  vueDetails(){
    let selectedproduct = this.Conge[this.add1]
    let data = selectedproduct.idConge;
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
       this.MatriculeOwnerVP = this.CongeModal.MatriculeOwnerVP;

       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);

      }
     )
  }

}
