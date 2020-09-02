import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersFeaturesComponent } from './features.component';

describe('RecruitersFeaturesComponent', () => {
  let component: RecruitersFeaturesComponent;
  let fixture: ComponentFixture<RecruitersFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
