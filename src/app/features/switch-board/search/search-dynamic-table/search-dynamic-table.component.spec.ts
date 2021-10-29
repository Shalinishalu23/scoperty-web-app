import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchDynamicTableComponent } from './search-dynamic-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Configuration } from 'src/app/config/app-settings.config';
import { UtilityService } from 'src/app/services/utility.service';

describe('SearchDynamicTableComponent', () => {
  let component: SearchDynamicTableComponent;
  let fixture: ComponentFixture<SearchDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ SearchDynamicTableComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.exportExcel();
    component.exportPdf();
    expect(component).toBeTruthy();
  });
});
