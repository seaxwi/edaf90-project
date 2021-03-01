import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  headers = ["question", "correct answer", "answer"];
  rows = [];


  constructor() { }

  ngOnInit(): void {
    console.log("result init");
    var result = JSON.parse(localStorage.getItem("highscores"))[0];
    var questions = result.questions;
    for (var i = 0; i < result["nbrQuestions"]; i++) {
      console.log(this.rows.push([questions[i].question, questions[i].correctAnswer, questions[i].submittedAnswer]));
    }
    console.log(JSON.stringify(this.rows));
  }

}
