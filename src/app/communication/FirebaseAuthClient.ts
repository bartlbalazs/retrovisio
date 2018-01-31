import {AuthClient} from "./AuthClient";
import {Injectable} from "@angular/core";
import * as firebase from "firebase";
import {AngularFireAuth} from "angularfire2/auth";
import {LoginStateListener} from "../shared/LoginStateListener";

@Injectable()
export class FirebaseAuthClient implements AuthClient {

  private stateListeners: LoginStateListener[] = [];

  constructor(private angularFireAuth: AngularFireAuth) {
  }

  login(email: string, password: string): void {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userInfo => this.notifyListeners(userInfo));
  }

  logout(): void {
    this.angularFireAuth.auth.signOut()
      .then(userInfo => this.notifyListeners(userInfo));
  }

  getCurrentUser(): firebase.User {
    return this.angularFireAuth.auth.currentUser;
  }

  addStateListener(listener: LoginStateListener): void {
    this.stateListeners.push(listener);
  }

  private notifyListeners(userInfo: firebase.User) {
    this.stateListeners.forEach(listener => listener.loginStateChanged(userInfo));
  }
}
