import * as firebase from "firebase";

export interface LoginStateListener {

  loginStateChanged(user: firebase.User): void;
}
