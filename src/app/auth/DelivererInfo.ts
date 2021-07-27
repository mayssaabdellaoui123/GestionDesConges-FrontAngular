export class Deliverer{
 
    //user
    idUser : number;
    phoneNumberUser : string ;
    lastNameUser: string;
    firstNameUser: string;
    usernameUser: string;
    emailAddressUser: string;
    passwordUser: string;
    addressUser: string;
    roleUser : string; 
    updatedPassword : boolean;
    nbaccessUser : number ;
    salary : number ;
    enabled :boolean;
    locked : boolean;
    dateBirthUser : string;
    //deliverer
    Latitude : number;
    Longitude : number;
    bonusDeliverer : number;
    delivererOfTheMonthDeliverer: boolean;
    availableDeliverer: boolean;
    score_deliverer : number;
    distanceDeliverer : number;

    constructor(id : number ,firstname: string, lastname: string,username: string, email: string, password: string , 
        phone:string, address:string , birthdate : string,bonus: number , deliofmonth:boolean , available:boolean  ,
        latitude : number, longitude : number , role : string , distance : number , score : number ,
        updated : boolean , nb : number , salary: number , enable : boolean , lock : boolean) {
        //user    
        this.idUser = id;
        this.firstNameUser = firstname;
        this.lastNameUser = lastname;
        this.usernameUser = username;
        this.emailAddressUser = email;
        this.passwordUser = password;
        this.phoneNumberUser = phone; 
        this.addressUser=address;
        this.dateBirthUser=birthdate;
        this.enabled=enable;
        this.locked=lock;
        this.salary=salary;
        this.updatedPassword=updated;
        this.roleUser=role;
        this.nbaccessUser=nb;
        //deliverer
        this.Latitude=latitude;
        this.Longitude=longitude;
        this.bonusDeliverer=bonus;
        this.score_deliverer=score;
        this.distanceDeliverer=distance;
        this.delivererOfTheMonthDeliverer=deliofmonth;
        this.availableDeliverer=available;
    }


}