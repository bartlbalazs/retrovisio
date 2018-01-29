import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {RetroItemService} from "../../retro-item/retro-item.service";
import {MeetingsService} from "../meetings.service";
import {Observable} from "rxjs/Observable";
import {RetroItem} from "../../shared/RetroItem";
import {Meeting} from "../../shared/Meeting";

@Component({
  selector: 'app-meeting-evaluation',
  templateUrl: './meeting-evaluation.component.html',
  styleUrls: ['./meeting-evaluation.component.css']
})
export class MeetingEvaluationComponent implements OnInit {

  constructor(private meetingService: MeetingsService, private retroItemService: RetroItemService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (value: Params) => {
          this.loadMeetingData(value['id'])
        }
      );
  }

  private loadMeetingData(id: string) {
    this.meeting = this.meetingService.getMeeting(id);
    this.retroItems = this.retroItemService.getRetroItems(id);
  }

  meeting: Observable<Meeting>;
  retroItems: Observable<RetroItem[]>;
}
