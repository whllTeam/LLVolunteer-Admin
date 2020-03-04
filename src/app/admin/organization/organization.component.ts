import { Component, OnInit, ViewChild } from '@angular/core';
import { NotifyMessageComponent } from '../notify-message/notify-message.component';
import { OrganizationInfo } from '../Model/Organizations/organizationInfo';
import { QueryParameters } from '../Model/Common/queryParams';
import { ShowType_Close, ShowType_Open } from '../Model/ConstValue/const';
import { ModalForOrgComponent } from './modal-for-org/modal-for-org.component';
import { OrganizationService } from '../Services/organization.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  @ViewChild('notifyMessage')
  notiyfMessage: NotifyMessageComponent;

  organizations: OrganizationInfo[];
  organizationsCopy: OrganizationInfo[];
  // 组织信息
  organizationInfos: OrganizationInfo[];
  pageIndex = 1;
  pageSize = 8;
  pageTotalCount: number;
  constructor(
    private service: OrganizationService,
    private modalService: NzModalService
  ) { }
  ngOnInit() {
    this.loadData(this.pageIndex);
    this.service.getOrgInfo()
      .subscribe(value => {
        this.organizationInfos = value;
      });
  }

  loadData(pageIndex: number) {
    const query = new QueryParameters(pageIndex, this.pageSize, '', '', true);
    this.service.getOrgInfoQuery(query)
      .subscribe(value => {
        this.organizations = value.data;
        this.organizationsCopy = this.organizations;
        this.pageTotalCount = value.totalItemsCount;
      });
  }
  delOrganization(id: number, currentValue: boolean, index: number) {
    this.service.delOrgInfo(id, currentValue === true ? ShowType_Close : ShowType_Open)
      .subscribe(value => {
        if (value === true) {
          this.organizationsCopy[index].isDel = currentValue;
          this.notiyfMessage.showMessage('success', currentValue === true ? '关闭成功' : '启用成功');
        } else {
          this.notiyfMessage.showMessage('error', currentValue === true ? '关闭失败' : '启用失败');
        }
        // this.loadData();
      });
  }
  modifiClick(id: number, organization: OrganizationInfo) {
    const $this = this;
    let loading = false;
    let isVisible = false;
    this.modalService.create({
      nzWidth: '800px',
      nzTitle: '志愿组织',
      nzContent: ModalForOrgComponent,
      nzComponentParams: {
        organization
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
