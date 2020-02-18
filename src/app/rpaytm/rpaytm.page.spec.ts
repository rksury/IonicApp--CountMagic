import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RpaytmPage } from './rpaytm.page';

describe('RpaytmPage', () => {
  let component: RpaytmPage;
  let fixture: ComponentFixture<RpaytmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpaytmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RpaytmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
