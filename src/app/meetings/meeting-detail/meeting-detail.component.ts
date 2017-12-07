import {Component, OnInit} from '@angular/core';
import {MeetingsService} from "../meetings.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Meeting} from "../../shared/Meeting";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.css']
})
export class MeetingDetailComponent implements OnInit {

  meeting: Observable<Meeting>;

  constructor(private meetingService: MeetingsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (value:Params)=>{this.meeting = this.meetingService.getMeeting(value['id']);}
      );
  }

}
