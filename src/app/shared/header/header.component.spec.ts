import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

let matSlideToggleChange: MatSlideToggleChange;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });                                                                                                            

  it('should call onDarkModeSwitched method', () => {
    component.darkModeSwitched.emit(true);
    component.onDarkModeSwitched(matSlideToggleChange);
    expect(component).toBeTruthy();
  });

  it('should call toggleSideBar', () => {
    component.toggleSideBarForMe.emit();
    component.toggleSideBar();
  });

});
