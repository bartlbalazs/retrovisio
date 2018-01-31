import {Component, Inject, OnInit} from '@angular/core';
import {AuthClient} from "../../communication/AuthClient";
import * as firebase from "firebase";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: firebase.User;
  email: string;
  password: string;

  constructor(@Inject('AuthClient') private authClient: AuthClient, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.authClient.addStateListener(this.updateUser.bind(this));
  }

  login(): void {
    this.authClient.login(this.email, this.password);
  }

  logout(): void {
    this.authClient.logout();
  }

  private updateUser(user: firebase.User): void {
    this.user = user;
  }
}
