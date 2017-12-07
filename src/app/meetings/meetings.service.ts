import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";
import {StorageClient} from "../communication/StorageClient";

@Injectable()
export class MeetingsService {


  constructor(@Inject('StorageClient') private storage: StorageClient) {}

  getMeeting(id: string): Observable<Meeting> {
    return this.storage.meetings().find(id);
  }
  getMeetings(): Observable<Meeting[]> {
    return this.storage.meetings().findAll();
  }
}
