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

  addItemToMeeting(meetingId: string, content: string, positive: boolean) {
    if (content != null && content.length > 0) {
      this.storage.retroItems().create(meetingId, new RetroItem(content, positive))
    }
  }

  deleteRetroItem(meetingId: string, retroItemId: string) {
    this.storage.retroItems().deleteItem(meetingId, retroItemId);
  }

  upVote(meetingId: string, retroItem: RetroItem) {
    retroItem.votes++;
    this.storage.retroItems().updateVote(meetingId, retroItem);
  }

  downVote(meetingId: string, retroItem: RetroItem) {
    if (retroItem.votes > 0) {
      retroItem.votes--;
      this.storage.retroItems().updateVote(meetingId, retroItem);
    }
  }

  editContent(meetingId: string, retroItem: RetroItem) {
    this.storage.retroItems().updateContent(meetingId, retroItem);
  }
}
