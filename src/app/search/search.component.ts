import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/Personne';
import { CvService } from '../service/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchResult! : Personne [];
  chaine = ''

  constructor(private cvservice : CvService, private router : Router){}
  
ngOnInit(): void {
  this.searchResult = [];
}
  search(){
    const lastname = this.chaine.trim();
    if(lastname.length) {
      this.cvservice.findByName(lastname).subscribe
      (
        (Personnes) => {
          console.log(Personnes);
          this.searchResult = Personnes;
        }
      );
    } else {
      this.searchResult = []
    }
  }

  selectPersonne(personne: Personne){
const link = ['cv', personne.id] 
this.router.navigate(link)
this.searchResult = [];
this.chaine =''
  }
}
