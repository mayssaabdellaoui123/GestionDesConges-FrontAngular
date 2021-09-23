import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './auth/ClientInfo';
import { User } from './auth/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient){}

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`http://localhost:8081/ressources/client/all`);
  }

  public addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`http://localhost:8081/ressources/client/add`, client);
  }
 
  public updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`http://localhost:8081/ressources/client/update`, client);
  }

  public deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/ressources/client/delete/${clientId}`);
  }

  public getClientByUsername(username : string) : Observable<Client> {
    return this.http.get<Client>(`http://localhost:8081/ressources/client/getbyusername/${username}`);
  }

/*  addImage(L: File): Observable<any>{
    const file = new FormData();
    file.append('file',L);
    return this.http.put(`http://localhost:8081/image/uploadclient`,file)
  }*/


  addImage(L: File): Observable<any>{
        
    const file = new FormData();
    
     file.append('file', L);
    return this.http.put('http://localhost:8081/image/uploadclient',file)
}


public getEmployee(): Observable<Client[]> {
  return this.http.get<Client[]>(`http://localhost:8081/ressources/client/allclients`);
}


public findByUsernameUser(username): any {
  return this.http.get(`http://localhost:8081/ressources/client/getbyusername/{username}`);
}

public getRoleByusername(username){
  return this.http.get(`http://localhost:8081/ressources/client/getRolebyusername/`+username,{responseType: 'text'});
}


public AffectationRemplaceur(matricule: string): Observable<any> {
  return this.http.delete<any>(`http://localhost:8081/ressources/client/AffectationRemplaceur/${matricule}`);
}
 
public DesAffectationRemplaceur(matricule: string): Observable<any> {
  return this.http.delete<any>(`http://localhost:8081/ressources/client/DesAffectationRemplaceur/${matricule}`);
}

}