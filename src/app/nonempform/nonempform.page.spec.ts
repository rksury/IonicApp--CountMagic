import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonempformPage } from './nonempform.page';

describe('NonempformPage', () => {
  let component: NonempformPage;
  let fixture: ComponentFixture<NonempformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonempformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonempformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
