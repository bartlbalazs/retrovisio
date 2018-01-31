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
  }

  login(): void {
    this.authClient.login(this.email, this.password, this.updateUser.bind(this));
  }

  logout(): void {
    this.authClient.logout(this.updateUser.bind(this));
  }

  updateUser(user: firebase.User): void {
    this.user = user;
  }
}
