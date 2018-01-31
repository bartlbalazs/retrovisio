import * as firebase from "firebase";
import {LoginStateListener} from "../shared/LoginStateListener";

export interface AuthClient {

  login(email: string, password: string) : void;
  logout() : void;
  getCurrentUser() : firebase.User;
  addStateListener(listener: LoginStateListener) : void;
}
