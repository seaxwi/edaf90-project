import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {
  headers = ["dateTime", "score"];
  rows = [];

  constructor() { }

  ngOnInit(): void {
    console.log("init");
    
    if (true) {
      this.rows = [];
    }
    /*
    var newScore = {
      "dateTime" : "1",
      "score" : "Rahul",
    }
    this.rows.push(newScore);

    localStorage.setItem("highscores", JSON.stringify([this.rows]));
    */
    this.rows = JSON.parse(localStorage.getItem("highscores"));
    console.log(JSON.stringify(this.rows));
  }

}
