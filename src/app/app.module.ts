import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from "@angular/common";

import { AppComponent } from './app.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { MeetingComponent } from './meeting/meeting.component';
import { RetroItemComponent } from './retro-item/retro-item.component';
import { MeetingsService } from "./meetings/meetings.service";


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
    MatListModule,
    MatIconModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [MeetingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
