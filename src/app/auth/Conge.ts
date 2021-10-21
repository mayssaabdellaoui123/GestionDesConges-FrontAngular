export class Conge {
    //user
    idConge : number;
    dateDebut : string ;
    dateFin: string;
    type : string;
    dateSaisie: Date;
    avisPrimaire: string;
    avisFinale: string;
    validationPrimaire: boolean;
    validationFinale: boolean;

    userNameVF: string;




    constructor( type: string, dateDebut: string, dateFin: string ) {
        //user    
       this.type = type;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        
    }

    
}


export class Conge1 {
    //user
    idConge : number;
    dateDebut : Date ;
    dateFin: Date;
    type : string;
    dateSaisie: Date;
    avisPrimaire: string;
    avisFinale: string;
    validationPrimaire: boolean;
    validationFinale: boolean;
    matriculeOwnerVP: string;
    attente: boolean;
    attenteFinale: boolean;

    soldeThisYear: string ;
   soldeYear_1: string  ;
   soldeYear_2: string  ;
   total: string  ;
   nmbrDeJourConge: string ;
   RestDeJourConge: string ;
   datevalidationFinale: Date ;

   datevalidationPrimaire: Date;

   userNameVF: string;

    constructor(idConge : number, dateDebut: Date, dateFin: Date, type: string, dateSaisie: Date, avisPrimaire: string,  avisFinale: string,validationPrimaire: boolean,validationFinale: boolean,matriculeOwnerVP: string, attente: boolean, attenteFinale: boolean, soldeThisYear: string ,
        soldeYear_1: string  ,
        soldeYear_2: string  ,
        total: string  ,
        nmbrDeJourConge: string ,
        RestDeJourConge: string ,
        datevalidationFinale: Date,
        userNameVF: string,
        datevalidationPrimaire:Date) {
        //user
        this.idConge = idConge;
    
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
       
        this.type = type;
        this.dateSaisie = dateSaisie;
        this.avisPrimaire = avisPrimaire;
        this.avisFinale = avisFinale;
        this.validationPrimaire = validationPrimaire;
        this.validationFinale = validationFinale;
        this.matriculeOwnerVP = matriculeOwnerVP;
        this.attente=attente;
        this.attenteFinale=attenteFinale;

        this.soldeThisYear=soldeThisYear ;
      this.soldeYear_1= soldeYear_1  ;
      this.soldeYear_2= soldeYear_2  ;
      this.total= total  ;
      this.nmbrDeJourConge= nmbrDeJourConge ;
      this.RestDeJourConge= RestDeJourConge ;
      this.datevalidationFinale= datevalidationFinale ;

      this.userNameVF= userNameVF;
        
      this.datevalidationPrimaire=datevalidationPrimaire;
    }

    
}