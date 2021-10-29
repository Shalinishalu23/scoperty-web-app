import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterBoxComponent } from './footer-box.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterBoxComponent', () => {
  let component: FooterBoxComponent;
  let fixture: ComponentFixture<FooterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ FooterBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call getFooterbox method', () => {
    component.tableFrom = 'failureanalysis';
    component.getFooterbox();
    component.tableFrom = 'drawingreview';
    component.getFooterbox();
    expect(component).toBeTruthy();
  });

  it('should call getFooterValue method', () => {
    let formName = 'sendMail';
    let subject = 'Testing';
    component.mailText = 'Kavyab@lttss.com?subject=' + subject;
    window.location.href = component.mailText;
    component.getFooterValue(2, formName)
  });
  
});
