import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { TriviaComponent } from './pages/trivia/trivia.component';

const routes: Routes = [
    { path: '', component: StartComponent },
    { path: 'trivia', component: TriviaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
