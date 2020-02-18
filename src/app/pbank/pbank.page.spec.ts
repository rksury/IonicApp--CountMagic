import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PbankPage } from './pbank.page';

describe('PbankPage', () => {
  let component: PbankPage;
  let fixture: ComponentFixture<PbankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PbankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
