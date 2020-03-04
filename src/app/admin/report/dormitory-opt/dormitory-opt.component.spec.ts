import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryOptComponent } from './dormitory-opt.component';

describe('DormitoryOptComponent', () => {
  let component: DormitoryOptComponent;
  let fixture: ComponentFixture<DormitoryOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitoryOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
