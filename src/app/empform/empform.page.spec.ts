import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpformPage } from './empform.page';

describe('EmpformPage', () => {
  let component: EmpformPage;
  let fixture: ComponentFixture<EmpformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
