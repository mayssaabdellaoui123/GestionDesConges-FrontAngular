export class Department {
    //user
    idDepartement : number;
    nomDepartement : string ;
    matriculeBoss: string;

    constructor(nomDepartement: string, matriculeBoss: string) {
        //user    
       
        this.nomDepartement = nomDepartement;
        this.matriculeBoss = matriculeBoss;
        
    }

    
}

export class Department1 {
    //user
    idDepartement : number;
    nomDepartement : string ;
    matriculeBoss: string;
    nomBoss: string;

    constructor(nomDepartement: string, matriculeBoss: string, nomBoss:string) {
        //user    
       
        this.nomDepartement = nomDepartement;
        this.matriculeBoss = matriculeBoss;
        this.nomBoss = nomBoss;
        
    }

    
}