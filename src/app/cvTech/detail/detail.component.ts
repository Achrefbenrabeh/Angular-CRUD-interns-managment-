import { Component, Input, OnInit } from '@angular/core';
import { CvService } from '../../service/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/model/Personne';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne!: Personne;

  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router :Router,
    private service : JwtService
  ) { }

  ngOnInit(): void {
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
  deletePersonne(){
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (respone) => {
        const link = ['cv']
        this.router.navigate(link)
      },
      (error) => {
        console.log('error')
      }
    )
  }
  updatePersonne(id:number){
    const link = ['cv/cvUpdate',id]
    this.router.navigate(link);
  }
}
