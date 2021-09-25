export class Conge {
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





    constructor( type: string, dateDebut: Date, dateFin: Date ) {
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
    MatriculeOwnerVP: string;


    constructor(idConge : number, dateDebut: Date, dateFin: Date, type: string, dateSaisie: Date, avisPrimaire: string,  avisFinale: string,validationPrimaire: boolean,validationFinale: boolean,MatriculeOwnerVP: string) {
        //user
        this.idConge = idConge;
    
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.type = type;
        this.type = type;
        this.dateSaisie = dateSaisie;
        this.avisPrimaire = avisPrimaire;
        this.avisFinale = avisFinale;
        this.validationPrimaire = validationPrimaire;
        this.validationFinale = validationFinale;
        this.MatriculeOwnerVP = MatriculeOwnerVP;
        
    }

    
}