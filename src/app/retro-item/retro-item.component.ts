import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {RetroItem} from "../shared/RetroItem";
import {RetroItemService} from "./retro-item.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

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

  isInEditingMode: boolean = false;

  @ViewChild('f') editForm: NgForm;

  constructor(private retroItemService: RetroItemService, private route: ActivatedRoute, private dialog: MatDialog) {
  }

  ngOnInit() {
  }


  onUpVote() {
    this.retroItemService.upVote(this.getMeetingId(), this.retroItem);
  }

  onDownVote() {
    this.retroItemService.downVote(this.getMeetingId(), this.retroItem);
  }

  onStartEditing() {
    this.isInEditingMode = true;
  }

  onEditItem() {
    this.retroItem.content = this.editForm.value.content;
    this.retroItemService.editContent(this.getMeetingId(), this.retroItem);
    this.isInEditingMode = false;
  }

  onDeleteItem() {
    let dialogRef = this.dialog.open(DeleteConfirmationDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.retroItemService.deleteRetroItem(this.getMeetingId(), this.retroItem.timestamp + '');
      }
    });
  }

  private getMeetingId(): string {
    return this.route.snapshot.params['id']
  }
}

@Component({
  selector: './app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.html',
})
export class DeleteConfirmationDialog {

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
