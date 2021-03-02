import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { QuizViewComponent } from './quiz-view/quiz-view.component'
import { ResultViewComponent } from './result-view/result-view.component'


const routes: Routes = [{
  path: 'new-quiz', component: NewQuizComponent
},
{
  path: 'quiz-view', component: QuizViewComponent
},
{
  path: '', redirectTo: '/new-quiz', pathMatch: 'full'
},
{
  path: 'highscores', component: HighscoresComponent
},
{
  path: 'result', component: ResultViewComponent
},
{
  path: '**', component: ErrorViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
