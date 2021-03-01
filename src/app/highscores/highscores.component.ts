import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent implements OnInit {
  headers = ["Completed", "Category", "Difficulty", "Score (%)"];
  keys = ["dateTime", "category", "difficulty", "score"];
  rows = [];

  constructor() { }

  ngOnInit(): void {
    console.log("init");
    
    var json = JSON.parse(localStorage.getItem("highscores"));
    console.log(json);

    for(var i = 0; i < json.length; i++) {
      var row = json[i];
      var dateString = new Date(row["dateTime"]).toLocaleString();
      this.rows.push({
        dateTime: dateString,
        category: row["category"],
        difficulty: row["difficulty"],
        score: (row["score"] * 100).toString() + "%"
      });
  }

    console.log(JSON.stringify(this.rows));
  }

}
