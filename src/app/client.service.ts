import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './auth/ClientInfo';

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
 
}