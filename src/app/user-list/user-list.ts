import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users = [
    {
      id: 1,
      name: 'ducnm',
      email: 'ducnm@zhost.vn',
    },
    {
      id: 2,
      name: 'quynhhv',
      email: 'quynhhv@zhost.vn',
    },
    {
      id: 3,
      name: 'hieutc',
      email: 'hieutc@zhost.vn',
    },
    {
      id: 4,
      name: 'thulta',
      email: 'thulta@zhost.vn',
    },
  ];

  filterText = '';

  filterUser() {
    return this.users.filter((user) =>
      user.email.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
