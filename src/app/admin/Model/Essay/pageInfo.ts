import { ImageInfo } from '../ImageInfo';
import { UploadFileInfo } from '../../upload-file/Model/uploadFileInfo';


export class PageInfo {
  constructor(
    public publiserhName: string,
    public title: string,
    public description: string,
    public content: string,
    public organizationInfoId: number,
    public createTime: string,
    public id: number,
    public isDel: boolean,
    public pageImgs: ImageInfo[],
    public fileInfo: UploadFileInfo[],
    public fileImageIds: string,
    public fileExIds: string
  ) {}
}
