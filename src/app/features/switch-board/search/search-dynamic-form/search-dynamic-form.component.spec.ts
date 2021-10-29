import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchDynamicFormComponent } from './search-dynamic-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('SearchDynamicFormComponent', () => {
  let component: SearchDynamicFormComponent;
  let fixture: ComponentFixture<SearchDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ SearchDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call createFormBuilder method of search dynamic form', () => {
    component.pageName = 'searchDrawingReview';
    component.createFormBuilder();
    component.pageName = 'searchMemo';
    component.createFormBuilder();
    component.pageName = 'searchTurnBack';
    component.createFormBuilder();
    component.pageName = 'searchDrawingReview';
    component.createFormBuilder();
    expect(component).toBeTruthy();
  });
});
