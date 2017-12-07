import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import {AppComponent} from './app.component';
import {MeetingsComponent} from './meetings/meetings.component';
import {MeetingComponent} from './meetings/meeting/meeting.component';
import {RetroItemComponent} from './retro-item/retro-item.component';
import {MeetingsService} from "./meetings/meetings.service";
import {FirebaseStorageClient} from "./communication/FirabaseStorageClient";
import {RoutingModule} from "./routing/routing.module";
import { MeetingDetailComponent } from './meetings/meeting-detail/meeting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    MeetingComponent,
    RetroItemComponent,
    MeetingDetailComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RoutingModule
  ],
  providers: [
    {provide: 'StorageClient', useClass: FirebaseStorageClient},
    FirebaseStorageClient,
    MeetingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
