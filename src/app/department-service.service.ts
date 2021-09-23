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

  public getNameDepartmentByMatriculeBoss(Matricule: string): Observable<any>{
    return this.http.get<any>(`http://localhost:8081/Department/getNameDepartmentByMatriculeBoss/${Matricule}`)
  }

  public getMatriculeByUsername(Username: string): Observable<string>{
    return this.http.get<string>(`http://localhost:8081/Department/getNMatriculeByUsernameUser/${Username}`)
  }

  public AffectEmployeeDepartment(DepartmentId: number,matricule: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Department/AffectEmployeeDepartment/${DepartmentId}/${matricule}`);
  }


}
