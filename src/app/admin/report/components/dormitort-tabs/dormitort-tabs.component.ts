import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DormitoryWeek } from 'src/app/admin/Model/Dormitory/dormitoryWeek';
import { DormitoryTime } from 'src/app/admin/Model/Dormitory/dormitoryTime';
import { DormitoryOptService } from '../../Services/dormitory-opt.service';
import { CheckStateInfoRequest } from '../../Model/CheckStateInfoRequest';
import { CheckStateInfo } from '../../Model/checkStateInfo';
import { Volunteer_Dormitory } from 'src/app/admin/Model/ConstValue/const';

@Component({
  selector: 'app-dormitort-tabs',
  templateUrl: './dormitort-tabs.component.html',
  styleUrls: ['./dormitort-tabs.component.css']
})
export class DormitortTabsComponent implements OnInit {

  @Input()
  dormitoryTypeId: number;
  @Output()
  loadData = new EventEmitter<string>();
  // 周 信息
  dormitoryWeek: DormitoryWeek[];
  // 时间段 信息
  dormitoryTime: DormitoryTime[];

  checkStateInfo: CheckStateInfo[];

  constructor(
    private dormitoryService: DormitoryOptService
  ) { }

  ngOnInit() {
    this.dormitoryService.getDormitoryTime()
      .subscribe(value => {
        this.dormitoryTime = value;
      });
    this.dormitoryService.getDormitoryWeek()
      .subscribe(value => {
        this.dormitoryWeek = value;
      });
    const query = new CheckStateInfoRequest(true, '', '',  Volunteer_Dormitory, this.dormitoryTypeId);
    this.dormitoryService.getDormitoryCheckTableInfo(query)
      .subscribe( value => {
        this.checkStateInfo = value;
      });
  }

  checkEnable(weekTimeId: number, isDontAllow: string) {
    return isDontAllow.indexOf(weekTimeId.toString()) <= -1;
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
