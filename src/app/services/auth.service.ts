import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environnement/environnement';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = `${environment.apiUrl}/auth`;

  public loggedUser!:string;
  public isloggedIn: Boolean = false;
  public roles!:string[];

  constructor(private router: Router,
    private http : HttpClient
  ) { }

  SignIn(user :User):Observable<any>{
    const url = `${this.apiURL}/login`;
    return this.http.post(url, user, httpOptions);



  }

  Register(user :User):Observable<any>{
    const url = `${this.apiURL}/register`;
    return this.http.post(url, user, httpOptions);
  }

}
