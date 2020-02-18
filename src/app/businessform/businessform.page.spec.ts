import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessformPage } from './businessform.page';

describe('BusinessformPage', () => {
  let component: BusinessformPage;
  let fixture: ComponentFixture<BusinessformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
