import {Component, OnInit} from '@angular/core';
import {MeetingsService} from "./meetings.service";
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";
import {Router} from "@angular/router";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: Observable<Meeting[]>;

  constructor(private meetingsService: MeetingsService, private router: Router) {
  }

  ngOnInit() {
    this.meetings = this.meetingsService.getMeetings();
  }

  onLoadMeeting(id : string) {
    this.router.navigate(['/meetings', id]);
  }
}
