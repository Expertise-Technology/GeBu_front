import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account.model';
import { environment } from '../../environnement/environnement';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   apiURL: string = `${environment.apiUrl}/account`;

  constructor(private http : HttpClient) { }

  listAccount(): Observable<Account[]>{
    const url = `${this.apiURL}`;
    return this.http.get<Account[]>(url);
   }

  accountCenter(id: number): Observable<Account>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Account>(url);
   }

  addAccount(account: Account) : Observable<Account>{
    return this.http.post<Account>(this.apiURL, account, httpOptions);
   }

  updateAccount(account: Account) : Observable<Account>{
    return this.http.post<Account>(this.apiURL, account, httpOptions);
  }
}
