import { Component, OnInit, ViewChild } from '@angular/core';
import { OfficeService } from '../Services/office.service';
import { NotifyMessageComponent } from '../../notify-message/notify-message.component';
import { VolunteerSignInfo } from '../Model/volunteerSignInfo';
import { NzModalService } from 'ng-zorro-antd';
import { QueryParameters } from '../../Model/Common/queryParams';
import { SignQuery } from '../../Model/Common/volunteerSignQuery';
import { OfficeType } from '../../Model/Office/officeType';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  @ViewChild('notifyMessage')
  notiyfMessage: NotifyMessageComponent;
  officeyType: OfficeType[];
  chooseTab = '';
  volunteerSignInfos: VolunteerSignInfo[];
  volunteerSignInfosCopy: VolunteerSignInfo[];
  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  constructor(
    private service: OfficeService,
  ) { }
  ngOnInit() {
    // 初始化  报名面板
    this.service.getOfficeType()
      .subscribe( value => {
        this.officeyType = value ;
        const office = this.officeyType[0];
        this.chooseTab = office.name;
      });
  }

  tabSelect(name: string) {
    this.chooseTab = name;
  }
}
