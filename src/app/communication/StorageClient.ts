import {Meeting} from "../shared/Meeting";
import {Observable} from "rxjs/Observable";
import {RetroItem} from "../shared/RetroItem";

export interface MeetingStorage {

  create(startedAt: Date) : string;

  find(id: string): Observable<Meeting>;

  findAll(): Observable<Meeting[]>;
}

export interface RetroItemStorage {
  create(meetingId: string, retroItem: RetroItem);

  deleteItem(meetingId: string, retroItemId: string);

  findItemsForMeeting(id: string): Observable<RetroItem[]>;

  updateVote(meetingId: string, retroItem: RetroItem);

  updateContent(meetingId: string, retroItem: RetroItem);
}

export interface StorageClient {

  meetings(): MeetingStorage;

  retroItems(): RetroItemStorage;
}
