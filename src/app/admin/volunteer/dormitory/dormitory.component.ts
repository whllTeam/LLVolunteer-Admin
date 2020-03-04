import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { NotifyMessageComponent } from '../../notify-message/notify-message.component';
import { VolunteerSignInfo } from '../Model/volunteerSignInfo';
import { DormitoryService } from '../Services/dormitory.service';
import { NzModalService } from 'ng-zorro-antd';
import { SignQuery } from '../../Model/Common/volunteerSignQuery';
import { DormitoryType } from '../../Model/Dormitory/dormitoryType';

@Component({
  selector: 'app-dormitory',
  templateUrl: './dormitory.component.html',
  styleUrls: ['./dormitory.component.css']
})
export class DormitoryComponent implements OnInit {

  @ViewChild('notifyMessage')
  notiyfMessage: NotifyMessageComponent;
  dormitoryType: DormitoryType[];
  chooseTab = '';
  volunteerSignInfos: VolunteerSignInfo[];
  volunteerSignInfosCopy: VolunteerSignInfo[];
  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  constructor(
    private service: DormitoryService
  ) { }
  ngOnInit() {
    const $this = this;
    // 初始化  报名面板
    this.service.getDormitoryType()
      .subscribe( value => {
        $this.dormitoryType = value ;
        const dormitory = $this.dormitoryType[0];
        $this.chooseTab = dormitory.name;
      });
    this.loadData();
  }

  loadData() {
  }

  tabSelect(name: string) {
    this.chooseTab = name;
  }
}
