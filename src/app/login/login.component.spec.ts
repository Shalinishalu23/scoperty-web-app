import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

import { UtilityService } from 'src/app/services/utility.service';
import { Configuration } from 'src/app/config/app-settings.config';
import { MessageService } from 'primeng/api';
import {MatDialogModule} from '@angular/material/dialog';

let form : NgForm;
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule, MatDialogModule ],
      declarations: [ LoginComponent ],
      providers: [ UtilityService, Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create signIn/signUp methods', () => {
    // form = [{
    //   value:[{
    //     username: 'admin',
    //     password: 'admin'
    //   }]
    // }]
    
    component.signIn(form);
    form.value.username = 'admin';
    form.value.password = 'admin';
    sessionStorage.setItem('userName', form.value.username);
    component.signUp(form);
    expect(component).toBeTruthy();
  });

  it('sets "title" to "Login" by default', () => {
    let login = 'Login'
    expect(component.title).toBe('Login');
  });

});
