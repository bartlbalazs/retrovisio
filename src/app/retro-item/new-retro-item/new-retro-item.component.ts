import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RetroItemService} from "../retro-item.service";
import {ActivatedRoute} from "@angular/router";
import {RetroItem} from "../../shared/RetroItem";

@Component({
  selector: 'app-new-retro-item',
  templateUrl: './new-retro-item.component.html',
  styleUrls: ['./new-retro-item.component.css']
})
export class NewRetroItemComponent implements OnInit {

  @ViewChild('f') itemForm: NgForm;

  public positive: boolean = false;

  constructor(private retroItemService: RetroItemService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onAddItem() {
    let meetingId = this.route.snapshot.params['id'];
    let content = this.itemForm.value.content;
    let positive = this.itemForm.value.positive;
    this.retroItemService.addItemToMeeting(meetingId, content, positive);
    this.itemForm.resetForm();
  }
}
