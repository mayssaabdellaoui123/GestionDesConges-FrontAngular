import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deliverer } from './auth/DelivererInfo';

@Injectable({
  providedIn: 'root'
})
export class DelivererService { 

  constructor(private http: HttpClient){}

  public getClients(): Observable<Deliverer[]> {
    return this.http.get<Deliverer[]>(`http://localhost:8081/ressources/deliverer/all`);
  }

  public addClient(client: Deliverer): Observable<Deliverer> {
    return this.http.post<Deliverer>(`http://localhost:8081/ressources/deliverer/add`, client);
  }

  public updateClient(client: Deliverer): Observable<Deliverer> {
    return this.http.put<Deliverer>(`http://localhost:8081/ressources/deliverer/update`, client);
  }

  public deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/ressources/deliverer/delete/${clientId}`);
  }
  public getDelivererByUsername(username : string) : Observable<Deliverer> {
    return this.http.get<Deliverer>(`http://localhost:8081/ressources/deliverer/getbyusername/${username}`);
  }
}
