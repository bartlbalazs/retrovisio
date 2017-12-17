import {Component, OnInit} from '@angular/core';
import {MeetingsService} from "../meetings.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Meeting} from "../../shared/Meeting";
import {Observable} from "rxjs/Observable";
import {RetroItemService} from "../../retro-item/retro-item.service";
import {RetroItem} from "../../shared/RetroItem";

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.css']
})
export class MeetingDetailComponent implements OnInit {

  meeting: Observable<Meeting>;
  retroItems: Observable<RetroItem[]>;
  orderedItems: RetroItem[] = [];

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

  onStartEvaluate() {
    const id = this.route.snapshot.params['id'];
    this.retroItemService.getRetroItems(id)
      .map(items => items.sort((a, b) => {
        return a.votes > b.votes ? -1 : 1;
      }))
      .forEach(items => {
        this.orderedItems = items;
        console.log(this.orderedItems);
      });
  }

  private loadMeetingData(id: string) {
    this.meeting = this.meetingService.getMeeting(id);
    this.retroItems = this.retroItemService.getRetroItems(id);
  }
}
