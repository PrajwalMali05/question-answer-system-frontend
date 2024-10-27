import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { QuestionAnswerModule } from './core/question-answer/question-answer.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './core/shared/material/material.module';
import { TopicController } from '../lib/TopicController';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    QuestionAnswerModule,
    provideAnimationsAsync(),
    MaterialModule,
    TopicController,
  ],
};
