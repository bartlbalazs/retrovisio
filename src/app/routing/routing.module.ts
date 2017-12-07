import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MeetingsComponent} from "../meetings/meetings.component";
import {MeetingDetailComponent} from "../meetings/meeting-detail/meeting-detail.component";

const appRoutes: Routes = [
  {path: '', component: MeetingsComponent},
  {path: 'meetings', component: MeetingsComponent},
  {path: 'meetings/:id', component: MeetingDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
