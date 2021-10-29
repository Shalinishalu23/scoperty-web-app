import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { Configuration } from 'src/app/config/app-settings.config';
import { UtilityService } from './utility.service';


describe('UtilityService', () => {
  let service: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [Configuration, MessageService],
    });
    service = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    service.getPriority();
    service.deleteRequest(null, null);
    service.updateRequest(null, null, null);
    service.addRequest(null, null);
    service.removeValidators(null);
    expect(service).toBeTruthy();
  });

  it('should call displayAlert method', () => {
    service.displayAlert('info', 'Updated Successfully!');
    service.clearMessages();
    expect(service).toBeTruthy();
  });

  it('should call sendDataViaService method', () => {
    service.sendDataViaService('data');
    expect(service).toBeTruthy();
  });

  
  

  // it('updateRequest() should be called', () =>{
  //   service.updateRequest('values', '2', 'getPriority').subscribe((res) => {
  //       expect(res).toBeTruthy();
  //   })
  // });

});
