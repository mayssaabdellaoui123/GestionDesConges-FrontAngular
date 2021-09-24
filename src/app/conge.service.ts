import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge } from './auth/Conge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(private http: HttpClient) { }

  public addConge(Conge: Conge): Observable<Conge> {
    return this.http.post<Conge>(`http://localhost:8081/Conge/addConge`, Conge);
  }

  public addCongeEtAffectation(Conge: Conge, Username: string): Observable<Conge> {
    return this.http.post<Conge>(`http://localhost:8081/Conge/addCongeEtAffectation/${Username}`, Conge);
  }

  public AffectEmployeConge(idConge: number,matricule: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Conge/AffectEmployeConge/${idConge}/${matricule}`);
  }







}
