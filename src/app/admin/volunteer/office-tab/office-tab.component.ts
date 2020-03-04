import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { VolunteerSignInfo } from '../Model/volunteerSignInfo';
import { SignQuery } from '../../Model/Common/volunteerSignQuery';
import { OfficeService } from '../Services/office.service';
import { NotifyMessageComponent } from '../../notify-message/notify-message.component';
import { CheckState } from '../Model/checkState';

@Component({
  selector: 'app-office-tab',
  templateUrl: './office-tab.component.html',
  styleUrls: ['./office-tab.component.css']
})
export class OfficeTabComponent implements OnInit {

  @ViewChild('notifyMessage')
  notiyfMessage: NotifyMessageComponent;

  @Input()
  typeId: number;
  volunteerSignInfos: VolunteerSignInfo[];
  volunteerSignInfosCopy: VolunteerSignInfo[];
  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  constructor(
    private service: OfficeService
  ) { }

  ngOnInit() {
    this.loadData(this.pageIndex);
  }

  loadData(pageIndex: number) {
    const query = new SignQuery(
      '',
      '',
      '',
      0,
      0,
      0,
      this.typeId,
      pageIndex,
      this.pageSize,
      true,
      false
    );
    this.service.getsignInfoQuery(query)
      .subscribe(value => {
        this.volunteerSignInfos = value.data;
        this.volunteerSignInfosCopy = this.volunteerSignInfos;
        this.pageTotalCount = value.totalItemsCount;
        this.pageIndex = value.pageIndex;
      });
  }

  checkHandle(info: VolunteerSignInfo) {
    if (info.canCheck === true) {
      const parms = new CheckState(
        info.userName,
        info.signTableId,
        info.weekId,
        info.detailTimeId,
        this.typeId
      );
      this.service.checkOfficeState(parms)
        .subscribe( value => {
          if (value === true) {
            this.notiyfMessage.showMessage('success', '审核成功');
          } else {
            this.notiyfMessage.showMessage('error', '审核失败');
          }
          this.loadData(this.pageIndex);
        });
    } else {
      this.notiyfMessage.showMessage('info', '当前状态不能通过');
    }
  }

  getWeekColor(weekName: string) {
    if ( weekName.indexOf('一') >= 0) {
      return 'red';
    } else if ( weekName.indexOf('二') >= 0) {
      return '#48D1CC';
    } else if ( weekName.indexOf('三') >= 0) {
      return '#F5DEB3';
    } else if ( weekName.indexOf('四') >= 0) {
      return 'yellow';
    } else if ( weekName.indexOf('五') >= 0) {
      return 'pink';
    } else  {
      return 'red';
    }
  }

  getTimeColor(timeName: string) {
    if ( timeName.indexOf('1-2') >= 0) {
      return '#D8BFD8';
    } else if ( timeName.indexOf('3-4') >= 0) {
      return '#DAA520';
    } else if ( timeName.indexOf('5-6') >= 0) {
      return '#FA8072';
    } else if ( timeName.indexOf('7-8') >= 0) {
      return '#FF1493';
    } else {
      return '#FF1493';
    }
  }
}
