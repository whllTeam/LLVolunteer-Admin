import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitortTabsComponent } from './dormitort-tabs.component';

describe('DormitortTabsComponent', () => {
  let component: DormitortTabsComponent;
  let fixture: ComponentFixture<DormitortTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitortTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitortTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
