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






}
