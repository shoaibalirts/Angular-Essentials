import { Component, Input } from '@angular/core';
interface ParentTask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
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
