import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../../service/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent {

errorMessage = ''

  constructor(private cvservice:CvService, private router: Router){}
  
  addPersonne(formulaire:NgForm) {
    this.cvservice.addPersonne(formulaire.value).subscribe(
      (reponse) =>{
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'probleme de connexion a votre serveur'
      }
    )
    const link = ['cv'];
   this.cvservice.addPersonne(formulaire.value)
   this.router.navigate(link);

  }
}
