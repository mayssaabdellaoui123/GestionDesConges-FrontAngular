export class Client {
    //user
    idUser : number;
    phoneNumberUser : string ;
    lastNameUser: string;
    firstNameUser: string;
    usernameUser: string;
    emailAddressUser: string;
    passwordUser: string;
    //addressUser: string; 
    roleUser : string; 
    updatedPassword : boolean;
    nbaccessUser : number ;
    //salary : number ;
    enabled :boolean;
    locked : boolean;
    dateBirthUser : Date;
    //client
    genderClient: string;
    workfieldClient : string;
    Latitude : number;
    //Longitude : number;
    subscriptionDate : Date;
    subMonth : string;
     matricule : string;
    Image_URL: string;
    soldeDeConge:  number;

    constructor(id : number ,firstname: string, lastname: string,username: string, email: string, password: string , 
        phone:string, /*address:string , */gender:string , workfield : string , birthdate : Date,
        /*latitude : number, longitude : number ,*/ subscriptionDate : Date , subMonth : string , role : string , 
        updated : boolean , nb : number ,/* salary: number ,*/ enable : boolean , lock : boolean, matricule : string, soldeDeConge:  number) {
        //user    
        this.idUser = id;
        this.firstNameUser = firstname;
        this.lastNameUser = lastname;
        this.usernameUser = username;
        this.emailAddressUser = email;
        this.passwordUser = password;
        this.phoneNumberUser = phone; 
       // this.addressUser=address;
        this.dateBirthUser=birthdate;
        this.enabled=enable;
        this.locked=lock;
       // this.salary=salary;
        this.updatedPassword=updated;
        this.roleUser=role;
        this.nbaccessUser=nb;
        //client
        //this.Latitude=latitude;
        //this.Longitude=longitude;
        this.subscriptionDate=subscriptionDate;
        this.subMonth=subMonth
        this.genderClient=gender;
        this.workfieldClient=workfield;
        this.matricule=matricule;
        this.soldeDeConge=soldeDeConge;
    }
}