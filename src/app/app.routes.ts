import { Routes } from '@angular/router';
import { TopicComponentComponent } from './core/question-answer/topic-component/topic-component.component';

export const routes: Routes = [
  { path: '', component: TopicComponentComponent },
  { path: '**', redirectTo: '' },
];
