import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{
  path: 'new-quiz', component: NewQuizComponent
},
{
  path: '', redirectTo: '/new-quiz', pathMatch: 'full'
},
{
  path: 'highscores', component: HighscoresComponent
},
{
  path: '**', component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
