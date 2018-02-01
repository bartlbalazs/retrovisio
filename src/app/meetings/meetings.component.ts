import {Component, OnInit} from '@angular/core';
import {MeetingsService} from "./meetings.service";
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";
import {Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: Observable<Meeting[]>;
  user: firebase.User;

  constructor(private meetingsService: MeetingsService, private router: Router) {
  }

  ngOnInit() {
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
}
