import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne: Personne = new Personne();
  @Output() selectedPersonne = new EventEmitter(); 
  
  constructor(private router : Router) {}

  ngOnInit(): void { }
  selectPersonne(){ 
    this.selectedPersonne.emit(this.personne);
  }

  moreInfo() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
   }
}
