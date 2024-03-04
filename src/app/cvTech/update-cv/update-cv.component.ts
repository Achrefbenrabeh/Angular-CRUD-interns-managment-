import { Component,OnInit } from '@angular/core';
import { CvService } from '../../service/cv.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {

  personne : Personne = new Personne()
  id!: number

  constructor(private cvService: CvService, private activatedRoute: ActivatedRoute, private router:Router){ }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.cvService.getPersonneById(params['id']).subscribe(
          (personne) => {
            this.personne = personne
          }
        );
        console.log(this.personne);
      }
    );
  }
  
  updatePersonne(){
    this.cvService.updatePersonne(this.id,this.personne).subscribe (
      (reponse) => {
        const link = ['cv'];
        this.router.navigate(link);
      }
    )
  }

}
