import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompActivityComponent } from './comp-activity.component';

describe('CompActivityComponent', () => {
  let component: CompActivityComponent;
  let fixture: ComponentFixture<CompActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
