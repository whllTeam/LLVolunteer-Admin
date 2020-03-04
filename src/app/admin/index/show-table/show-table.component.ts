import { Component, OnInit, Output, Input } from '@angular/core';
import { PageInfo } from '../../Model/Essay/pageInfo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationInfo } from '../../Model/Organizations/organizationInfo';
import { NzMessageService } from 'ng-zorro-antd';
import { IndexService } from '../../Services/index.service';
import { Observable, of } from 'rxjs';
import { UploadFileInfo } from '../../upload-file/Model/uploadFileInfo';
import { FileType_VolunteerImage } from '../../Model/ConstValue/const';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  @Input()
  pageInfo: PageInfo;
  @Input()
  organizationInfos: OrganizationInfo[];
  fileUploadList: UploadFileInfo[];
  $fileUploadLoad: Observable<UploadFileInfo[]>;
  uploadImageType = FileType_VolunteerImage;
  pageFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private service: IndexService
  ) { }

  ngOnInit() {
    this.getFileList();
    const $this = this;
    const title = $this.pageInfo === undefined || null ? null : $this.pageInfo.title;
    const description = $this.pageInfo === undefined ? null : $this.pageInfo.description;
    const content = $this.pageInfo === undefined ? null : $this.pageInfo.content;
    const orgId = $this.pageInfo === undefined ? null : $this.pageInfo.organizationInfoId;
    this.pageFormGroup = this.fb.group({
      title: [ title, [Validators.required]],
      description: [ description, [Validators.required]],
      content: [ content, [Validators.required]],
      orgId: [ orgId, [Validators.required]],
    });
  }
  getFileList() {
    if (this.pageInfo) {
      this.$fileUploadLoad = this.service.getFileList(this.pageInfo.id);
    }
  }
  submitForm(): Observable<boolean> {
    if (this.pageFormGroup.valid) {
      const parmas = new PageInfo( // 需要从登陆信息中获取
        (this.pageInfo === undefined || this.pageInfo == null) ? 'admin' : this.pageInfo.publiserhName,
        this.pageFormGroup.value.title,
        this.pageFormGroup.value.description,
        this.pageFormGroup.value.content,
        this.pageFormGroup.value.orgId,
        '',
        (this.pageInfo === undefined || this.pageInfo == null) ? 0 : this.pageInfo.id,
        false,
        null,
        this.fileUploadList,
        '',
        ''
      );
      if (this.pageInfo) {
        // 修改
        return this.service.modifyPageInfo(parmas);
      } else {
        // 添加
        return this.service.addPageInfo(parmas);
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
