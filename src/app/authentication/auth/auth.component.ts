import {Component, Inject, OnInit} from '@angular/core';
import {AuthClient} from "../../communication/AuthClient";
import * as firebase from "firebase";
import {LoginStateListener} from "../../shared/LoginStateListener";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, LoginStateListener {

  user: firebase.User;
  email: string;
  password: string;

  constructor(@Inject('AuthClient') private authClient: AuthClient) {
  }

  ngOnInit() {
    this.authClient.addStateListener(this);
  }

  login(): void {
    this.authClient.login(this.email, this.password);
  }

  logout(): void {
    this.authClient.logout();
  }

  loginStateChanged(user: firebase.User): void {
    this.user = user;
  }
}
