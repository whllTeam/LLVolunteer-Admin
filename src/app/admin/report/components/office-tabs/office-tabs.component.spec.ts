import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeTabsComponent } from './office-tabs.component';

describe('OfficeTabsComponent', () => {
  let component: OfficeTabsComponent;
  let fixture: ComponentFixture<OfficeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
