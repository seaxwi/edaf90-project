import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewQuizComponent } from './app-new-quiz.component';

describe('AppNewQuizComponent', () => {
  let component: AppNewQuizComponent;
  let fixture: ComponentFixture<AppNewQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNewQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
