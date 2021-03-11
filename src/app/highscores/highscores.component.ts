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

    if(json !== null) {
      var json2 = this.sort(json);

      for(var i = 0; i < json.length; i++) {
        var row = json2[i];
        var dateString = new Date(row["dateTime"]).toLocaleString();
        this.rows.push({
          dateTime: dateString,
          category: row["category"],
          difficulty: row["difficulty"],
          score: (row["score"] * 100).toString() + "%"
        });
      }
  }

    console.log(JSON.stringify(this.rows));
  }

  sort(list){
    for(var i = 0; i<list.length; i++){
      var currentvalue = list[i];
      var position = i;

      while(position > 0 && list[position -1]["score"] < currentvalue["score"]){
        list[position] = list[position-1];
        position = position -1;
      }
      list[position] = currentvalue;
    }
    return list;

  }

}
