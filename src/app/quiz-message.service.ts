import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizForm } from './quiz-form/quiz-form';

@Injectable({
  providedIn: 'root'
})
export class QuizMessageService {


  private quiz = new QuizForm(0,"","","");
  quiz$ = new BehaviorSubject<QuizForm>(this.quiz);

  setQuiz(quiz: QuizForm){
    this.quiz$.next(quiz);
  }

  constructor() { }
}
