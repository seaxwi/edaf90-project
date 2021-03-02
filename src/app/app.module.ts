import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizViewComponent } from './quiz-view/quiz-view.component';
import { QuizMessageService } from './quiz-message.service';
import { ResultViewComponent } from './result-view/result-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewQuizComponent,
    HighscoresComponent,
    ErrorViewComponent,
    QuizFormComponent,
    QuizViewComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [QuizMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
