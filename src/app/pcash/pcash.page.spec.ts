import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PcashPage } from './pcash.page';

describe('PcashPage', () => {
  let component: PcashPage;
  let fixture: ComponentFixture<PcashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PcashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
