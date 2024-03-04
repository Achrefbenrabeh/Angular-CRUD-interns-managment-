import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../model/Personne';
import { Router } from '@angular/router';

const BASE_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient, private router : Router) { }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest)
  }

  
  hello(): Observable<Personne[]> {
    return this.http.get<Personne[]>(BASE_URL + 'api/v1/personnes', {
      headers: this.createAuhtorizationHeader()
    })
  }

  
  private createAuhtorizationHeader() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      console.log("JWT token not found in local storage");
    }
    return null;
  }

  logout (){
    localStorage.removeItem('jwt')
    this.router.navigateByUrl("/login");
  }

  islogged() {
    return !! localStorage.getItem('jwt')
  }
}

