import {AuthClient} from "./AuthClient";
import {Injectable} from "@angular/core";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class FirebaseAuthClient implements AuthClient {

  private stateListeners: Function[] = [];

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  login(email: string, password: string): void {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userInfo => this.stateListeners.forEach(listener => listener(userInfo)));
  }

  logout(): void {
    this.angularFireAuth.auth.signOut()
      .then(userInfo => this.stateListeners.forEach(listener => listener(userInfo)));
  }

  getCurrentUser(): firebase.User {
    return this.angularFireAuth.auth.currentUser;
  }

  addStateListener(listener: Function): void {
    this.stateListeners.push(listener);
  }
}
