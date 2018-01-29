import {Component, Input, OnInit} from '@angular/core';
import {RetroItemService} from "../retro-item.service";
import {RetroItem} from "../../shared/RetroItem";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-evaluatable-item',
  templateUrl: './evaluatable-item.component.html',
  styleUrls: ['./evaluatable-item.component.css']
})
export class EvaluatableItemComponent implements OnInit {

  @Input()
  retroItem: RetroItem;

  isEdited: boolean = false;

  constructor(private retroItemService: RetroItemService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onActionItemChanged() {
    this.isEdited = true;
  }

  onUpdate() {
    this.retroItemService.editContent(this.getMeetingId(), this.retroItem);
    this.isEdited = false;
  }

  private getMeetingId(): string {
    return this.route.snapshot.params['id']
  }
}
