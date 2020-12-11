import { Component } from '@angular/core';
import { Satellite } from './satellite';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  
  constructor() {
    this.sourceList = [
       new Satellite("SiriusXM", "Communication", true, "LOW", "2009-03-21"),
       new Satellite("Cat Scanner", "Imaging", true , "LOW", "2012-01-05"),
       new Satellite("Weber Grill", "Space Debris", false , "HIGH", "1996-03-25"),
       new Satellite("GPS 938", "Positioning", true, "HIGH", "2001-11-01"),
       new Satellite("ISS", "Space Station", true, "LOW", "1998-11-20"),
    ];
  }
};

