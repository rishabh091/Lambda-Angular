import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFirstScreenComponent } from './comp-first-screen.component';

describe('CompFirstScreenComponent', () => {
  let component: CompFirstScreenComponent;
  let fixture: ComponentFixture<CompFirstScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFirstScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFirstScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
