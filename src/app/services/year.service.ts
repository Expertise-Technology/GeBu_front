import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Year } from '../models/year.model';
import { environment } from '../../environnement/environnement';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class YearService {

  apiURL: string = `${environment.apiUrl}/year`;

  constructor(private http : HttpClient) {

   }

   listYears(): Observable<Year[]>{
    return this.http.get<Year[]>(this.apiURL);
   }

   addYear(year: Year) : Observable<Year>{
    return this.http.post<Year>(this.apiURL, year, httpOptions);
   }

}
