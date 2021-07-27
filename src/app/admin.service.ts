import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './auth/AdminInfo';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient){}

  public getClients(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`http://localhost:8081/ressources/admin/all`);
  }

  public addClient(client: Admin): Observable<Admin> {
    return this.http.post<Admin>(`http://localhost:8081/ressources/admin/add`, client);
  }

  public updateClient(client: Admin): Observable<Admin> {
    return this.http.put<Admin>(`http://localhost:8081/ressources/admin/update`, client);
  }

  public deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/ressources/admin/delete/${clientId}`);
  }

  public addAbsence(clientId: number , client : Admin) : Observable<Admin> {
    return this.http.put<Admin>(`http://localhost:8081/ressources/admin/absent/${clientId}` , client);
  }
  public getByID(clientId : number) : Observable<Admin> {
    return this.http.get<Admin>(`http://localhost:8081/ressources/admin/getbyid/${clientId}`);
  }
  public getAdminByUsername(username : string) : Observable<Admin> {
    return this.http.get<Admin>(`http://localhost:8081/ressources/admin/getbyusername/${username}`);
  }
}
 