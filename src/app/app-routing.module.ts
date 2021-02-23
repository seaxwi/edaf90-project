import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppNewQuizComponent } from './app-new-quiz/app-new-quiz.component';
import { AppHighscoresComponent } from './app-highscores/app-highscores.component';
import { AppPageNotFoundComponent } from './app-page-not-found/app-page-not-found.component';

const routes: Routes = [{
  path: 'new-quiz', component: AppNewQuizComponent
},
{
  path: '', redirectTo: '/new-quiz', pathMatch: 'full'
},
{
  path: 'highscores', component: AppHighscoresComponent
},
{
  path: '**', component: AppPageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
