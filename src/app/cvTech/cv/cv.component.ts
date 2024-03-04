import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { CvService } from '../../service/cv.service';
import { JwtService } from 'src/app/service/jwt.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  

  selectedPersonne: Personne = new Personne();  
  personnes: Personne[] = [];

  constructor( private cvservice: CvService,  private service:JwtService) {}

  ngOnInit(): void {
     
        this.hello();
  }

  hello() {
    this.service.hello().subscribe({
      next: (personnes) => {
        this.personnes = personnes;
      }
      /*error: (error) => {
        alert('probleme dapi les donnes sont fake');
        this.personnes = this.cvservice.getFakePersonne();
      }*/
    })
     
  }

  selectPersonne(personne: any) {
    this.selectedPersonne = personne;
  }

}