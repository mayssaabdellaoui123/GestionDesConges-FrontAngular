import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-accounts-dashboard',
  templateUrl: './accounts-dashboard.component.html',
  styleUrls: ['./accounts-dashboard.component.css']
})
export class AccountsDashboardComponent implements OnInit {

  nbAvailable : number;
  nbNotAvailable : number;
  nbDeliverers : number;
  nbAdmins : number;
  nbClients: number;
  nbManagers: number;
  delivMonth : string ;
  clientMonth : string ;
  infoclient : boolean = false; 
  infodeliverer : boolean = false; 
  infoadmin : boolean = false; 
  nbAAccounts : number;
  nbAAds: number;
  nbAProducts: number;
  nbAClaims : number;
  nbADeleveries: number;
  nbAEvents: number;
  nbCCos : number ; 
  nbCEdu : number;
  nbCF : number;
  stat : boolean=false;
  constructor(private service : UserService) { }

  ngOnInit(): void {
    this.getNbClients();
    this.getNbDeliverers();
    this.getNbAdmins();
    this.getNbManagers();
    this.getClientM();
    this.getDelivM();
    this.getNbAvailable();
    this.getNbNotAvailable();
    this.getNbAAccounts();
    this.getNbAAds();
    this.getNbADeleveries();
    this.getNbAEvents();
    this.getNbAProducts();
    this.getNbAClaims();
    this.getNBCF();
    this.getNbCCos();
    this.getNbCEdu();    
  }


  public statistics() {
    this.stat=true;
    var weightCos = Math.floor((this.nbCCos*100)/this.nbClients);
    this.nbCCos=weightCos;
    const prog1 = document.getElementById("prog1");
    prog1.style.width=String(weightCos)+"%";

    var weightEdu = Math.floor((this.nbCEdu*100)/this.nbClients);
    this.nbCEdu=weightEdu;
    const prog2 = document.getElementById("prog2");
    prog2.style.width=String(weightEdu)+"%";

    var weightF = Math.floor((this.nbCF*100)/this.nbClients);
    this.nbCF=weightF;
    const prog3 = document.getElementById("prog3");
    prog3.style.width=String(weightF)+"%";

  }

  public onInfoClient() : void {
    this.infoadmin=false;
    this.infoclient=true;
    this.infodeliverer=false;
  }

  public onInfoDeliverer() : void {
    this.infoadmin=false;
    this.infoclient=false;
    this.infodeliverer=true;
  }
  public onInfoAdmin() : void {
    this.infoadmin=true;
    this.infoclient=false;
    this.infodeliverer=false;
  }

  public getNbCCos(): void {
    this.service.getCCos().subscribe(
      (response: number) => {
        this.nbCCos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNbCEdu(): void {
    this.service.getCEdu().subscribe(
      (response: number) => {
        this.nbCEdu = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNBCF(): void {
    this.service.getCF().subscribe(
      (response: number) => {
        this.nbCF = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNbAAccounts(): void {
    this.service.getAAccounts().subscribe(
      (response: number) => {
        this.nbAAccounts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbAAds(): void {
    this.service.getAAds().subscribe(
      (response: number) => {
        this.nbAAds = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbAProducts(): void {
    this.service.getAProducts().subscribe(
      (response: number) => {
        this.nbAProducts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbADeleveries(): void {
    this.service.getADeleveries().subscribe(
      (response: number) => {
        this.nbADeleveries = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbAEvents(): void {
    this.service.getAEvents().subscribe(
      (response: number) => {
        this.nbAEvents = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbAClaims(): void {
    this.service.getAClaims().subscribe(
      (response: number) => {
        this.nbAClaims = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public getNbAvailable(): void {
    this.service.getAvailable().subscribe(
      (response: number) => {
        this.nbAvailable = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNbNotAvailable(): void {
    this.service.getNotAvailable().subscribe(
      (response: number) => {
        this.nbNotAvailable = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNbClients(): void {
    this.service.getNbClients().subscribe(
      (response: number) => {
        this.nbClients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbDeliverers(): void {
    this.service.getNbDeliverers().subscribe(
      (response: number) => {
        this.nbDeliverers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbAdmins(): void {
    this.service.getNbAdmins().subscribe(
      (response: number) => {
        this.nbAdmins = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getNbManagers(): void {
    this.service.getNbManagers().subscribe(
      (response: number) => {
        this.nbManagers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getClientM(): void {
    this.service.getClientOfMonth().subscribe(
      (response: string) => {
        console.log(response)
        this.clientMonth = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getDelivM(): void {
    this.service.getDelivererOfMonth().subscribe(
      (response: string) => {
        this.delivMonth = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
