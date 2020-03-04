import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { OfficeOptComponent } from './office-opt/office-opt.component';
import { DormitoryOptComponent } from './dormitory-opt/dormitory-opt.component';
import { DormitortTabsComponent } from './components/dormitort-tabs/dormitort-tabs.component';
import { OfficeTabsComponent } from './components/office-tabs/office-tabs.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityOptComponent } from './activity-opt/activity-opt.component';
import { ActivityOptService } from './Services/activity-opt.service';
import { DormitoryOptService } from './Services/dormitory-opt.service';
import { OfficeOptService } from './Services/office-opt.service';

@NgModule({
  declarations: [
    OfficeOptComponent,
    DormitoryOptComponent,
    DormitortTabsComponent,
    OfficeTabsComponent,
    ActivityOptComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ActivityOptService,
    DormitoryOptService,
    OfficeOptService
  ]
})
export class ReportModule { }
