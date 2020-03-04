import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeOptComponent } from './office-opt.component';

describe('OfficeOptComponent', () => {
  let component: OfficeOptComponent;
  let fixture: ComponentFixture<OfficeOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
