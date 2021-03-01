import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss']
})
export class ResultViewComponent implements OnInit {
  //formHeaders = ["Number of Questions", "Category", "Difficulty"];
  formRows = [];
  headers = ["Question", "Correct Answer", "Answer"];
  rows = [];
  score = 0;
  category = "";
  difficulty = "";
  nbrQuestions = 0;


  constructor() { }

  ngOnInit(): void {

    console.log("result init");
    var result = JSON.parse(localStorage.getItem("highscores"))[0];



    var questions = result.questions;
    /*
    this.formRows.push(["Number of questions: ", result.nbrQuestions])
    this.formRows.push(["Category: ", result.category])
    this.formRows.push(["Difficulty: ", result.difficulty])
    */
    this.score = result
    this.nbrQuestions = result.nbrQuestions;
    this.category  = result.category;
    this.difficulty = result.difficulty;
    this.score = result.score;

    var questions = result.questions;
    for (var i = 0; i < result["nbrQuestions"]; i++) {
      console.log(this.rows.push([questions[i].question, questions[i].correctAnswer, questions[i].submittedAnswer]));
    }
    console.log(JSON.stringify(this.rows));
  }

}
