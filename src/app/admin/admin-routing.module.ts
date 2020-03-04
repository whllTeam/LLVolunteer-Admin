import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { IndexComponent } from './index/index.component';
import { ActivityForOrgComponent } from './activity-for-org/activity-for-org.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
    path: 'vo', component: AdminComponent,
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'activity', component: ActivityForOrgComponent},
      { path: 'organization', component: OrganizationComponent},
      { path: 'volunteer', loadChildren: './volunteer/volunteer.module#VolunteerModule'},
      { path: 'report', loadChildren: './report/report.module#ReportModule'},
      { path: '**', redirectTo: 'index'}]
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'vo'
  }
];

@NgModule({
  imports: [
     CommonModule,
     RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
