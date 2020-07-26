import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEditProfileComponent } from './comp-edit-profile.component';

describe('CompEditProfileComponent', () => {
  let component: CompEditProfileComponent;
  let fixture: ComponentFixture<CompEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
