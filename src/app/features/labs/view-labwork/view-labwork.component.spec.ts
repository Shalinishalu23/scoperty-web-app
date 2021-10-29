import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';
import { Configuration } from 'src/app/config/app-settings.config';
import { ViewLabworkComponent } from './view-labwork.component';


describe('ViewLabworkComponent', () => {
  let component: ViewLabworkComponent;
  let fixture: ComponentFixture<ViewLabworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ViewLabworkComponent ],
      providers: [ Configuration, MessageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLabworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call edit/deletRecord methods', () => {
    let item = {Id: '1', workBy: 'John'};
    component.editRecord({});
    component.deleteRecord(item);
    component.hideDialog();
    component.formDialog = false;
    component.saveProduct();
    expect(component).toBeTruthy();
  });
});
