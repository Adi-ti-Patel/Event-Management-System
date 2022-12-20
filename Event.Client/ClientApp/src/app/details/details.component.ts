import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Event } from '../model/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  event: Event = new Event();
 
  constructor(private location: Location, private route: Router) { }

  ngOnInit(): void {
    this.event = this.location.getState() as Event;
  }

  totalNumberOfdays(event: Event) {
    
    var sd = new Date(this.event.startDate);
    var ed = new Date(this.event.endDate);

    // To calculate the time difference of two dates
    var Difference_In_Time = ed.getTime() - sd.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
  }

  navigateToVenue() {

    localStorage.setItem("cityId", this.event.cityId.toString());
    localStorage.setItem("pic", this.event.pic)

    this.route.navigate(['../venue'])
  }

  navigateToSpeaker() {

    localStorage.setItem("authorId", this.event.id.toString());

    this.route.navigate(['../speaker'])
  }
}
