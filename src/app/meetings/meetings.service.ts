import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";
import {StorageClient} from "../communication/StorageClient";

@Injectable()
export class MeetingsService {

  constructor(@Inject('StorageClient') private storage: StorageClient) {}

  startMeeting(): string {
    const currentDate = new Date();
    const createdMeetingId = this.storage.meetings().create(currentDate);
    return createdMeetingId;
  }

  getMeeting(id: string): Observable<Meeting> {
    return this.storage.meetings().find(id);
  }
  getMeetings(): Observable<Meeting[]> {
    return this.storage.meetings().findAll().map(data => data.sort(
      (a, b) => {
        return a.startedAt < b.startedAt ? -1 : 1;
      }
    ));
  }
}
