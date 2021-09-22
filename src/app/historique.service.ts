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

  public RetiveHistoriqueByType(type : string) :  Observable<historique[]> {
    return this.http.get<historique[]>(`http://localhost:8081/Historique/RetiveHistoriqueByType/${type}`);
  }

  public RetiveHistoriqueByOwner(owner : any) :  Observable<historique[]> {
    return this.http.get<historique[]>(`http://localhost:8081/Historique/RetiveHistoriqueByOwner/${owner}`);
  }

  public RetiveHistoriqueByAction(action : string) :  Observable<historique[]> {
    return this.http.get<historique[]>(`http://localhost:8081/Historique/RetiveHistoriqueByAction/${action}`);
  }

  public RetiveHistoriqueByFiltre(type : string, action : string) :  Observable<historique[]> {
    return this.http.get<historique[]>(`http://localhost:8081/Historique/RetiveHistoriqueByFiltre/${type}/${action}`);
  }


}
