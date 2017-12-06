import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingComponent } from './meeting/meeting.component';
import { RetroItemComponent } from './retro-item/retro-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    MeetingComponent,
    RetroItemComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
