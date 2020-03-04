import { Component, OnInit, ViewChild } from '@angular/core';
import { PageInfo } from '../Model/Essay/pageInfo';
import { IndexService } from '../Services/index.service';
import { QueryParameters } from '../Model/Common/queryParams';
import { NotifyMessageComponent } from '../notify-message/notify-message.component';
import { ShowType_Close, ShowType_Open } from '../Model/ConstValue/const';
import { ShowTableComponent } from './show-table/show-table.component';
import { NzModalService } from 'ng-zorro-antd';
import { OrganizationInfo } from '../Model/Organizations/organizationInfo';
import { OrganizationService } from '../Services/organization.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('notifyMessage')
  notiyfMessage: NotifyMessageComponent;

  pageInfos: PageInfo[];
  pageInfosCopy: PageInfo[];
  // 组织信息
  organizationInfos: OrganizationInfo[];
  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  constructor(
    private serveice: IndexService,
    private orgService: OrganizationService,
    private modalService: NzModalService
  ) { }
  ngOnInit() {
    this.loadData(this.pageIndex);
    this.orgService.getOrgInfo()
      .subscribe(value => {
        this.organizationInfos = value;
      });
  }

  loadData(pageIndex: number) {
    const query = new QueryParameters(pageIndex, this.pageSize, '', '', true);
    this.serveice.getPageInfo(query)
      .subscribe(value => {
        this.pageInfos = value.data;
        this.pageInfosCopy = this.pageInfos;
        this.pageTotalCount = value.totalItemsCount;
      });
  }
  delPage(id: number, currentValue: boolean, index: number) {
    this.serveice.delPage(id, currentValue === true ? ShowType_Close : ShowType_Open)
      .subscribe(value => {
        if (value === true) {
          this.pageInfosCopy[index].isDel = currentValue;
          this.notiyfMessage.showMessage('success', currentValue === true ? '关闭成功' : '启用成功');
        } else {
          this.notiyfMessage.showMessage('error', currentValue === true ? '关闭失败' : '启用失败');
        }
        // this.loadData();
      });
  }
  modefiClick(id: number, pageInfo: PageInfo) {
    const $this = this;
    let loading = false;
    let isVisible = false;
    this.modalService.create({
      nzWidth: '800px',
      nzTitle: '志愿动态',
      nzContent: ShowTableComponent,
      nzComponentParams: {
        pageInfo,
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
          $this.loadData(this.pageIndex);
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
