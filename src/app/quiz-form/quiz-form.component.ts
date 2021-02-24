import { Component, OnInit } from '@angular/core';

import { Quiz } from './quiz';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  categories = [
    'Any Category', 'General Knowledge', 'Entertainment: Books',
    'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Musicals & Theatres',
    'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games',
    'Science & Nature', 'Science: Computers', 'Science: Mathematics',
    'Mythology', 'Sports', 'Geography',
    'History', 'Politics', 'Art',
    'Celebrities', 'Animals'
  ];

  difficulties = [
    'Any Difficulty', 'Easy',
    'Medium', 'Hard'
  ];

  types = [
    'Any Type', 'Multiple Choice', 'True / False'
  ];

  model = new Quiz(10, this.categories[0], this.difficulties[0], this.types[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }

  ngOnInit(): void {

  }

}
