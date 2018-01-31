import {Component, Inject, OnInit} from '@angular/core';
import {MeetingsService} from "./meetings.service";
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";
import {Router} from "@angular/router";
import {AuthClient} from "../communication/AuthClient";
import * as firebase from "firebase";
import {LoginStateListener} from "../shared/LoginStateListener";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit, LoginStateListener {

  meetings: Observable<Meeting[]>;
  user: firebase.User;

  constructor(private meetingsService: MeetingsService, @Inject('AuthClient') private authClient: AuthClient, private router: Router) {
  }

  ngOnInit() {
    this.authClient.addStateListener(this);
    this.user = this.authClient.getCurrentUser();
    this.meetings = this.meetingsService.getMeetings();
  }

  onLoadMeeting(id: string) {
    this.navigateToMeeting(id);
  }

  onStartMeeting() {
    const newMeetingId = this.meetingsService.startMeeting();
    this.navigateToMeeting(newMeetingId);
  }

  private navigateToMeeting(id: string) {
    this.router.navigate(['/meetings', id]);
  }

  loginStateChanged(user: firebase.User): void {
    this.user = user;
    this.meetings = this.meetingsService.getMeetings();
  }
}
