import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string; // accepted userId from app component
  @Input({ required: true }) name!: string;
  @Output() addTask = new EventEmitter<string>();
  // @Input() name: string | undefined; // same as above
  tasks = dummyTasks;
  selectedTaskId?: string;

  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => this.userId === task.userId); // array of objects
  }
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    console.log('clicked');
    this.isAddingTask = false;
  }
  onSubmitTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    console.log(this.tasks);

    this.isAddingTask = false;
  }
}
