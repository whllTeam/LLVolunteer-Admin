import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityForOrgComponent } from './activity-for-org.component';

describe('ActivityForOrgComponent', () => {
  let component: ActivityForOrgComponent;
  let fixture: ComponentFixture<ActivityForOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityForOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityForOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
