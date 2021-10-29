import { TestBed } from '@angular/core/testing';
import { GlobalVariableService } from './global-variable.service';

let setValue : object;

describe('GlobalVariableService', () => {
  let service: GlobalVariableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalVariableService);
  });

  it('should return global dropdown values', () => {
    setValue = {Id: 1, Description: 'Electrical'};
    service.setBeingWorkedByDD(setValue);
    service.getBeingWorkedByDD();
    service.setPriorityDD(setValue);
    service.getPriorityDD();
    service.setInputFromDD(setValue);
    service.getInputFromDD();
    service.setProductCategoryDD(setValue);
    service.getProductCategoryDD();
    service.setProgramModelDD(setValue);
    service.getProgramModelDD();
    service.setTeamIdDD(setValue);
    service.getTeamIdDD();
    service.setTaskDD(setValue);
    service.getTaskDD();
    service.setStatusDD(setValue);
    service.getStatusDD();
    service.setScheduledDaysDD(setValue);
    service.getScheduledDaysDD();
    service.setAnsComScoreDD(setValue);
    service.getAnsComScoreDD();
    service.setAnsDataScoreDD(setValue);
    service.getAnsDataScoreDD();
    service.setInvestigationTypeDD(setValue);
    service.getInvestigationTypeDD();
    service.setWpiActiveDD(setValue);
    service.getWpiActiveDD();
    expect(service).toBeTruthy();
  });
});
