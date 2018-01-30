import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MeetingsComponent} from "../meetings/meetings.component";
import {MeetingDetailComponent} from "../meetings/meeting-detail/meeting-detail.component";
import {MeetingEvaluationComponent} from "../meetings/meeting-evaluation/meeting-evaluation.component";
import {SummarizeComponent} from "../meetings/meeting-summarize/meeting-summarize.component";

const appRoutes: Routes = [
  {path: '', component: MeetingsComponent},
  {path: 'meetings', component: MeetingsComponent},
  {path: 'meetings/:id', component: MeetingDetailComponent},
  {path: 'meetings/:id/evaluate', component: MeetingEvaluationComponent},
  {path: 'meetings/:id/summarize', component: SummarizeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
