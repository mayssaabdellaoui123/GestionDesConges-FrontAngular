export class historique {
    idHistorique: number;
    Description: string;
    Date: string ;
    Owner: string ;
    Action:string ;
    Typehistorique:string ;



    
    constructor(idHistorique : number ,Description: string, Date: string,Owner: string, Action: string, Typehistorique: string ) {
        //user    
        this.idHistorique = idHistorique;
        this.Description = Description;
        this.Date = Date;
        this.Owner = Owner;
        this.Action = Action;
        this.Typehistorique = Typehistorique;}
     




}