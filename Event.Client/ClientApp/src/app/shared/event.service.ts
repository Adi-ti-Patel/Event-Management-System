import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  readonly ApiURL ="https://localhost:7209/api/v1";

  constructor(private http: HttpClient) { }

  getCompletedEventList(): Observable<any[]> {
    return this.http.get<any>(this.ApiURL + '/events/completed');
  }

  getCurrentMonthEventList(month:number, year:number) {
    return this.http.get(this.ApiURL + `/events/${month}/${year}`);
  }

  getAllSpeakerOfSpecificEvent(eventId: number) {
    return this.http.get(this.ApiURL + `/events/${eventId}/authors`);
  }
}
