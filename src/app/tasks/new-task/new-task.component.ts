import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeDialogEvent = new EventEmitter<boolean>();
  @Output() formSubmitEvent = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  closeDialog() {
    this.closeDialogEvent.emit(false);
  }
  onSubmit() {
    this.formSubmitEvent.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
