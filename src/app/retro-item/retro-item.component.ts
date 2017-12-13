import {Component, Input, OnInit} from '@angular/core';
import {RetroItem} from "../shared/RetroItem";

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

  constructor() {
  }

  ngOnInit() {
  }

}
