import {Component, Inject, OnInit} from '@angular/core';
import {AuthClient} from "./communication/AuthClient";
import {LoginStateListener} from "./shared/LoginStateListener";
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, LoginStateListener {

  isLoggedIn: boolean = false;

  constructor(@Inject('AuthClient') private authClient: AuthClient) {
  }


  ngOnInit(): void {
    this.authClient.addStateListener(this);
  }

  loginStateChanged(user: firebase.User): void {
    this.isLoggedIn = user && true;
  }
}
