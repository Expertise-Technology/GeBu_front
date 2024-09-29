import { Injectable } from '@angular/core';
import { Center } from '../models/center.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environnement/environnement';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  apiURL: string = `${environment.apiUrl}/centers`;

  constructor(private http : HttpClient) {

   }

   listCenters(): Observable<Center[]>{
    return this.http.get<Center[]>(this.apiURL);
   }

   consulterCenter(id: number) : Observable<Center>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Center>(url);
   }

   addCenter(center: Center) : Observable<Center>{
    return this.http.post<Center>(this.apiURL, center, httpOptions);
   }

}
