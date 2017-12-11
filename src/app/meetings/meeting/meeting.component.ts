import {Component, Input, OnInit, Output} from '@angular/core';
import {Meeting} from "../../shared/Meeting";

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  @Input()
  meeting: Meeting;

  constructor() {
  }

  ngOnInit() {
  }

}
