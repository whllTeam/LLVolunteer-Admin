import { Component, OnInit } from '@angular/core';
import { ActivityOptService } from '../Services/activity-opt.service';
import { SignQuery } from '../../Model/Common/volunteerSignQuery';
import { Volunteer_AllActivity } from '../../Model/ConstValue/const';
import { QueryParameters } from '../../Model/Common/queryParams';
import { ActivitySignInfo } from '../Model/activitySignInfo';

@Component({
  selector: 'app-activity-opt',
  templateUrl: './activity-opt.component.html',
  styleUrls: ['./activity-opt.component.css']
})
export class ActivityOptComponent implements OnInit {

  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  activitySignTables: ActivitySignInfo[];
  mapOfSign: { [key: string]: boolean} = {};
  constructor(
    private service: ActivityOptService
  ) { }

  ngOnInit() {
   this.loadData(this.pageIndex);
  }
  loadData(pageIndex: number) {
    const query = new QueryParameters(pageIndex, this.pageSize, '', '', true);
    this.service.getActivitySignInfoTable(query)
      .subscribe(value => {
        this.activitySignTables = value.data;
        this.pageTotalCount = value.totalItemsCount;
        this.pageIndex = value.pageIndex;
      });
  }
}
