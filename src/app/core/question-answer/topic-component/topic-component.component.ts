import { Component, OnInit } from '@angular/core';
import { QuestionAnswerServiceService } from '../question-answer-service.service';
import { Topic } from '../../../../lib/Api';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonPopupComponentComponent } from '../../shared/popups/common-popup-component/common-popup-component.component';
import { TopicDetails } from '../../shared/models/TopicComponent';

@Component({
  selector: 'app-topic-component',
  standalone: false,
  templateUrl: './topic-component.component.html',
  styleUrl: './topic-component.component.scss',
})
export class TopicComponentComponent implements OnInit {
  constructor(
    public questionAnswerService: QuestionAnswerServiceService,
    public dialog: MatDialog
  ) {}
  public dialogRef!: MatDialogRef<CommonPopupComponentComponent>;
  public allTopics: Topic[] = [];
  public ngOnInit(): void {
    this.initialisedData();
  }
  public initialisedData(): void {
    this.questionAnswerService.getAllTopics().subscribe((data) => {
      this.allTopics = data;
    });
  }
  public addNewTopic(): void {
    this.dialogRef = this.dialog.open(CommonPopupComponentComponent, {
      disableClose: true,
      height: '70%',
      width: '80%',
      panelClass: 'dialog-content',
    });
    this.dialogRef.afterClosed().subscribe((data: TopicDetails) => {
      this.saveTopic(data);
    });
  }
  public saveTopic(data: TopicDetails) {
    this.questionAnswerService.addTopic(data).subscribe((data) => {
      console.log('topic added successfully', data);
      this.initialisedData();
    });
  }
  public deleteTopic(topic: Topic): void {
    this.questionAnswerService.deleteTopic(topic).subscribe(() => {
      console.log('data deleted');
      this.initialisedData();
    });
  }
  public viewTopic(): void {}
  public editTopic(): void {}
}
