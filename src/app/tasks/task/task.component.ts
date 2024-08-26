import { Component, Input } from '@angular/core';
import { type ParentTask } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) childTask!: ParentTask; // error because undefined is not assignable to type Task
  get task() {
    return this.childTask;
  }
}
