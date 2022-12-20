import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  readonly ApiURL = "https://localhost:7209/api/v1";

  constructor(private http: HttpClient) { }

  getSpeakerById(authorId: number) {
    return this.http.get(this.ApiURL + `/speaker/${authorId}`);
  }

  getSpeakersTalkDetailsById(speakerId : number) {
    return this.http.get(this.ApiURL + `/speaker/${speakerId}/talks`);
  }
}
