import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicComponentComponent } from './topic-component/topic-component.component';
import { QuestionAnswerServiceService } from './question-answer-service.service';
import { MaterialModule } from '../shared/material/material.module';
import { TopicController } from '../../../lib/TopicController';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonPopupComponentComponent } from '../shared/popups/common-popup-component/common-popup-component.component';

@NgModule({
  declarations: [TopicComponentComponent, CommonPopupComponentComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  providers: [QuestionAnswerServiceService, TopicController, MaterialModule],
  exports: [TopicComponentComponent],
})
export class QuestionAnswerModule {}
