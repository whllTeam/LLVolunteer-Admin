import { PageInfo } from '../Essay/pageInfo';
import { ImageInfo } from '../ImageInfo';
import { ActivityForOrganization } from './activityForOrganization';


export class OrganizationInfo {
  constructor(
    public id: number,
    public organizerName: string,
    public isDel: boolean,
    public from: string,
    public logoUrl: string,
    public description: string,
    public contact: string,
    public pageInfoDtos: PageInfo[],
    public imageForOrganizionDtos: ImageInfo[],
    public activityForOrganizationDtos: ActivityForOrganization[]
  ) {}
}
