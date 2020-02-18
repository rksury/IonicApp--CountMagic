import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RbankPage } from './rbank.page';

describe('RbankPage', () => {
  let component: RbankPage;
  let fixture: ComponentFixture<RbankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RbankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
