import { Injectable } from '@angular/core';
import { Personne } from '../model/Personne';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

 link = "http://localhost:8080/api/v1/personnes"

  constructor(private http: HttpClient) {}




 getPersonneById(id: number) :Observable<Personne>  {
return this.http.get<Personne>(this.link + `/${id}`, {
  headers: this.createAuhtorizationHeader()
})
}


addPersonne (personne: Personne): Observable<any>{
  return this.http.post(this.link, personne ,  {
    headers: this.createAuhtorizationHeader()
  })
}


deletePersonne(id: number): Observable<any> {
return this.http.delete(this.link+`/${id}` , {
  headers: this.createAuhtorizationHeader()
});
}

updatePersonne( id:number,personne: Personne){
return  this.http.put(`${this.link}/${id}`, personne , {
  headers: this.createAuhtorizationHeader()
});
}

findByName(lastname:string): Observable<Personne[]> {
  console.log(lastname);
const filter = `{"where":{"lastname":{"like":"%${lastname}"}}}`;
const params = new HttpParams().set('filter', encodeURIComponent(filter));
return this.http.get<Personne[]>(`${this.link}`,{params})
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

}