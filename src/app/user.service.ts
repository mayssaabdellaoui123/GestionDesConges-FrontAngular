import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpInfoM } from './auth/SignUpInfo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


 
  private managerUrl = 'http://localhost:8081/register/manager';

  constructor(private http: HttpClient) { }

  public getNbClients(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/countClients`);
  }
  public getNbManagers(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/countManagers`);
  }
  public getNbDeliverers(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/countDeliverers`);
  }
  public getNbAdmins(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/countAdmins`);
  }

  public getAvailable(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/available`);
  }

  public getNotAvailable(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/notavailable`);
  }


  public getAAccounts(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbAAccounts`);
  }

  public getAAds(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbAAds`);
  }

  public getAClaims(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbAClaims`);
  }

  public getADeleveries(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbADeliveries`);
  }

  public getAProducts(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbAProducts`);
  }

  public getCEdu(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbCEdu`);
  }

  public getCCos(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbCCos`);
  }

  public getCF(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbCF`);
  }

  public getAEvents(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/nbAEvents`);
  }


  public getClientOfMonth(): Observable<any> {
    return this.http.get(`http://localhost:8081/ressources/user/clientOftheMonth`,{responseType: 
    'text'});
  }

  public getDelivererOfMonth(): Observable<any> {
    return this.http.get(`http://localhost:8081/ressources/user/delivererOftheMonth`,{responseType: 
    'text'});
  }

  signUp(info: SignUpInfoM): any {
    console.log(info);
    return this.http.post(this.managerUrl, info, httpOptions);
  }


}