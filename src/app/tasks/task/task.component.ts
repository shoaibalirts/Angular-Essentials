import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type ParentTask } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) childTask!: ParentTask; // error removed using ! because undefined is not assignable to type Task
  @Output() complete = new EventEmitter<string>(); // to be binded selectedDeleteTask to parent

  onCompleteTask() {
    console.log(this.complete);

    console.log(this.childTask.id); // t1 or t2 or t3

    this.complete.emit(this.childTask.id); // task.id will be sent to parent when we get it
  }
  get task() {
    return this.childTask;
  }
}
