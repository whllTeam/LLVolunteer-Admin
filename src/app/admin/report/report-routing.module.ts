import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeOptComponent } from './office-opt/office-opt.component';
import { DormitoryOptComponent } from './dormitory-opt/dormitory-opt.component';
import { ActivityOptComponent } from './activity-opt/activity-opt.component';

const routes: Routes = [
  { path: 'office', component: OfficeOptComponent},
  { path: 'dormitory', component: DormitoryOptComponent},
  { path: 'activity', component: ActivityOptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
