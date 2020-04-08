import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoRyuComponent } from './spo-ryu.component';

describe('SpoRyuComponent', () => {
  let component: SpoRyuComponent;
  let fixture: ComponentFixture<SpoRyuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpoRyuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoRyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
