import { Component } from '@angular/core';
import { HeaderComponent } from './header/HeaderComponent.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  onSelectUser1(id: string) {
    console.log('selected user with id ' + id);
  }
}
