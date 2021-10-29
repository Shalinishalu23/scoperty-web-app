import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolBoxComponent } from './tool-box.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';

describe('ToolBoxComponent', () => {
  let component: ToolBoxComponent;
  let fixture: ComponentFixture<ToolBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ ToolBoxComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should create getToolbox method', () => {
    component.formName = 'drawingreview';
    component.getToolbox();
    component.formName = 'metallicdesign';
    component.getToolbox();
    component.formName = 'componentspecific';
    component.getToolbox();
    component.formName = 'memos';
    component.getToolbox();
    component.formName = 'turnbacks';
    component.getToolbox();
    component.formName = 'designreview';
    component.getToolbox();
  });

  it('should create getToolBoxForm method', () => {
    component.formName = 'help';
    component.getToolBoxForm(component.formName);
    expect(component).toBeTruthy();
  });

});
