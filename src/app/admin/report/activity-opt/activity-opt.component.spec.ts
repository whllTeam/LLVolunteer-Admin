import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOptComponent } from './activity-opt.component';

describe('ActivityOptComponent', () => {
  let component: ActivityOptComponent;
  let fixture: ComponentFixture<ActivityOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
