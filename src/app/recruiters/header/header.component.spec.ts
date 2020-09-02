import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersHeaderComponent } from './header.component';

describe('RecruitersHeaderComponent', () => {
  let component: RecruitersHeaderComponent;
  let fixture: ComponentFixture<RecruitersHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
