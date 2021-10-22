import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Conge, Conge1 } from '../auth/Conge';
import { CongeService } from '../conge.service';
import { AuthService } from '../auth.service';
import { TokenStorgeService } from '../token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DetailsUserConge } from '../auth/DetailsUserConge';
import { Client } from '../auth/EmployeInfo';
/*import * as jspdf from 'jspdf'*/
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

import { ClientService } from '../client.service';



@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {

 /* @ViewChild('content', {static: false}) el!: ElementRef;

  makePDF() {
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });
   

  }*/

 


  ListConge: Conge1[];
  info : any ; 
  form: any = {};

  
  private conge: Conge;

  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = 'Email is not Valid !';
  ///////////////////////////

  
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

 attenteFinale:  boolean;
  

 MatriculeOwnerVP: string

 fullname: string; 
 C: Client;
 dateRange: string;
 dateDebutRange: string;
 dateFinRange: string;

 //////////////////////

 soldeThisYear: any ;
 soldeYear_1: string  ;
 soldeYear_2: string  ;
 total: string  ;
 nmbrDeJourConge: string ;
 RestDeJourConge: string ;
 datevalidationFinale: Date ;


 datevalidationFinaleString : string;

 usernameVF: string;

 datevalidationPrimaire: Date;
 datevalidationPrimaireString: string;

 dateSaisieString: string; 

  ///////////////////////////


  constructor(private serviceClient : ClientService,private token:TokenStorgeService ,private CongeService: CongeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
   
      authorities: this.token.getAuthorities()

    };

    this.GetCongesForEmp();
     
   
  }

  public GetCongesForEmp(): void {
    this.CongeService.GetCongesForEmp(this.info.username).subscribe(
      (response: Conge1[]) => {
        this.ListConge = response;
        console.log(this.ListConge)
        
       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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




    /*Vue Details */

    vueDetails(){
      console.log("inside");
      let selecteduser = this.ListConge[this.add1];
      console.log("selecteduser ",selecteduser);
      let data = selecteduser.idConge;
     // console.log(idConge);
       console.log("data:"+ data);
       this.CongeService.getDetailsUserByIdConge(data).subscribe(
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
       this.CongeService.getCongeByIdConge(data).subscribe(
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



      console.log("datevalidationPrimaire ",this.datevalidationPrimaire);

       console.log("type: "+ this.type);
      console.log("MatriculeOwnerVP: "+ this.MatriculeOwnerVP);

      this.getusernameUserByMatricule(this.MatriculeOwnerVP);
         
      // whatever you wanna add add it on top of this :

       this.soldeThisYear=this.CongeModal.soldeThisYear ;
       this.soldeYear_1= this.CongeModal.soldeYear_1  ;
      this.soldeYear_2= this.CongeModal.soldeYear_2  ;
      this.total= this.CongeModal.total  ;
      this.nmbrDeJourConge= this.CongeModal.nmbrDeJourConge ;
      this.RestDeJourConge= this.CongeModal.RestDeJourConge ;
      this.datevalidationFinale= this.CongeModal.datevalidationFinale ;

      this.datevalidationFinaleString= this.datevalidationFinale.toString().substring(0,10);


      this.usernameVF= this.CongeModal.userNameVF;

  
      
         
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
  
        }

        

       )
  
       /* get ownerVPusername



       this.serviceClient.getUserNameFromMatricule(this.matricule).subscribe(
        (response: string) => {
          console.log("getUserNameFromMatricule response inside : "+ response);

          this.UserNameOwnerVP=response ;
          
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
  
        }
       )
*/







       
    }


    public getusernameUserByMatricule(MatriculeOwnerVP: string): void{
      console.log("inside get ... ");
      console.log("matricule" + MatriculeOwnerVP);
    this.CongeService.getusernameUserByMatricule(MatriculeOwnerVP).subscribe(
      (response: Client) => {
        console.log("this.MatriculeOwnerVP")
        console.log(MatriculeOwnerVP)
        this.C = response
        console.log("this.c");
        console.log(this.C);
        this.fullname = this.C.firstNameUser + " "+ this.C.lastNameUser;
        console.log("this.fullname");
        console.log(this.fullname);
  
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
  
      }
  
     )}


     Next(index){
      this.add1 = +index
     }


     download(){
       var element = document.getElementById('pdf')
       html2canvas(element).then((canvas) => {
         console.log(canvas)

        /* var imgData = canvas.toDataURL('image/png')

         var doc = new jspdf.jsPDF();

         doc.addImage(imgData,0,0,208,500)
         doc.save("image.pdf")*/

         var imgWidth = 190;
         var imgHeight = canvas.height * imgWidth / canvas.width;
         const contentDataURL = canvas.toDataURL('image/png')
         let pdf = new jspdf('p', 'mm', 'a4');
         var position = 0;
         pdf.addImage(contentDataURL, 'PNG', 10, 20, imgWidth, imgHeight)
         pdf.save('newPDF.pdf');



       })
     }








  }
