import { Observable, Subject } from 'rxjs';
import { request } from './superagentIntercept';
import { ApiProperties } from './ApiProperties';
import { Topic } from './Api';
import { TopicDetails } from '../app/core/shared/models/TopicComponent';

export class TopicController {
  public bastPath!: string;
  private getApiProperties(): void {
    this.bastPath = ApiProperties.getBasePath();
  }
  public getAllTopics(): Observable<Topic[]> {
    this.getApiProperties();
    const currentPath = this.bastPath + '/api/topic';
    const sendResult = new Subject<Topic[]>();
    request
      .get(currentPath)
      .set('Content-Type', 'application/json')
      .set('Access-control-Allow-origin', '*')
      .end((err, res) => {
        if (err) {
          sendResult.error(() => {
            console.error('error occured');
          });
        } else if (res) {
          sendResult.next(JSON.parse(res.text));
        }
      });
    return sendResult.asObservable();
  }
  public addTopic(data: TopicDetails): Observable<TopicDetails> {
    this.getApiProperties();
    const currentPath = this.bastPath + '/api/topic';
    const sendResult = new Subject<TopicDetails>();
    request
      .post(currentPath)
      .set('Content-Type', 'application/json')
      .set('Access-control-Allow-origin', '*')
      .send(data)
      .end((err, res) => {
        if (err) {
          sendResult.error(() => {
            console.error('error occured');
          });
        } else if (res) {
          sendResult.next(JSON.parse(res.text));
        }
      });
    return sendResult.asObservable();
  }
  public deleteTopic(data: Topic): Observable<void> {
    this.getApiProperties();
    const currentPath = this.bastPath + '/api/topic/' + data._id;
    const sendResult = new Subject<void>();
    request
      .delete(currentPath)
      .set('Content-Type', 'application/json')
      .set('Access-control-Allow-origin', '*')
      .end((err, res) => {
        if (err) {
          sendResult.error(() => {
            console.error('error occured');
          });
        } else if (res) {
          sendResult.next(JSON.parse(res.text));
        }
      });
    return sendResult.asObservable();
  }
}
