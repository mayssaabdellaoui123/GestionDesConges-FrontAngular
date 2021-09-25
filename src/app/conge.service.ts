import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge, Conge1 } from './auth/Conge';
import { Observable } from 'rxjs';
import { DetailsUserConge } from './auth/DetailsUserConge';

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

  public GetCongesForChefDep(username: string): Observable<Conge1[]> {
    return this.http.get<Conge1[]>(`http://localhost:8081/Conge/GetCongesForChefDep/${username}`)
  }

  public getDetailsUserByIdConge(idConge: number): Observable<DetailsUserConge> {
    return this.http.get<DetailsUserConge>(`http://localhost:8081/Conge/getiduserbyidconge/${idConge}`)
  }


  public getCongeByIdConge(idConge: number): Observable<Conge1> {
    return this.http.get<Conge1>(`http://localhost:8081/Conge/getCongeByIdConge/${idConge}`)
  }







}
