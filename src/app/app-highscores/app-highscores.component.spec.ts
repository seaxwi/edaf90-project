import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHighscoresComponent } from './app-highscores.component';

describe('AppHighscoresComponent', () => {
  let component: AppHighscoresComponent;
  let fixture: ComponentFixture<AppHighscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHighscoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHighscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
