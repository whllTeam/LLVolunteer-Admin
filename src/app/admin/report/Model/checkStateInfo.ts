export class CheckStateInfo {
  constructor(
    public userName: string,
    public volunteerActivityId: number,
    public volunteerWeekId: number,
    public volunteerTimeId: number,
    public realUserName: string,
    public isAuthorize: boolean,
    public userNameStr: string
  ) {}
}
