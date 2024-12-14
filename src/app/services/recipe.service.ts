import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { environment } from '../../environnement/environnement';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiURL: string = `${environment.apiUrl}/recipe`;

  constructor(private http : HttpClient) {

   }

   listRecipesByBudget(id: number): Observable<Recipe[]>{
    const url = `${this.apiURL}/bybudget/${id}`;
    return this.http.get<Recipe[]>(url);
   }

  consulterRecipe(id: number) : Observable<Recipe>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Recipe>(url);
   }

   addRecipeService(recipe: Recipe) : Observable<Recipe>{
    return this.http.post<Recipe>(this.apiURL, recipe, httpOptions);
   }

   updateRecipe(recipe: Recipe) : Observable<Recipe>{
    return this.http.post<Recipe>(this.apiURL, recipe);
  }

  deleteRecipe(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


}
