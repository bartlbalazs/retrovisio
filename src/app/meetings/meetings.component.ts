import { Component, OnInit } from '@angular/core';
import {MeetingsService} from "./meetings.service";
import {Observable} from "rxjs/Observable";
import {Meeting} from "../shared/Meeting";

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: Observable<Meeting[]>;

  constructor(private meetingsService: MeetingsService) { }

  ngOnInit() {
    this.meetings = this.meetingsService.getMeetings();
  }
}
