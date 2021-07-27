export class SignUpInfo {
    phoneNumberUser : string ;
    lastNameUser: string;
    firstNameUser: string;
    usernameUser: string;
    emailAddressUser: string;
    passwordUser: string;
    addressUser: string;
    genderClient: string;
    workfieldClient : string;
    dateBirthUser : string;

    constructor(firstname: string, lastname: string,username: string, email: string, password: string , phone:string, address:string , gender:string , workfield : string , birthdate : string) {
        this.firstNameUser = firstname;
        this.lastNameUser = lastname;
        this.usernameUser = username;
        this.emailAddressUser = email;
        this.passwordUser = password;
        this.phoneNumberUser = phone; 
        this.addressUser=address;
        this.genderClient=gender;
        this.workfieldClient=workfield;
        this.dateBirthUser=birthdate;
    }
}
export class SignUpInfoM {
    phoneNumberUser : string ;
    lastNameUser: string;
    firstNameUser: string;
    usernameUser: string;
    emailAddressUser: string;
    passwordUser: string;

    constructor(firstname: string, lastname: string,username: string, email: string, password: string , phone:string) {
        this.firstNameUser = firstname;
        this.lastNameUser = lastname;
        this.usernameUser = username;
        this.emailAddressUser = email;
        this.passwordUser = password;
        this.phoneNumberUser = phone; 
    }
}