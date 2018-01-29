import {MeetingStorage, RetroItemStorage, StorageClient} from "./StorageClient";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Meeting} from "../shared/Meeting";
import {Injectable} from "@angular/core";
import {RetroItem} from "../shared/RetroItem";

@Injectable()
export class FirebaseStorageClient implements StorageClient {

  private meetingsCollection: AngularFirestoreCollection<Meeting>;

  constructor(private afs: AngularFirestore) {
    this.meetingsCollection = this.afs.collection('meetings');
  }

  meetings(): MeetingStorage {
    return {

      create: (startedAt: Date) => {
        const meeting = new Meeting();
        const id = this.afs.createId();
        meeting.startedAt = startedAt;
        this.afs.doc<Meeting>('meetings/' + id).set(Object.assign({}, meeting));
        return id;
      },

      find: (id: string) => {
        return this.afs.doc<Meeting>('meetings/' + id).valueChanges()
      },

      findAll: () => {
        return this.meetingsCollection.snapshotChanges().map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as Meeting;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        });
      }
    };
  }

  retroItems(): RetroItemStorage {
    return {

      findItemsForMeeting: (id: string) => {
        return this.afs.collection<RetroItem>('meetingminutes/' + id + '/retroitems').valueChanges();
      },

      create: (meetingId: string, retroItem: RetroItem) => {
        const itemDoc = this.afs.doc<RetroItem>('meetingminutes/' + meetingId + '/retroitems/' + retroItem.timestamp);
        itemDoc.set(Object.assign({}, retroItem));
      },

      deleteItem: (meetingId: string, retroItemId: string) => {
        this.afs.doc<RetroItem>('meetingminutes/' + meetingId + '/retroitems/' + retroItemId).delete();
      },

      updateVote: (meetingId, retroItem) => {
        const itemDoc = this.afs.doc<RetroItem>('meetingminutes/' + meetingId + '/retroitems/' + retroItem.timestamp);
        itemDoc.update({"votes": retroItem.votes})
      },

      updateContent: (meetingId, retroItem) => {
        const itemDoc = this.afs.doc<RetroItem>('meetingminutes/' + meetingId + '/retroitems/' + retroItem.timestamp);
        itemDoc.update({
          "content": retroItem.content,
          "positive": retroItem.positive || false,
          "actionItem": retroItem.actionItem
        })
      }
    }
  }
}
