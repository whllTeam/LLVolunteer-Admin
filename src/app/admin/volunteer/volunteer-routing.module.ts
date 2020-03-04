import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeComponent } from './office/office.component';
import { DormitoryComponent } from './dormitory/dormitory.component';
import { ActivityForOrgComponent } from './activity-for-org/activity-for-org.component';

const routes: Routes = [
  {
    path: 'office', component: OfficeComponent
  },
  {
    path: 'dormitory', component: DormitoryComponent
  },
  {
    path: 'activity', component: ActivityForOrgComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }
