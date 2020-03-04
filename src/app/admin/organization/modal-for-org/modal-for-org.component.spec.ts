import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForOrgComponent } from './modal-for-org.component';

describe('ModalForOrgComponent', () => {
  let component: ModalForOrgComponent;
  let fixture: ComponentFixture<ModalForOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalForOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalForOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
