import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})  
export class EventComponent implements OnInit {

  eventList: Event[] | any= [];

  constructor(private router: Router, private service: EventService) { }

  ngOnInit(): void {
    //this.getEvent();
    var sd = new Date();
    this.getCurrentMonthEvent(sd.getMonth()+1, sd.getFullYear());
  }

  getFormattedEventDate(data: Event) {
    var sd = new Date(data.startDate);
    var ed = new Date(data.endDate);

    var startDay = sd.getDate();
    var endDay = ed.getDate();
 
    var startMonth = sd.getMonth();
    var endMonth = ed.toLocaleString('default', { month: 'long' });;

    return `${startDay} - ${endDay} ${endMonth}`;

  }

  getCurrentMonthEvent(month: number, year: number) {
    this.service.getCurrentMonthEventList(month, year).subscribe(data => {
      this.eventList = data;
      console.log(data);
    })
  }
}
