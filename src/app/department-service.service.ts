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

  public addDepartment(Department: Department): Observable<Department> {
    return this.http.post<Department>(`http://localhost:8081/Department/addDep`, Department);
  }


  public deleteDepartment(DepartmentId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Department/delete/${DepartmentId}`);
  }

  public updateDepartment(Department: Department): Observable<Department> {
    return this.http.put<Department>(`http://localhost:8081/Department/update`, Department);
  }


}
