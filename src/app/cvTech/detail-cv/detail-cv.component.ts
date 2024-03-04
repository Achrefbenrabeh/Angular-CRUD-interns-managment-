import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Personne } from 'src/app/model/Personne';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {

 @Input() personne: Personne = new Personne();
 @ViewChild('content',{static:false}) el! : ElementRef

 constructor(){}

 makePdf(){
  let pdf = new jsPDF('p', 'pt', 'a4');
  pdf.html(this.el.nativeElement, {
    callback: (pdf) => {
      pdf.save("badge.pdf")
    }
  })
 }
}