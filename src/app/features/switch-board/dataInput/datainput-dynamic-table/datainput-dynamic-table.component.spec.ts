import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { Configuration } from 'src/app/config/app-settings.config';
import { UtilityService } from 'src/app/services/utility.service';
import { DatainputDynamicTableComponent } from './datainput-dynamic-table.component';



describe('DatainputDynamicTableComponent', () => {
  let component: DatainputDynamicTableComponent;
  let fixture: ComponentFixture<DatainputDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
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
    component.hideDialog();
    expect(component).toBeTruthy();
  });
});
