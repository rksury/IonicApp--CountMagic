import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PchequePage } from './pcheque.page';

describe('PchequePage', () => {
  let component: PchequePage;
  let fixture: ComponentFixture<PchequePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PchequePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PchequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
