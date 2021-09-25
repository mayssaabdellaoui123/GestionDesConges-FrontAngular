export class DetailsUserConge  {

   firstname:  string ;
   lastname: string  ;
   matricule: string;
   tache: string;
   department: string;
   phone: string;
   matriculeBossdep:  string;
   matriculeRemplaceur: string;


   constructor( firstname: string, lastname: string ,matricule: string, tache: string,  department: string,phone: string,matriculeBossdep:  string,matriculeRemplaceur: string ){
      this.firstname = firstname;
      this.lastname = lastname;
      this.matricule = matricule;
      this.tache = tache;
      this.department = department;
      this.phone = phone;
      this.matriculeBossdep = matriculeBossdep;
      this.matriculeRemplaceur = matriculeRemplaceur;
   }



}