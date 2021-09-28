import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conge, Conge1 } from './auth/Conge';
import { Observable } from 'rxjs';
import { DetailsUserConge } from './auth/DetailsUserConge';
import { Client } from './auth/ClientInfo';

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

  public GetCongesForSA(): Observable<Conge1[]> {
    return this.http.get<Conge1[]>(`http://localhost:8081/Conge/GetCongesForSA/`)
  }

  public GetCongesForEmp(username: string): Observable<Conge1[]> {
    return this.http.get<Conge1[]>(`http://localhost:8081/Conge/GetCongesForEmp/${username}`)
  }

  public getDetailsUserByIdConge(idConge: number): Observable<DetailsUserConge> {
    return this.http.get<DetailsUserConge>(`http://localhost:8081/Conge/getDetailsUserByIdConge/${idConge}`)
  }


  public getCongeByIdConge(idConge: number): Observable<Conge1> {
    return this.http.get<Conge1>(`http://localhost:8081/Conge/getCongeByIdConge/${idConge}`)
  }

  public ValidationPrimaireChefDep(idConge: number , username:string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Conge/ValidationPrimaireChefDep/${idConge}/${username}`);
  }

  public AnnuleValidationPrimaireChefDep(idConge: number , username:string , avisPrimaire: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Conge/AnnuleValidationPrimaireChefDep/${idConge}/${username}/${avisPrimaire}`);
  }

  public ValidationFinale(idConge: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Conge/ValidationFinale/${idConge}`);
  }
  public AnnuleValidationFinale(idConge: number, AvisFinale: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Conge/AnnuleValidationFinale/${idConge}/${AvisFinale}`);
  }
  
  public getusernameUserByMatricule(matricule: string): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8081/Conge/getusernameUserByMatricule/${matricule}`);
  }










}
