import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { historique } from './auth/Historique';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http: HttpClient) { }

  public getHistories(): Observable<historique[]> {
    return this.http.get<historique[]>(`http://localhost:8081/Historique/getall`);
  }

  public getNombreHistorique():  Observable<number> {
    return this.http.get<number>(`http://localhost:8081/Historique/getNombreHistorique`);
  }
}
