import { Component, Input, OnInit } from '@angular/core';
import { Venue } from '../model/venue';
import { VenueService } from '../shared/venue.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  data: Venue[] | any;

  cityId: Venue[] | any;

  picture: string | null = '';

  constructor(private service: VenueService) { }

  ngOnInit(): void {
    
    const data = localStorage.getItem('cityId');
    this.cityId = data != null ? JSON.parse(data) : []; // ternary operator
    console.log(this.cityId);

    this.picture = localStorage.getItem('pic');
    //this.pic = data != null ? JSON.parse(data) : [];

    this.getVenueByCityId(this.cityId);
  }

  getVenueByCityId(cityId : number) {
    this.service.getVenueByCityId(this.cityId).subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
