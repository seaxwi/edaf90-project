import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from './quiz-form/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizMessageService {


  private quiz = new Quiz(0,"","","");
  quiz$ = new BehaviorSubject<Quiz>(this.quiz);

  setQuiz(quiz: Quiz){
    this.quiz$.next(quiz);
  }

  constructor() { }
}
