export class DetailsUserConge  {

   firstname:  string ;
   lastname: string  ;
   matricule: string;
   tache: string;
   department: string;
   phone: string;
   matriculeBossdep:  string;
   matriculeRemplaceur: string;

   soldeThisYear: string ;
   soldeYear_1: string  ;
   soldeYear_2: string  ;
   total: string  ;
   nmbrDeJourConge: string ;
   RestDeJourConge: string ;
   datevalidationFinale: Date ;



   constructor( firstname: string, lastname: string ,matricule: string, tache: string,  department: string,phone: string,matriculeBossdep:  string,matriculeRemplaceur: string, soldeThisYear: string ,
      soldeYear_1: string  ,
      soldeYear_2: string  ,
      total: string  ,
      nmbrDeJourConge: string ,
      RestDeJourConge: string ,
      datevalidationFinale: Date  ){

      this.firstname = firstname;
      this.lastname = lastname;
      this.matricule = matricule;
      this.tache = tache;
      this.department = department;
      this.phone = phone;
      this.matriculeBossdep = matriculeBossdep;
      this.matriculeRemplaceur = matriculeRemplaceur;
      
      this.soldeThisYear=soldeThisYear ;
      this.soldeYear_1= soldeYear_1  ;
      this.soldeYear_2= soldeYear_2  ;
      this.total= total  ;
      this.nmbrDeJourConge= nmbrDeJourConge ;
      this.RestDeJourConge= RestDeJourConge ;
      this.datevalidationFinale= datevalidationFinale ;
   }



}