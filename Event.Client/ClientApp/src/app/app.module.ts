import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { DetailsComponent } from './details/details.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { VenueComponent } from './venue/venue.component';
import { TalkDetailsComponent } from './talk-details/talk-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    DetailsComponent,
    SpeakerComponent,
    VenueComponent,
    TalkDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '' , component: EventComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'venue', component: VenueComponent },
      { path: 'speaker', component: SpeakerComponent },
      { path: 'talkdetails', component: TalkDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
