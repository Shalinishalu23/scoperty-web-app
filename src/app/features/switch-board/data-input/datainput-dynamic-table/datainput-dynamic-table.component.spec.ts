import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatainputDynamicTableComponent } from './datainput-dynamic-table.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';
import {MatDialogModule} from '@angular/material/dialog';


describe('DatainputDynamicTableComponent', () => {
  let component: DatainputDynamicTableComponent;
  let fixture: ComponentFixture<DatainputDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule, MatDialogModule ],
      declarations: [ DatainputDynamicTableComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatainputDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.editRecord({});
    component.deleteRecord({});
    component.getAllData();
    component.tableData = {};
    component.hideDialog();
    expect(component).toBeTruthy();
  });
});
