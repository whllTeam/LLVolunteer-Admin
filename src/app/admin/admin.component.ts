import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  isReverseArrow = false;
  width = 200;
  bread: string[];
  constructor() { }

  ngOnInit() {
  }

  itemClick(item: string) {
    // this.bread.push(item);
  }
}
