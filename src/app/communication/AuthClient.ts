import * as firebase from "firebase";

export interface AuthClient {

  login(email: string, password: string) : void;
  logout() : void;
  getCurrentUser() : firebase.User;
  addStateListener(listener: Function) : void;
}
