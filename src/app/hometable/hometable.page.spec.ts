import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HometablePage } from './hometable.page';

describe('HometablePage', () => {
  let component: HometablePage;
  let fixture: ComponentFixture<HometablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HometablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
