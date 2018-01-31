import {AuthClient} from "./AuthClient";
import {Injectable} from "@angular/core";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class FirebaseAuthClient implements AuthClient {

  constructor(private angularFireAuth: AngularFireAuth) {
  }


  login(email: string, password: string, callback: Function): void {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userInfo => callback(userInfo));
  }

  logout(callback: Function): void {
    this.angularFireAuth.auth.signOut()
      .then(userInfo => callback(userInfo));
  }

  getCurrentUser(): firebase.User {
    return this.angularFireAuth.auth.currentUser;
  }
}
