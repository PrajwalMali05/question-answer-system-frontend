import { Injectable } from '@angular/core';
import { TopicController } from '../../../lib/TopicController';
import { Observable } from 'rxjs';
import { Topic } from '../../../lib/Api';
import { TopicDetails } from '../shared/models/TopicComponent';

@Injectable({
  providedIn: 'root',
})
export class QuestionAnswerServiceService {
  constructor(private topicController: TopicController) {}
  public getAllTopics(): Observable<Topic[]> {
    return this.topicController.getAllTopics();
  }
  public addTopic(data: TopicDetails): Observable<TopicDetails> {
    return this.topicController.addTopic(data);
  }
  deleteTopic(topic: Topic): Observable<void> {
    return this.topicController.deleteTopic(topic);
  }
}
