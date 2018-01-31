import * as firebase from "firebase";

export interface AuthClient {

  login(email: string, password: string, callback: Function) : void;
  logout(callback: Function) : void;
  getCurrentUser() : firebase.User;
}
