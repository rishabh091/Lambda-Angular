import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSignupComponent } from './comp-signup.component';

describe('CompSignupComponent', () => {
  let component: CompSignupComponent;
  let fixture: ComponentFixture<CompSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
