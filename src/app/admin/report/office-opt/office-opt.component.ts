import { Component, OnInit } from '@angular/core';
import { OfficeType } from '../../Model/Office/officeType';
import { OfficeOptService } from '../Services/office-opt.service';

@Component({
  selector: 'app-office-opt',
  templateUrl: './office-opt.component.html',
  styleUrls: ['./office-opt.component.css']
})
export class OfficeOptComponent implements OnInit {

  officeType: OfficeType[];
  chooseTab = '';
  userName: string;

  constructor(
    private officeService: OfficeOptService
    ) { }

  ngOnInit() {
    const $this = this;
    // 初始化  报名面板
    this.officeService.getOfficeType()
      .subscribe( value => {
        $this.officeType = value ;
        const dormitory = $this.officeType[0];
        $this.chooseTab = dormitory.name;
      });
    $this.loadData();
    }

  tabSelect(name: string) {
    this.chooseTab = name;
  }


  loadData() {
    // 重新加载数据
  }

}
