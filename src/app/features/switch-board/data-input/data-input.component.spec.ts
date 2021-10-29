import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputComponent } from './data-input.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';
import { MatTabChangeEvent } from '@angular/material/tabs';

let matTabChangeEvent : MatTabChangeEvent;

describe('DataInputComponent', () => {
  let component: DataInputComponent;
  let fixture: ComponentFixture<DataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],
      declarations: [ DataInputComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call tabChanged method', () => {
    component.tabIndex = 0;
    component.tabChanged(matTabChangeEvent);
    component.tabIndex = 1;
    component.getRecords();
  });

  it('should call formTitle method', () => {
    let title = 'Main Expand';
    component.formTitle(title);
  });

  it('should call receiveRecords/receiveCols method', () => {
    let records = [];
    let cols = [];
    component.receiveRecords(records);
    component.receiveCols(cols);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
