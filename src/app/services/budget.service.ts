import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Budget } from "../models/budget.model";
import { Account } from "../models/account.model";
import { environment } from "../../environnement/environnement";


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  apiURL: string = `${environment.apiUrl}/budget`;

  constructor(private http : HttpClient) {

   }

   listBudgets(): Observable<Budget[]>{
    return this.http.get<Budget[]>(this.apiURL);
   }

   listBudgetsByCenter(id: number): Observable<Budget[]>{
    const url = `${this.apiURL}/bycenter/${id}`;
    return this.http.get<Budget[]>(url);
   }

   consulterBudget(id: number) : Observable<Budget>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Budget>(url);
   }

   updateBudgetService(budget: Budget) : Observable<Budget>{
    return this.http.put<Budget>(this.apiURL, budget, httpOptions);
  }

  addBudgetService(budget: Budget) : Observable<Budget>{
    return this.http.post<Budget>(this.apiURL, budget, httpOptions);
   }

}
