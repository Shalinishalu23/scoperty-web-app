import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { Configuration } from 'src/app/config/app-settings.config';
import { UtilityService } from 'src/app/services/utility.service';
import { AddLabworkComponent } from './add-labwork.component';

describe('AddLabworkComponent', () => {
  let component: AddLabworkComponent;
  let fixture: ComponentFixture<AddLabworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [AddLabworkComponent],
      providers: [UtilityService, Configuration, MessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.editRowData = {Id: 1}
    component.editForm = true;
    component.createFormBuilder();
    expect(component).toBeTruthy();
  });

  it('should call add Lab Request method', () => {
    component.addLabRequest();
    component.labresults = [
      {date: '29-09-21', UserName: 'John Peter', TestNumber: '7658', Results: 'Pass' },
      {date: '29-09-21', UserName: 'John Peter', TestNumber: '7659', Results: 'Fail' }
    ]
    expect(component).toBeTruthy();
  });

  it('should call Change Location method', () => {
    let msg = 'Record saved successfully!'
    component.changeLocation(msg);
  });

  it('should call all Lab Request method', () => {
    component.getAllLabRequests();
    expect(component).toBeTruthy();
  });

  it('Call convert to PDF method', () => {
    component.convertToPDF();
    component.getDropdownData('getDataType');
    expect(component).toBeTruthy();
  });

  it('should call Remove Validators & Receive Messages method', () => {
    component.removeValidators('getDataType');
    expect(component).toBeTruthy();
  });
});
