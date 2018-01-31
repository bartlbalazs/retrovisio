import {Component, Inject, OnInit} from '@angular/core';
import {MeetingsService} from "./meetings.service";
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";
import {Router} from "@angular/router";
import {AuthClient} from "../communication/AuthClient";
import * as firebase from "firebase";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: Observable<Meeting[]>;
  user: firebase.User;

  constructor(private meetingsService: MeetingsService, @Inject('AuthClient') private authClient: AuthClient, private router: Router) {
  }

  ngOnInit() {
    this.authClient.addStateListener(this.onLoginStatusChange.bind(this));
    this.onLoginStatusChange();
  }

  onLoadMeeting(id : string) {
    this.navigateToMeeting(id);
  }

  onStartMeeting() {
    const newMeetingId = this.meetingsService.startMeeting();
    this.navigateToMeeting(newMeetingId);
  }

  private onLoginStatusChange() : void {
    this.meetings = this.meetingsService.getMeetings();
    this.user = this.authClient.getCurrentUser();
  }

  private navigateToMeeting(id: string) {
    this.router.navigate(['/meetings', id]);
  }
}
