import {MeetingStorage, StorageClient} from "./StorageClient";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Meeting} from "../shared/Meeting";
import {Injectable} from "@angular/core";

@Injectable()
export class FirebaseStorageClient implements StorageClient {

  private meetingsCollection: AngularFirestoreCollection<Meeting>;

  constructor(private afs: AngularFirestore) {
    this.meetingsCollection = this.afs.collection('meetings');
  }

  meetings(): MeetingStorage {
    return {
      
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
}
