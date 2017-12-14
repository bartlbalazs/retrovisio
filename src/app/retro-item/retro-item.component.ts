import {Component, Input, OnInit} from '@angular/core';
import {RetroItem} from "../shared/RetroItem";
import {RetroItemService} from "./retro-item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-retro-item',
  templateUrl: './retro-item.component.html',
  styleUrls: ['./retro-item.component.css']
})
export class RetroItemComponent implements OnInit {

  @Input()
  order: number;

  @Input()
  retroItem: RetroItem;

  constructor(private retroItemService: RetroItemService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }


  onUpVote() {
    this.retroItemService.upVote(this.getMeetingId(), this.retroItem);
  }

  onDownVote() {
    this.retroItemService.downVote(this.getMeetingId(), this.retroItem);
  }

  private getMeetingId(): string {
    return this.route.snapshot.params['id']
  }
}
