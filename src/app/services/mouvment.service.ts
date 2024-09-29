import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mouvment } from '../models/mouvment.model';
import { environment } from '../../environnement/environnement';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class MouvmentService {

  apiURL: string = `${environment.apiUrl}/mouvment`;

  constructor(private http : HttpClient) { }

  listMouvment(): Observable<Mouvment[]>{
    return this.http.get<Mouvment[]>(this.apiURL);
  }

  listMouvmentByAccount(id: number): Observable<Mouvment[]>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Mouvment[]>(url);
  }

  addMouvmentService(mouvment: Mouvment) : Observable<Mouvment>{
    return this.http.post<Mouvment>(this.apiURL, mouvment, httpOptions);
   }
}
