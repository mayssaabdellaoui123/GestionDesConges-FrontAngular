import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './auth/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  constructor(private http: HttpClient) { }

  public getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(`http://localhost:8081/Department/getall`);
  }

  public addClient(Department: Department): Observable<Department> {
    return this.http.post<Department>(`http://localhost:8081/Department/addDep`, Department);
  }


}
