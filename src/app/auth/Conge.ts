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