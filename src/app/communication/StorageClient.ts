import {Meeting} from "../shared/Meeting";
import {Observable} from "rxjs/Observable";

export interface MeetingStorage {

  find(id :string): Observable<Meeting>;
  findAll(): Observable<Meeting[]>;
}

export interface StorageClient {

  meetings(): MeetingStorage;
}
