export class VolunteerSignInfo {
  constructor(
    public userName: string,
    public type: number,
    public typeStr: string,
    public volunteerName: string,
    public volunteerNameId: number,
    public signState: number,
    public signStateStr: string,
    public weekInfoName: string,
    public weekId: number,
    public detailTimes: string,
    public detailTimeId: number,
    public createTime: number,
    public isSign: boolean,
    public isSignStr: string,
    public signCount: number,
    public cancelCount: number,
    public signTableId: number,
    public cancheckStr: string,
    public canCheck: boolean
  ) {}
}
