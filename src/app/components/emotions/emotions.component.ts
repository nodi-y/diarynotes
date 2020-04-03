import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {
  emotions: string[];

  constructor() { }

  ngOnInit() {
    this.emotions = [
      'Joy',
      'Sadness',
      'Fear',
      'Guilt',
      'Shame',
      'Anger',
      'Interest',
      'Disgust',
      'Love',
      'Passion'
    ];
  }

}
