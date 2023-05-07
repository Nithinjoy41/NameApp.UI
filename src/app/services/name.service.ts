import { Injectable } from '@angular/core';
import { Name } from '../models/Name';
import { NodeWithI18n } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private url = "Name";
  constructor(private http : HttpClient) { }

  public getNames() : Observable<Name[]> {
  return this.http.get<Name[]>(`${environment.apiUrl}`);
  }

  public updatePerson(name : Name) : Observable<Name[]> {
    return this.http.put<Name[]>(`${environment.apiUrl}`, name);
    }

  public createPerson(name : Name) : Observable<Name[]> {
      return this.http.post<Name[]>(`${environment.apiUrl}`, name);
      }

 public deletePerson(name : Name) : Observable<Name[]> {
        return this.http.delete<Name[]>(`${environment.apiUrl}/${name.id}`);
        }
}
