import {Inject, Injectable} from '@angular/core';
import {StorageClient} from "../communication/StorageClient";
import {Observable} from "rxjs/Observable";
import {RetroItem} from "../shared/RetroItem";

@Injectable()
export class RetroItemService {

  constructor(@Inject('StorageClient') private storage: StorageClient) {
  }

  getRetroItems(id: string): Observable<RetroItem[]> {
    return this.storage.retroItems().findItemsForMeeting(id).map(data => data.sort(
      (a, b) => {
        return a.timestamp < b.timestamp ? -1 : 1;
      }
    ))
  }

  addItemToMeeting(meetingId: string, content: string) {
    this.storage.retroItems().create(meetingId,new RetroItem(content))
  }
}
