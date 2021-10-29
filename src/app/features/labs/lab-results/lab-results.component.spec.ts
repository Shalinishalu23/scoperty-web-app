import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabResultsComponent } from './lab-results.component';
import { LabResult } from 'src/app/shared/models/labRequest-model';

let labResult : LabResult
let labResults = ({
  userName: 'John',
  sl: 1,
  date: new Date(),
  testNumber: '',
  results: '',
  disposition: '',
  partNumber: '',
  processNumber: '',
  specNumber: '',
  LabRequestId: null,
});
describe('LabResultsComponent', () => {
  let component: LabResultsComponent;
  let fixture: ComponentFixture<LabResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create insertLabResults method', () => {
    component.labResultList = null;
    component.insertLabResults();
    component.labResultList = [{UserName: 'John', TestNumber: '7684', Results: 'Pass'}];
    component.insertLabResults()
    expect(component).toBeTruthy();
  });

  it('should create add new row method', () => {
    component.addNewRow()
    expect(component).toBeTruthy();
  });

  it('should create delete row method', () => {
    component.onDelete(null); //Pass labResult as param
    expect(component).toBeTruthy();
  });

  it('should create edit initmethod', () => {
    component.onRowEditInit(labResult); //Pass labResult as param
    expect(component).toBeTruthy();
  });

  it('should create edit save method', () => {
    component.onRowEditSave(labResult);
    delete component.clonedLabResults[labResult.sl];    //Pass labResult as param
    component.labTable.emit(labResults);
  });

  it('should create edit cancel method', () => {
    component.onRowEditCancel(labResult, 1); //Pass labResult as param
    delete component.clonedLabResults[labResult.sl];
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
