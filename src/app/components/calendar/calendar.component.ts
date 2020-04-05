import { Component, OnInit, Input } from '@angular/core';
import { Log } from "../../models/Log"

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  month: number = 0;
  year: number = 0;

  @Input()
  log: Log; //takes in a Log w/o any date info

  constructor() { }

  ngOnInit() {
    let date = new Date();
    this.month = date.getMonth();
    this.year = date.getFullYear();
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

  numberOfDays(): number {
    //February, accounting for leap years
    if (this.month == 1) {
      if (this.isLeapYear()) {
        return 29;
      } else {
        return 28;
      }
    } else {
      if (this.month % 2 == 0) {
       if (this.month <= 6) {
        return 31;
       } else { return 30;}
      } else {
        if (this.month <= 6) {
          return 30;
         } else { return 31;}
      }
    }
  }

  isLeapYear(): boolean {
    if (this.year % 4 == 0) {
      if (this.year % 100 == 0) {
        if (this.year % 400) {
          return  true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
