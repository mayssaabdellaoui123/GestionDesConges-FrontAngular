import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  public getJAN(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/JAN`);
  }

  public getFEB(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/FEB`);
  }

  public getMAR(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/MAR`);
  }

  public getAPR(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/APR`);
  }

  public getMAY(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/MAY`);
  }

  public getJUN(): Observable<number> {
    return this.http.get<number>(`http://localhost:8081/ressources/user/JUN`);
  }

}
