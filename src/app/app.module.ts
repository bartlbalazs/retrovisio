import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {AppComponent} from './app.component';
import {MeetingsComponent} from './meetings/meetings.component';
import {MeetingComponent} from './meetings/meeting/meeting.component';
import {DeleteConfirmationDialog, RetroItemComponent} from './retro-item/retro-item.component';
import {NewRetroItemComponent} from "./retro-item/new-retro-item/new-retro-item.component";
import {MeetingsService} from "./meetings/meetings.service";
import {FirebaseStorageClient} from "./communication/FirebaseStorageClient";
import {RoutingModule} from "./routing/routing.module";
import {MeetingDetailComponent} from './meetings/meeting-detail/meeting-detail.component';
import {RetroItemService} from "./retro-item/retro-item.service";
import {MeetingEvaluationComponent} from './meetings/meeting-evaluation/meeting-evaluation.component';
import {NegativeItemPipe} from './retro-item/negative-item.pipe';
import {EvaluatableItemComponent} from './retro-item/evaluatable-item/evaluatable-item.component';
import {TopvotedPipe} from './retro-item/topvoted.pipe';
import {SummarizeComponent} from './meetings/meeting-summarize/meeting-summarize.component';
import {AuthComponent} from './authentication/auth/auth.component';
import {FirebaseAuthClient} from "./communication/FirebaseAuthClient";
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    MeetingComponent,
    RetroItemComponent,
    MeetingDetailComponent,
    NewRetroItemComponent,
    DeleteConfirmationDialog,
    MeetingEvaluationComponent,
    NegativeItemPipe,
    EvaluatableItemComponent,
    TopvotedPipe,
    SummarizeComponent,
    AuthComponent,
  ],
  entryComponents: [
    DeleteConfirmationDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RoutingModule
  ],
  providers: [
    {provide: 'StorageClient', useClass: FirebaseStorageClient},
    {provide: 'AuthClient', useClass: FirebaseAuthClient},
    FirebaseStorageClient,
    MeetingsService,
    RetroItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
