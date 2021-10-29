import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingReviewComponent } from './drawing-review.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DrawingReviewComponent', () => {
  let component: DrawingReviewComponent;
  let fixture: ComponentFixture<DrawingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ DrawingReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
