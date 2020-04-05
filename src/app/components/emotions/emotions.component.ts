import { Component, OnInit } from '@angular/core';
import { Log } from "../../models/Log";
import { RowData } from "../../models/RowData";


@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {
  log: Log = {
    month: 0,
    year: 0,
    rowData: [{
        rowId: "",
        entries: []
      }
    ]
  };

  constructor() { }

  ngOnInit() {

    let rd : RowData[] = [{
      rowId: "Joy",
      entries: [1,2,3,4,null,5]
    },
    {
      rowId: "Interest",
      entries: [5,4,3,2,null,1]
    }]

    this.log.rowData = rd;    
   
    /* this.emotions = [
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
    ]; */

  }

}
