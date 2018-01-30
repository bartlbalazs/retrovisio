import {Component, OnInit} from '@angular/core';
import {RetroItemService} from "../../retro-item/retro-item.service";
import {MeetingsService} from "../meetings.service";
import {ActivatedRoute, Params} from "@angular/router";
import {RetroItem} from "../../shared/RetroItem";

@Component({
  selector: 'app-summarize',
  templateUrl: './meeting-summarize.component.html',
  styleUrls: ['./meeting-summarize.component.css']
})
export class SummarizeComponent implements OnInit {

  constructor(private meetingService: MeetingsService, private retroItemService: RetroItemService, private route: ActivatedRoute) {
  }

  meetingDate: Date = null;
  summary: string = '';


  ngOnInit() {
    this.route.params
      .subscribe(
        (value: Params) => {
          this.loadMeetingData(value['id'])
        }
      );
  }

  private loadMeetingData(id: string) {
    this.meetingService.getMeeting(id).subscribe(meeting => this.meetingDate = meeting.startedAt);

    this.retroItemService.getRetroItems(id).subscribe(items => {
      let positiveItems = '<b>Positive:</b><br/>';
      let negativeItems = '<b>Negative:</b><br/>';

      items
        .sort((a, b) => {
            return a.votes > b.votes ? -1 : 1;
          }
        )
        .forEach(retroItem => {
          const itemString = this.convertItemToString(retroItem);
          if (retroItem.positive) {
            positiveItems += itemString;
          } else {
            negativeItems += itemString;
          }
        });

      this.summary = negativeItems + "<br/>" + positiveItems;
    });
  }

  private convertItemToString(retroItem: RetroItem): string {
    let result = '';

    result += '<b>';
    if (retroItem.votes > 0) {
      for (let i = 0; i < retroItem.votes; i++) {
        result += retroItem.positive ? '+ ' : '- ';
      }
    } else {
      result += retroItem.positive ? '(+) ' : '(-) ';
    }
    result += '</b>';

    result += ' ' + retroItem.content + '<br/>';

    if (!retroItem.positive && retroItem.actionItem) {
      result += '<i>action item: </i>' + retroItem.actionItem + '<br/>';
    }
    result += '</br>';
    return result;
  }
}
