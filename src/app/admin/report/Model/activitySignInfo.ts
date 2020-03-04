import { ActivityForOrganization } from '../../Model/Organizations/activityForOrganization';
import { ImageInfo } from '../../Model/ImageInfo';

export class ActivitySignInfo {
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
    public signUserInfo: string[],
    public signUserInfoStr: string,
    public hasSignCount: number
  ) {}
}

