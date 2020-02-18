import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcessingPage } from './processing.page';

describe('ProcessingPage', () => {
  let component: ProcessingPage;
  let fixture: ComponentFixture<ProcessingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
