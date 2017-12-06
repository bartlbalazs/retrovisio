import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";

@Injectable()
export class MeetingsService {

  meetingsCollection: AngularFirestoreCollection<Meeting>;

  constructor(private afs: AngularFirestore) {
    this.meetingsCollection = this.afs.collection('meetings');
  }

  getMeetings(): Observable<Meeting[]> {
    return this.meetingsCollection.valueChanges();
  }
}
