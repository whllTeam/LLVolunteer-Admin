import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivityForOrganization } from '../Model/Organizations/activityForOrganization';
import { NotifyMessageComponent } from '../notify-message/notify-message.component';
import { OrganizationInfo } from '../Model/Organizations/organizationInfo';
import { ActivityService } from '../Services/activity.service';
import { NzModalService } from 'ng-zorro-antd';
import { OrganizationService } from '../Services/organization.service';
import { QueryParameters } from '../Model/Common/queryParams';
import { ShowType_Close, ShowType_Open } from '../Model/ConstValue/const';
import { ModalForActivityComponent } from './modal-for-activity/modal-for-activity.component';

@Component({
  selector: 'app-activity-for-org',
  templateUrl: './activity-for-org.component.html',
  styleUrls: ['./activity-for-org.component.css']
})
export class ActivityForOrgComponent implements OnInit {

  @ViewChild('notifyMessage')
  notiyfMessage: NotifyMessageComponent;

  activities: ActivityForOrganization[];
  activitiesCopy: ActivityForOrganization[];
  // 组织信息
  organizationInfos: OrganizationInfo[];
  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  constructor(
    private serveice: ActivityService,
    private orgService: OrganizationService,
    private modalService: NzModalService
  ) { }
  ngOnInit() {
    this.orgService.getOrgInfo()
      .subscribe(value => {
        this.organizationInfos = value;
        this.loadData(this.pageIndex);
      });
  }

  loadData(pageIndex: number) {
    const query = new QueryParameters(pageIndex, this.pageSize, '', '', true);
    this.serveice.getActivities(query)
      .subscribe(value => {
        this.activities = value.data;
        this.activitiesCopy = this.activities;
        this.pageTotalCount = value.totalItemsCount;
      });
  }
  getOrgInfo(orgId: number) {
    const org = this.organizationInfos.filter( t => t.id === orgId);
    return org.length > 0 ? org[0].organizerName : '未知';
  }
  delActivity(id: number, currentValue: boolean, index: number) {
    this.serveice.delActivity(id, currentValue === true ? ShowType_Close : ShowType_Open)
      .subscribe(value => {
        if (value === true) {
          this.activitiesCopy[index].isDel = currentValue;
          this.notiyfMessage.showMessage('success', currentValue === true ? '关闭成功' : '启用成功');
        } else {
          this.notiyfMessage.showMessage('error', currentValue === true ? '关闭失败' : '启用失败');
        }
        // this.loadData();
      });
  }
  modefiClick(id: number, activity: ActivityForOrganization) {
    const $this = this;
    let loading = false;
    let isVisible = false;
    this.modalService.create({
      nzWidth: '800px',
      nzTitle: '志愿动态',
      nzContent: ModalForActivityComponent,
      nzComponentParams: {
        activity,
        organizationInfos: $this.organizationInfos
      },
      nzVisible: isVisible,
      nzOkLoading: loading,
      nzOnOk: table => {
        loading = true;
        isVisible = true;
        return table.submitForm().subscribe(value => {
          loading = false;
          isVisible = false;
          if (value === true) {
            $this.notiyfMessage.showMessage('info', id === -1 ? '添加成功' : '修改成功');
          } else {
            $this.notiyfMessage.showMessage('info', id === -1 ? '添加失败' : '修改失败');
          }
          $this.loadData($this.pageIndex);
          return value;
        });
      },
      nzOnCancel: table => {
        return true;
        // 下面 有bug
        const quite = $this.notiyfMessage
          .showConfirm('确认要退出吗?', () => {
            $this.notiyfMessage.showMessage('info', '用户已取消');
          }, () => { });
      }
    });
  }
}
