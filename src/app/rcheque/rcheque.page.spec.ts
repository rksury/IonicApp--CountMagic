import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RchequePage } from './rcheque.page';

describe('RchequePage', () => {
  let component: RchequePage;
  let fixture: ComponentFixture<RchequePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RchequePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RchequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
