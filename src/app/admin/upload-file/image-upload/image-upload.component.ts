import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, NgZone } from '@angular/core';
import { UploadFile, NzMessageService } from 'ng-zorro-antd';
import { environment } from 'src/environments/environment';
import { UploadFileInfo } from '../Model/uploadFileInfo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  @Input()
  fileType: number;
  @Output()
  $fileList: EventEmitter<any> = new EventEmitter();
  @Input()
  loadFileList: Observable<UploadFileInfo[]>; //  获取  原始  列表
  // 和上传列表绑定
  fileList = [];
  fileUploadList: UploadFileInfo[] = [];
  uploadAction = `${environment.apis.volunteerApi}FileManager`;

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  previewImage: string | undefined = '';
  previewVisible = false;
  constructor(
    private msg: NzMessageService,
    private cdf: ChangeDetectorRef,
    private zone: NgZone
  ) { }

  ngOnInit() {
    const $this = this;
    $this.uploadAction = `${$this.uploadAction}?fileType=${$this.fileType}`;
    if ($this.loadFileList) {
      $this.loadFileList.subscribe(value => {
        $this.zone.run(() => {
          if (value) {
            $this.fileUploadList = value;
            // $this.fileList = [
            //   {
            //   uid: '23432432423',
            //   name: 't.fileName',
            //   status: 'done',
            //   type: 'image/jpeg',
            //   url: 'http://localhost:4000/Upload/orgActivityImage/3125d9fb-ff5c-48cc-9b79-cf14aee7aa9a.png',
            //   thumbUrl: 'http://localhost:4000/Upload/orgActivityImage/3125d9fb-ff5c-48cc-9b79-cf14aee7aa9a.png'
            //   }];
            const fileListCopy = [];
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < value.length; index++) {
              if (value[index].fileType === this.fileType) {
                fileListCopy.push({
                  uid: value[index].fileId,
                  name: value[index].fileName,
                  status: 'done',
                  type: 'image/jpeg',
                  url: `${environment.apis.fileUrl}/${value[index].filePath}`,
                  thumbUrl: `${environment.apis.fileUrl}/${value[index].filePath}`
                });
              }
            }
            $this.fileList = fileListCopy;
            // value.forEach(t => {
            //   $this.fileList.push({
            //     uid: t.fileId,
            //     name: t.fileName,
            //     status: 'done',
            //     type: 'image/jpeg',
            //     url: `${environment.apis.fileUrl}/${t.filePath}`,
            //     thumbUrl: `${environment.apis.fileUrl}/${t.filePath}`
            //   });
            // });
            this.$fileList.emit(this.fileUploadList);
          }
        });
      });
    }
  }

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  handleChange({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'removed') {
      this.fileUploadList = this.fileUploadList.filter(t => t.fileName !== file.name);
      this.$fileList.emit(this.fileUploadList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} 文件上传成功.`);
      if (file.response) {
        this.fileUploadList.push(new UploadFileInfo(file.name, file.response.fileId, file.response.fileType, ''));
        this.$fileList.emit(this.fileUploadList);
      }
    } else if (status === 'error') {
      this.msg.error(`${file.name} 文件上传失败，稍后再尝试`);
    }
  }
}
