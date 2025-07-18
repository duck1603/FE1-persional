import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  imports: [],
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
      email: 'ducnm@zhost.vn',
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
}
