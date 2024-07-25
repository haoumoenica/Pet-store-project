import { Component } from '@angular/core';
import { Irecommendation } from '../irecommendations';
import { recommendations } from '../recommendations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  recommendation: Irecommendation = {} as Irecommendation;
  recommendations: Irecommendation [] = recommendations;

  constructor (){}

}



