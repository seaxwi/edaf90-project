import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewQuizComponent,
    HighscoresComponent,
    PageNotFoundComponent,
    QuizFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
