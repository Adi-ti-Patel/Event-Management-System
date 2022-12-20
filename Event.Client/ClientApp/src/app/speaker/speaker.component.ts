import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Speaker } from '../model/speaker';
import { EventService } from '../shared/event.service';
import { SpeakerService } from '../shared/speaker.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  data: Speaker[] | any;

  authorId: Speaker[] | any;

  constructor(private service: EventService, private router: Router) { }

  ngOnInit(): void {

    const data = localStorage.getItem('authorId');
    this.authorId = data != null ? JSON.parse(data) : []; // ternary operator
    console.log(this.authorId);

    this.getSpeakerById(this.authorId);
  }

  getSpeakerById(authorId: number) {
    this.service.getAllSpeakerOfSpecificEvent(this.authorId).subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}

