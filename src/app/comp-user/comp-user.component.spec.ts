import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUserComponent } from './comp-user.component';

describe('CompUserComponent', () => {
  let component: CompUserComponent;
  let fixture: ComponentFixture<CompUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
