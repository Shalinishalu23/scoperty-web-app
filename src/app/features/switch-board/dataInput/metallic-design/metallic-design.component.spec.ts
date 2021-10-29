import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallicDesignComponent } from './metallic-design.component';

describe('MetallicDesignComponent', () => {
  let component: MetallicDesignComponent;
  let fixture: ComponentFixture<MetallicDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetallicDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallicDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
