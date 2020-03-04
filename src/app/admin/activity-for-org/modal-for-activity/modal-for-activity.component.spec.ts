import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalForActivityComponent } from './modal-for-activity.component';

describe('ModalForActivityComponent', () => {
  let component: ModalForActivityComponent;
  let fixture: ComponentFixture<ModalForActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalForActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalForActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
