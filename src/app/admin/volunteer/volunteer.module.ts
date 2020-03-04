import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { OfficeComponent } from './office/office.component';
import { DormitoryComponent } from './dormitory/dormitory.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfficeService } from './Services/office.service';
import { DormitoryService } from './Services/dormitory.service';
import { NotifyMessageModule } from '../notify-message/notify-message.module';
import { ActivityForOrgComponent } from './activity-for-org/activity-for-org.component';
import { OfficeTabComponent } from './office-tab/office-tab.component';
import { DormitoryTabComponent } from './dormitory-tab/dormitory-tab.component';
import { ActivityVolunteerService } from './Services/activity-volunteer.service';

@NgModule({
  declarations: [OfficeComponent, DormitoryComponent, ActivityForOrgComponent, OfficeTabComponent, DormitoryTabComponent],
  imports: [
    CommonModule,
    VolunteerRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NotifyMessageModule
  ],
  providers: [
    OfficeService,
    DormitoryService,
    ActivityVolunteerService
  ]
})
export class VolunteerModule { }
