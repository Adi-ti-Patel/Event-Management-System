import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  readonly ApiURL = "https://localhost:7209/api/v1";

  constructor(private http: HttpClient) { }

  getVenueByCityId(cityId: number) {
      return this.http.get(this.ApiURL + `/venue/${cityId}`)
    }
}
