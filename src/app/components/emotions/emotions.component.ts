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
    rowData: [{
        rowId: "",
        entries: []
      }
    ]
  };

  constructor() { }

  ngOnInit() {
    let date: Date = new Date();
    this.log.month = date.getMonth();

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

getMonth(): string {
  switch(this.log.month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2: 
      return "Mar";
    case 3: 
      return "Apr";
    case 4: 
      return "May";
    case 5: 
      return "Jun";
    case 6:
      return "Jul";
    case 7: 
      return "Aug";
    case 8: 
      return "Sep";
    case 9: 
      return "Oct";
    case 10: 
      return "Nov";
    case 11: 
      return "Dec";
  }
}

}
