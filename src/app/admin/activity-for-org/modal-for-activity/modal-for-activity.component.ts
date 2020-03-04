import { Component, OnInit, Input } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganizationInfo } from '../../Model/Organizations/organizationInfo';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivityService } from '../../Services/activity.service';
import { ActivityForOrganization } from '../../Model/Organizations/activityForOrganization';
import { DatePipe } from '@angular/common';
import { FileType_OrgActivityImage } from '../../Model/ConstValue/const';
import { UploadFileInfo } from '../../upload-file/Model/uploadFileInfo';

@Component({
  selector: 'app-modal-for-activity',
  templateUrl: './modal-for-activity.component.html',
  styleUrls: ['./modal-for-activity.component.css']
})
export class ModalForActivityComponent implements OnInit {

  @Input()
  activity: ActivityForOrganization;
  @Input()
  organizationInfos: OrganizationInfo[];
  fileUploadList: UploadFileInfo[];
  $fileUploadLoad: Observable<UploadFileInfo[]>;
  // 志愿组织活动
  uploadImageType = FileType_OrgActivityImage;
  activityFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataPipe: DatePipe,
    private message: NzMessageService,
    private service: ActivityService
  ) { }

  ngOnInit() {
    this.getFileList();
    const $this = this;
    const activityDes = $this.activity === undefined || null ? null : $this.activity.activityDes;
    const activityName = $this.activity === undefined ? null : $this.activity.activityName;
    const startAndEndTime = $this.activity === undefined ? [] : [ new Date($this.activity.startTime), new Date($this.activity.endTime)];
    const signMaxNum = $this.activity === undefined ? 1 : $this.activity.signMaxNum;
    const volunteerTime = $this.activity === undefined ? 1 : $this.activity.volunteerTime;
    const organizationInfoId = $this.activity === undefined ? null : $this.activity.organizationInfoId;
    // const startTime = $this.activity === undefined ? null : $this.activity.startTime;
    // const endTime = $this.activity === undefined ? null : $this.activity.endTime;
    this.activityFormGroup = this.fb.group({
      activityDes: [ activityDes, [Validators.required]],
      activityName: [ activityName, [Validators.required]],
      startAndEndTime: [ startAndEndTime, [Validators.required]],
      signMaxNum: [ signMaxNum, [Validators.required]],
      volunteerTime: [ volunteerTime, [Validators.required]],
      organizationInfoId: [organizationInfoId, [Validators.required]],
    });
  }
  getFileList() {
    if (this.activity) {
      this.$fileUploadLoad = this.service.getFileList(this.activity.id);
    }
  }
  submitForm(): Observable<boolean> {
    if (this.activityFormGroup.valid) {
      const formValue =   this.activityFormGroup.value;
      const startTime = this.dataPipe.transform(formValue.startAndEndTime[0], 'yyyy-MM-dd HH:mm:ss');
      const endTime = this.dataPipe.transform(formValue.startAndEndTime[1], 'yyyy-MM-dd HH:mm:ss');
      const parmas = new ActivityForOrganization(
        this.activity === undefined ? 0 : this.activity.id,
        formValue.activityName,
        formValue.activityDes,
        startTime,
        endTime,
        formValue.signMaxNum,
        null,
        null,
        null,
        null,
        null,
        null,
        formValue.organizationInfoId,
        formValue.volunteerTime,
        this.fileUploadList,
        '',
        ''
      );
      if (this.activity) {
        // 修改
        return this.service.modifyActivity(parmas);
      } else {
        // 添加
        return this.service.addActivity(parmas);
      }
    } else {
      this.message.create('error', '请按照要求填写');
      return of(false);
    }
  }
  fileListSub($event) {
    this.fileUploadList = $event;
  }
}
