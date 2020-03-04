import { Component, OnInit, ViewChild } from '@angular/core';
import { NotifyMessageComponent } from '../../notify-message/notify-message.component';
import { ActivitySignInfoQuery } from '../Model/activitySignInfoQuery';
import { ActivityVolunteerService } from '../Services/activity-volunteer.service';
import { QueryParameters } from '../../Model/Common/queryParams';

@Component({
  selector: 'app-activity-for-org',
  templateUrl: './activity-for-org.component.html',
  styleUrls: ['./activity-for-org.component.css']
})
export class ActivityForOrgComponent implements OnInit {

  @ViewChild('notifyMessage')
  notiyfMessage: NotifyMessageComponent;

  activitySignInfos: ActivitySignInfoQuery[];
  activitySignInfosCopy: ActivitySignInfoQuery[];
  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  constructor(
    private service: ActivityVolunteerService
  ) { }

  ngOnInit() {
    this.loadData(this.pageIndex);
  }

  loadData(pageIndex: number) {
    const query = new QueryParameters(pageIndex, this.pageSize, '', '', null);
    this.service.getActivitySignInfoQuery(query)
      .subscribe( value => {
        this.pageTotalCount = value.totalItemsCount;
        this.pageIndex = value.pageIndex;
        this.activitySignInfos = value.data;
        this.activitySignInfosCopy = this.activitySignInfos;
      });
  }
}
