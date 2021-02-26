import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuizForm } from './quiz-form';
import { QuizMessageService } from '../quiz-message.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  constructor(private http: HttpClient, private service: QuizMessageService) {}

  idcategories = new Map();
  categories = ["Any Category"];
  difficulties = [
    'Any Difficulty', 'Easy',
    'Medium', 'Hard'
  ];
  types = [
    'Any Type', 'Multiple Choice', 'True / False'
  ];

  model = new QuizForm(10, this.categories[0], this.difficulties[0], this.types[0]);
  submitted = false;

  onSubmit() {

    if (!this.badInput()) {
      this.submitted = true;
      let url = "https://opentdb.com/api.php?";
      url += "amount=" + this.model.nbrQuestions;
      if(this.model.category !== "Any Category"){
        url += "&category=" + this.idcategories.get(this.model.category);
      }
      if(this.model.difficulty !== "Any Difficulty"){
        url += "&difficulty=" + this.model.difficulty.toLowerCase();
      }
      if(this.model.type !== "Any Type"){
        url += "&type=";
        if(this.model.type === "Multiple Choice") url += "multiple";
        else if(this.model.type === "True / False") url += "boolean";

      }
      this.model.url = url;
      this.service.setQuiz(this.model);
    }
  }

  badInput() {
    return this.model.nbrQuestions < 1 || this.model.nbrQuestions > 50;
  }

  revertChanges() {
    this.submitted = false;
  }

  ngOnInit(): void {
    this.http.get<any>("https://opentdb.com/api_category.php").subscribe(result => {
      result["trivia_categories"].forEach((elem) => this.idcategories.set(elem.name, elem.id));
      this.idcategories.forEach((key, value) => this.categories.push(value));
      this.model.category = this.categories[0];
    });
  }

}
