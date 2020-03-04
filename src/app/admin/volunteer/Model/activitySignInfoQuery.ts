export class ActivitySignInfoQuery {
  constructor(
    public userName: string,
    public activityName: string,
    public organizationName: string,
    public createTime: string,
    public isSign: boolean,
    public isSignStr: string,
    public signCount: number,
    public cancelCount: number
  ) {}
}
