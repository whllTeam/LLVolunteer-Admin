import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NotifyMessageModule } from '../notify-message/notify-message.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ImageUploadComponent, FileUploadComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NotifyMessageModule
  ],
  exports: [ImageUploadComponent, FileUploadComponent]
})
export class UploadFileModule { }
