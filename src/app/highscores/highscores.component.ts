import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {
  headers = ["dateTime", "score"];
  rows = [];

  constructor() {
    let newScore = {
      "dateTime" : "1",
      "score" : "Rahul",
    }
    this.rows.push(newScore);
  }

  ngOnInit(): void {
    /* 
    console.log("init");
    this.rows = JSON.parse(localStorage.getItem("highscores"));
    if (true) {
      this.rows = [];
    }
    var newScore = {
      "dateTime" : "1",
      "score" : "Rahul",
    }
    this.rows.push(newScore);
    console.log("GOT HIGHSCORES");
    console.log(this.rows);
    */
  }

}
