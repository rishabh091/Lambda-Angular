import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompExploreComponent } from './comp-explore.component';

describe('CompExploreComponent', () => {
  let component: CompExploreComponent;
  let fixture: ComponentFixture<CompExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
