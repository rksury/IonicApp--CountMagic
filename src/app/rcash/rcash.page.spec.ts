import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RcashPage } from './rcash.page';

describe('RcashPage', () => {
  let component: RcashPage;
  let fixture: ComponentFixture<RcashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RcashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
