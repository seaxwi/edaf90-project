import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { QuizForm } from '../quiz-form/quiz-form';
import { QuizMessageService } from '../quiz-message.service';
import { filter } from 'minimatch';
import { PresentQuestion } from './presentQuestion';
import { utf8Encode } from '@angular/compiler/src/util';


@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss']
})
export class QuizViewComponent implements OnInit {

  constructor(private http: HttpClient, private service : QuizMessageService) { }

  private quiz = new QuizForm(0,"","","");
  presentQuestions = [];                //presentQuestions används för att smidigare rendera frågor och svarsalternativ, här vet vi inte vad som är rätt och fel svar
  questions = [];                       //questions är datan vi fetchar, vi kan hålla koll på all information kring frågan här¨
  currentQuestionId = 0;
  questionAnswered = false;
  score = 0;

  shouldShow(id){
    //console.log(`Question ${id} is ${id===this.currentQuestionId? "not hidden": "hidden"}`)
    return id !== this.currentQuestionId;
  }

  submitAnswer(event){
    if (!this.questionAnswered) {
      this.questionAnswered = true;

      if(event.target.value === this.questions[this.currentQuestionId].correct_answer) {
        event.target.setAttribute("class", "btn btn-correct");
        this.score++;
      } else {
        event.target.setAttribute("class", "btn btn-incorrect");
      }
    }
  }

  next() {
    this.currentQuestionId += 1;
    this.questionAnswered = false;

    if(this.currentQuestionId === this.quiz.nbrQuestions){
      console.log("All questions answered!")
      //TODO Route till sammanfattning/resultat?

      // Saving results with localStorage
      var percentScore = this.score / this.quiz.nbrQuestions;
      var highscores = JSON.parse(localStorage.getItem("highschores"));
      var newScore = {
        "dateTime": 1010,
        "score": percentScore
      }
      localStorage.setItem("highscores", JSON.stringify([...highscores, newScore]));
    }
  }



  ngOnInit(): void {
    this.service.quiz$.subscribe(quiz => {
      this.quiz = quiz;
    });
    this.http.get<any>(this.quiz.url).subscribe((fetchedData) => {
      /*
      var txt = document.createElement("textarea");
      txt.innerHTML = fetchedData;
      fetchedData = txt.value;
      */
      this.questions = fetchedData.results;
      this.presentQuestions = fetchedData.results.map(q => new PresentQuestion(q.question, q.correct_answer, q.incorrect_answers, this.idCounter++));
      console.log(this.presentQuestions);
    });

  }

  idCounter = 0;


}
