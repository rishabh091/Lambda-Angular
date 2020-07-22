import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompOtpComponent } from './comp-otp.component';

describe('CompOtpComponent', () => {
  let component: CompOtpComponent;
  let fixture: ComponentFixture<CompOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
