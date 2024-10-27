import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-common-popup-component',
  standalone: false,
  templateUrl: './common-popup-component.component.html',
  styleUrl: './common-popup-component.component.scss',
})
export class CommonPopupComponentComponent {
  public constructor(
    private dialogRef: MatDialogRef<CommonPopupComponentComponent>,
    public formGroup: FormBuilder
  ) {}
  public addTopicForm = this.formGroup.group({
    name: this.formGroup.control('', Validators.required),
    description: this.formGroup.control('', Validators.required),
  });

  public saveTopic(): void {
    this.dialogRef.close(this.addTopicForm.value);
  }
}
