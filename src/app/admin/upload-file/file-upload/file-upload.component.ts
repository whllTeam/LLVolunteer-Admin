import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input()
  fileType: number;
  @Output()
  $fileList: EventEmitter<any> = new EventEmitter();
  uploadAction = `${environment.apis.volunteerApi}FileManager`;
  constructor(
    private msg: NzMessageService
  ) { }

  ngOnInit() {
    this.uploadAction = `${this.uploadAction}?fileType=${this.fileType}`;
  }
  handleChange({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} 文件上传成功.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} 文件上传失败，稍后再尝试`);
    }
  }
}
