import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportDynamicFormComponent } from './report-dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';

describe('ReportDynamicFormComponent', () => {
  let component: ReportDynamicFormComponent;
  let fixture: ComponentFixture<ReportDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ ReportDynamicFormComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.createFormBuilder();
    component.getRecords();
    // component.close();
    // component.searchForm();
    expect(component).toBeTruthy();
  });
});
