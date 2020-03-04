import { ImageInfo } from '../ImageInfo';
import { UploadFileInfo } from '../../upload-file/Model/uploadFileInfo';

export class ActivityForOrganization {
  constructor(
    public id: number,
    public activityName: string,
    public activityDes: string,
    public startTime: string,
    public endTime: string,
    public signMaxNum: number,
    public isOpen: boolean,
    public activityState: number,
    public activityStateTypeStr: string,
    public canSignActivity: boolean,
    public desImg: ImageInfo,
    public isDel: boolean,
    public organizationInfoId: number,
    public volunteerTime: number,
    public fileInfo: UploadFileInfo[],
    public fileImageIds: string,
    public fileExIds: string
  ) {}
}
