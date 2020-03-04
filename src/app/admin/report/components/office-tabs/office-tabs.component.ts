import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { OfficeOptService } from '../../Services/office-opt.service';
import { OfficeyWeek } from 'src/app/admin/Model/Office/officeWeek';
import { OfficeTime } from 'src/app/admin/Model/Office/officeTime';
import { CheckStateInfo } from '../../Model/checkStateInfo';
import { CheckStateInfoRequest } from '../../Model/CheckStateInfoRequest';
import { Volunteer_Office } from 'src/app/admin/Model/ConstValue/const';

@Component({
  selector: 'app-office-tabs',
  templateUrl: './office-tabs.component.html',
  styleUrls: ['./office-tabs.component.css']
})
export class OfficeTabsComponent implements OnInit {

  @Input()
  officeTypeId: number;
  @Output()
  loadData = new EventEmitter<string>();
  // 周 信息
  officeWeek: OfficeyWeek[];
  // 时间段 信息
  officeTime: OfficeTime[];

  checkStateInfo: CheckStateInfo[];

  constructor(
    private officeService: OfficeOptService
  ) { }

  ngOnInit() {
    this.officeService.getOfficeTime()
      .subscribe(value => {
        this.officeTime = value;
      });
    this.officeService.getOfficeWeek()
      .subscribe(value => {
        this.officeWeek = value;
      });
    const query = new CheckStateInfoRequest(true, '', '', Volunteer_Office, this.officeTypeId);
    this.officeService.getOfficeCheckTableInfo(query)
      .subscribe(value => {
        this.checkStateInfo = value;
      });
  }

  getUserName(weekId: number, timeId: number) {
    if (this.checkStateInfo) {
      const info = this.checkStateInfo.filter(t => t.volunteerWeekId === weekId && t.volunteerTimeId === timeId);
      return info.length > 0 ? info[0].userNameStr : '暂无';
    } else {
      return '暂无';
    }
  }
  checkHasUser(weekId: number, timeId: number) {
    if (this.checkStateInfo) {
      const info = this.checkStateInfo.filter(t => t.volunteerWeekId === weekId && t.volunteerTimeId === timeId);
      return info.length > 0;
    } else {
      return false;
    }
  }
}
