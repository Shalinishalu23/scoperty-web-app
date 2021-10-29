import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { Configuration } from 'src/app/config/app-settings.config';
import { GlobalVariableService } from 'src/app/services/global-variable.service';
import { UtilityService } from 'src/app/services/utility.service';
import { SwitchBoardComponent } from './switch-board.component';

let type : string;

describe('SwitchBoardComponent', () => {
  let component: SwitchBoardComponent;
  let fixture: ComponentFixture<SwitchBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ SwitchBoardComponent ],
      providers: [ UtilityService, Configuration, MessageService, GlobalVariableService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getDropdownData method', () => {
    let obj = {};
    type = 'getInputFrom'
    component.getDropdownData(type);
    component.globalVariableService.setPriorityDD(obj)
    type = 'getVal';
    component.getDropdownData(type);
    type = null;
    component.getDropdownData(type);
    // UtilityService.getResponse(type).subscribe((res) => {
    //   component.globalVariableService.setInputFromDD(res.body['Data']);
    //   });

    component.changeActive(1, 'mainexpand');
    expect(component).toBeTruthy();
  });

  it('should call loadDropdownData method', () => {
    component.globalVariableService.getPriorityDD = null;
    component.loadDropdownData();
    component.globalVariableService.getInputFromDD = null;
    component.loadDropdownData();
  });
});
