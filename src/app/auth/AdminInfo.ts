export class Admin{
 
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
    //admin
    roleAdmin: string;
    nbabsenceAdmin : number;

    constructor(id : number ,firstname: string, lastname: string,username: string, email: string, password: string , 
        phone:string, address:string , role1:string , nbabsenceAdmin : number , birthdate : string, role : string ,
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
        //admin
        this.roleAdmin=role1;
        this.nbabsenceAdmin=nbabsenceAdmin;
    }


}