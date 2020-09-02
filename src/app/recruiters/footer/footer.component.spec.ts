import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersFooterComponent } from './footer.component';

describe('RecruitersFooterComponent', () => {
  let component: RecruitersFooterComponent;
  let fixture: ComponentFixture<RecruitersFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
