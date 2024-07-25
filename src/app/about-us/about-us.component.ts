import { Component } from '@angular/core';
import { IAbout } from '../iabout';
import { content } from '../aboutus-text';
import { IJobs } from '../ijobs';
import { jobs } from '../jobs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  
  content: IAbout [] = content;
  job: IJobs = {} as IJobs;
  jobs: IJobs [] = jobs;

  constructor(){  
  }
}
