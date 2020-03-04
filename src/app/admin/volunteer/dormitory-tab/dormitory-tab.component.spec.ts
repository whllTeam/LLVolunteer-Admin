import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryTabComponent } from './dormitory-tab.component';

describe('DormitoryTabComponent', () => {
  let component: DormitoryTabComponent;
  let fixture: ComponentFixture<DormitoryTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitoryTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
