import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  apiURL: string = `${environment.apiUrl}/expense`;

  constructor(private http : HttpClient) {

   }

   listExpenses(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.apiURL);
   }

   listExpensesByBudget(id: number): Observable<Expense[]>{
    const url = `${this.apiURL}/bybudget/${id}`;
    return this.http.get<Expense[]>(url);
   }

   consulterExpense(id : number) : Observable<Expense>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Expense>(url);
   }

   updateExpense(expense: Expense) : Observable<Expense>{
    return this.http.put<Expense>(this.apiURL, expense);
  }

   addExpenseService(expense: Expense) : Observable<Expense>{
    return this.http.post<Expense>(this.apiURL, expense, httpOptions);
   }

   deleteExpense(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

}
