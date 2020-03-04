export class CheckStateInfoRequest {
  constructor(
    public isCurrentWeek: boolean,
    public startTime: string,
    public endTime: string,
    public volunteerType: number,
    public volunteerActivityId: number
  ) {}
}
