import {Meeting} from "../shared/Meeting";
import {Observable} from "rxjs/Observable";
import {RetroItemList} from "../shared/RetroItemList";
import {RetroItem} from "../shared/RetroItem";

export interface MeetingStorage {

  find(id :string): Observable<Meeting>;
  findAll(): Observable<Meeting[]>;
}

export interface RetroItemStorage {
  find(id :string): Observable<RetroItem[]>;
}

export interface StorageClient {

  meetings(): MeetingStorage;
  retroItems(): RetroItemStorage;
}
