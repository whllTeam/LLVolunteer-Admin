import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IndexComponent } from './index/index.component';
import { IndexService } from './Services/index.service';
import { NotifyMessageModule } from './notify-message/notify-message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowTableComponent } from './index/show-table/show-table.component';
import { ActivityForOrgComponent } from './activity-for-org/activity-for-org.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationService } from './Services/organization.service';
import { ActivityService } from './Services/activity.service';
import { ModalForActivityComponent } from './activity-for-org/modal-for-activity/modal-for-activity.component';
import { ModalForOrgComponent } from './organization/modal-for-org/modal-for-org.component';
import { UploadFileModule } from './upload-file/upload-file.module';

@NgModule({
  declarations: [
    AdminComponent,
    IndexComponent,
    ShowTableComponent,
    ActivityForOrgComponent,
    OrganizationComponent,
    ModalForActivityComponent,
    ModalForOrgComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NotifyMessageModule,
    AdminRoutingModule,
    UploadFileModule
  ],
  providers: [
    IndexService,
    ActivityService,
    OrganizationService
  ],
  entryComponents: [
    ShowTableComponent,
    ModalForActivityComponent,
    ModalForOrgComponent
  ]
})
export class AdminModule { }
