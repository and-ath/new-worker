import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersQuestionComponent } from './question.component';

describe('RecruitersQuestionComponent', () => {
  let component: RecruitersQuestionComponent;
  let fixture: ComponentFixture<RecruitersQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
