import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxDynamicFormComponent } from './toolbox-dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';

let tblColumn : [{ field: 'Id', header: 'ID' },
{ field: 'TurnbackCategory', header: 'TurnbackCategory' },
{ field: 'Status', header: 'Status' }]

describe('ToolboxDynamicFormComponent', () => {
  let component: ToolboxDynamicFormComponent;
  let fixture: ComponentFixture<ToolboxDynamicFormComponent>;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ ToolboxDynamicFormComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call method createFormBuilder of toolbox dynamic form', () => {
    component.pageName = 'turnbacks';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'turnbacks';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'utrc';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'utrc';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'memos';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'memos';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'lwr';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'lwr';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'micro';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'micro';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'poc';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'poc';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'hardware';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'hardware';
    component.createFormBuilder();
    component.editRowData = null;
    component.pageName = 'hser';
    component.createFormBuilder();
    component.editRowData = 123;
    component.pageName = 'hser';
    component.createFormBuilder();
    expect(component).toBeTruthy();
  });

  it('should set title', () => {
    component.setTitle('toolbox form title');
    expect(component).toBeTruthy();
  });

  it('should set tabChanged', () => {
    component.tabChanged(null);
    //component.cols = tblColumn;
    //expect(component.cols).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
