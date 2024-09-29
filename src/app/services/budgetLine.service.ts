import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BudgetLine } from "../models/budgetLine.model";
import { environment } from "../../environnement/environnement";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class BudgetLineService {

  apiURL: string = `${environment.apiUrl}/budgetline`;

  constructor(private http : HttpClient) {

   }

   listBudgetLine(): Observable<BudgetLine[]>{
    //const url = apiURL;
    return this.http.get<BudgetLine[]>(this.apiURL);
   }

   consulterBudgetLine(id : number) : Observable<BudgetLine>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<BudgetLine>(url);
   }

   addBudgetLine(budgetLine: BudgetLine) : Observable<BudgetLine>{
    return this.http.post<BudgetLine>(this.apiURL, budgetLine, httpOptions);
   }

}
