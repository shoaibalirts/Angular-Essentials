import { Component } from '@angular/core';
import { HeaderComponent } from './header/HeaderComponent.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1'; // state initial value
  get getSelectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }
  onSelectUser1(id: string) {
    this.selectedUserId = id; // update state to new id when select event is triggered
  }
}
