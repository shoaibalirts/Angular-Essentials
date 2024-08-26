import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string; // accepted userId from app component
  @Input({ required: true }) name!: string;
  // @Input() name: string | undefined; // same as above
  tasks = dummyTasks;
  selectedTaskId?: string;

  get selectedUserTasks() {
    return this.tasks.filter((task) => this.userId === task.userId); // array of objects
  }
}
