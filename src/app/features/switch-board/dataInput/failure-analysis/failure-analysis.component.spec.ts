import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureAnalysisComponent } from './failure-analysis.component';

describe('FailureAnalysisComponent', () => {
  let component: FailureAnalysisComponent;
  let fixture: ComponentFixture<FailureAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailureAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
