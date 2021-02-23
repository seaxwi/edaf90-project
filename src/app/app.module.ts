import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppNewQuizComponent } from './app-new-quiz/app-new-quiz.component';
import { AppHighscoresComponent } from './app-highscores/app-highscores.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNewQuizComponent,
    AppHighscoresComponent,
    AppPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
