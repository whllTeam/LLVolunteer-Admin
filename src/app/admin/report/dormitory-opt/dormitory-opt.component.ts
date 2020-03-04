import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DormitoryType } from '../../Model/Dormitory/dormitoryType';
import { DormitoryOptService } from '../Services/dormitory-opt.service';

@Component({
  selector: 'app-dormitory-opt',
  templateUrl: './dormitory-opt.component.html',
  styleUrls: ['./dormitory-opt.component.css']
})
export class DormitoryOptComponent implements OnInit {

  dormitoryType: DormitoryType[];
  chooseTab = '';
  userName: string;
  constructor(
    private dormitoryService: DormitoryOptService,
  ) { }

  ngOnInit() {
    const $this = this;
    // 初始化  报名面板
    this.dormitoryService.getDormitoryType()
      .subscribe(value => {
        $this.dormitoryType = value;
        const dormitory = $this.dormitoryType[0];
        $this.chooseTab = dormitory.name + this.confirmGender(dormitory.gender);
      });
  }

  tabSelect(name: string, gender: number) {
    this.chooseTab = name + this.confirmGender(gender);
  }
  confirmGender(gender: number) {
    return gender === 1 ? '(男寝)' : gender === 2 ? '(女寝)' : '(未知)';
  }
}
