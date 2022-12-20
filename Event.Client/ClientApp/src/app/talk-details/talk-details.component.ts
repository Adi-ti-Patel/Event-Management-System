import { Component, OnInit } from '@angular/core';
import { Speaker } from '../model/speaker';
import { Location, Time } from '@angular/common';
import { SpeakerService } from '../shared/speaker.service';
import { Talkdetails } from '../model/talkdetails';

@Component({
  selector: 'app-talk-details',
  templateUrl: './talk-details.component.html',
  styleUrls: ['./talk-details.component.css']
})
export class TalkDetailsComponent implements OnInit {

  data: Talkdetails[] | any;

  speaker: Speaker = new Speaker();

  time:  any;

  resultInMinutes: string = '';

  constructor(private location: Location, private service: SpeakerService) { }

  ngOnInit(): void {
    this.speaker = this.location.getState() as Speaker;

    this.getSpeakersTalkDetailsById(this.speaker.id);

    //this.getFormattedTalkTime();
  }

  getSpeakersTalkDetailsById(speakerId: number) {
    this.service.getSpeakersTalkDetailsById(this.speaker.id).subscribe(data => {
      this.data = data;
      console.log(data);
      this.getFormattedTalkTime(this.data[0].startTime, this.data[0].endTime);
    })
  }


  getFormattedTalkTime(sTime: Time, eTime: Time) {

    var startTime = new Date();
    var endTime = new Date();

    var value_start = startTime.toString().split(':');
    var value_end = endTime.toString().split(':');

    startTime = new Date(startTime.setHours(Number(value_start[0]), Number(value_start[1]), Number(value_start[2]), 0));
    endTime = new Date(endTime.setHours(Number(value_end[0]), Number(value_end[1]), Number(value_end[2]), 0));


    this.time = (Number(endTime) - Number(startTime)) / 3600000;
    console.log(this.time)
  }
}
